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
  function (err, file) {
    if (err) {
      console.error(`Error uploading image image_to_upload.jpeg: ${err}`)
    } else {
      console.log(`Image image_to_upload.jpeg uploaded to ${bucketName}.`)

    }
 }
   
)


