// Manual smoke check for the fetch_url signed-URL flow (moved from
// packages/fetch_url/test.js during the Vitest harness setup, issue #61).
// This hits live AWS and does a real HEAD request against the signed URL,
// so it is intentionally NOT part of `npm test`. Run it by hand:
//   node scripts/smoke-signed-url.mjs

import app from '../packages/fetch_url/app.js';

async function testSignedUrlGeneration() {
    console.log('Testing signed URL generation...');

    try {
        const result = await app.generateSignedUrl();
        console.log('✅ Success!');
        console.log('Generated URL:', result.url);
        console.log('Expires in:', result.expires_in, 'seconds');
        console.log('Bucket:', result.bucket);
        console.log('Key:', result.key);
        console.log('Generated at:', result.generated_at);

        // Test the URL by making a HEAD request
        const response = await fetch(result.url, { method: 'HEAD' });
        console.log('URL test result:', response.status, response.statusText);
    } catch (error) {
        console.error('❌ Test failed:', error.message);
        process.exitCode = 1;
    }
}

testSignedUrlGeneration();
