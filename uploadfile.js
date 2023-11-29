const { Storage } = require('@google-cloud/storage')

// Initialize storage
const storage = new Storage({
  keyFilename: `./key.json`,
})

const bucketName = 'jaminansaribucket'
const bucket = storage.bucket(bucketName)

// Sending the upload request
bucket.upload(
  `./name.html`,
  {
    destination: `someFolderInBucket/name.html`,
  },

 async function uploadFile(err , file){
    if (err) {
        console.error(`Error uploading file ${localFilePath}: ${err}`);
      } else {
        console.log(`File ${localFilePath} uploaded to ${bucketName}.`);
    
        // Generate a signed URL for the file
        const [url] = await file.getSignedUrl({
          action: 'read',
          expires: '03-09-2023', // Set an expiration date for the link
        });
    
        console.log(`Download link: ${url}`);
      }
 }
  
)


