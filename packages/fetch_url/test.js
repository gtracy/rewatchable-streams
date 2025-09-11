const app = require('./app');

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
    }
}

// Run the test
testSignedUrlGeneration();
