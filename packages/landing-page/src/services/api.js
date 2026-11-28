// API service for fetching podcast data
const FETCH_URL_ENDPOINT = 'https://lyv84who21.execute-api.us-east-2.amazonaws.com/prod/';
const VIRTUAL_HOSTED_S3_REGEX = /^rewatchables\.s3([.-][a-z0-9-]+)?\.amazonaws\.com$/i;
const PATH_STYLE_S3_HOST = 's3.us-east-2.amazonaws.com';
const PATH_STYLE_BUCKET_PREFIX = '/rewatchables/';

export const isValidSignedUrl = (url) => {
  if (typeof url !== 'string' || !url.trim()) {
    return false;
  }

  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'https:') {
      return false;
    }

    if (VIRTUAL_HOSTED_S3_REGEX.test(parsed.hostname)) {
      return true;
    }

    if (
      parsed.hostname.toLowerCase() === PATH_STYLE_S3_HOST &&
      parsed.pathname.startsWith(PATH_STYLE_BUCKET_PREFIX)
    ) {
      return true;
    }

    return false;
  } catch {
    return false;
  }
};

export const fetchData = async () => {
  try {
    const localDataUrl = import.meta.env.VITE_DATA_URL;
    let dataUrl;

    if (localDataUrl) {
      dataUrl = localDataUrl;
    } else {
      // First, get the signed URL from the fetch_url endpoint
      const signedUrlResponse = await fetch(FETCH_URL_ENDPOINT);

      if (!signedUrlResponse.ok) {
        throw new Error(`Failed to get signed URL: ${signedUrlResponse.status}`);
      }

      const signedUrlData = await signedUrlResponse.json();

      if (!signedUrlData.success) {
        throw new Error('Failed to get signed URL from API');
      }

      if (!isValidSignedUrl(signedUrlData.url)) {
        throw new Error('Invalid signed URL host');
      }

      dataUrl = signedUrlData.url;
    }

    // Fetch the actual JSON data
    const dataResponse = await fetch(dataUrl);

    if (!dataResponse.ok) {
      throw new Error(`Failed to fetch data: ${dataResponse.status}`);
    }

    const podcastData = await dataResponse.json();

    return {
      data: podcastData.podcasts || [],
      success: true,
    };
  } catch (error) {
    throw new Error(`API Error: ${error.message}`);
  }
};
