// API service for fetching podcast data
const FETCH_URL_ENDPOINT = 'https://lyv84who21.execute-api.us-east-2.amazonaws.com/prod/';

export const fetchData = async () => {
  try {
    // First, get the signed URL from the fetch_url endpoint
    const signedUrlResponse = await fetch(FETCH_URL_ENDPOINT);
    
    if (!signedUrlResponse.ok) {
      throw new Error(`Failed to get signed URL: ${signedUrlResponse.status}`);
    }
    
    const signedUrlData = await signedUrlResponse.json();
    
    if (!signedUrlData.success) {
      throw new Error('Failed to get signed URL from API');
    }
    
    // Now fetch the actual JSON data using the signed URL
    const dataResponse = await fetch(signedUrlData.url);
    
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

// Example of how to implement with a real API
export const fetchDataFromAPI = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return {
      data,
      success: true,
    };
  } catch (error) {
    throw new Error(`API Error: ${error.message}`);
  }
};
