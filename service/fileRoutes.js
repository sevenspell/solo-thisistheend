const AWS = require('aws-sdk');
// const multer = require('multer')
// const multerS3 = require('multer-s3')
const path = require("path");
require('dotenv').config();
const fs = require('fs');

// AWS S3 secret key setup (actual keys stored in .env that does not get uploaded to github/heroku)
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ap-southeast-2'
});

// create upload file to AWS S3 function
const uploadFile = (pathname, filename, userID, res) => {

    // Read content from the file
    let fileContent = fs.readFileSync(path.resolve(pathname));

    // Setting up S3 upload parameters
    const params = {
        Bucket: 'thisistheend',
        Key: userID+filename, // File name you want to save as in S3
        Body: fileContent,
        acl: 'authenticated-read'
    };

    // Uploading files to the bucket
    s3.upload(params, function (err, data) {
        if (err) {
            res.json({ err: err })
        }
        else if (data.Location) {
            console.log(`File uploaded successfully. ${data.Location}`);
            return res.json({
                success: true,
                mes: `file uploaded to AWS S3 at ${data.Location}`
            })
        }
    });
};

// create delete file in AWS S3 function
const deleteFile = (filename) => {

     // Setting up S3 upload parameters
    const params = {
        Bucket: 'thisistheend',
        Key: filename,
    }

    // Deleting files in the bucket
    s3.deleteObject(params, function(err, data){
        if (err) {
           console.log(err)
        }
        else if (data) {
            console.log(data + " data from service fileRoutes")
            console.log(`file at ${data} has been deleted`);
            // return res.json({
            //     success: true,
            //     mes: `file has been deleted`
            // })
        }
    })

}



module.exports = {
    uploadFile: uploadFile, 
    deleteFile: deleteFile
};

