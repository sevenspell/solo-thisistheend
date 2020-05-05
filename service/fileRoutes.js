const AWS = require('aws-sdk');
// const multer = require('multer')
// const multerS3 = require('multer-s3')
const path = require("path");
require('dotenv').config();
const fs = require('fs');
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ap-southeast-2'
});


const uploadFile = (pathname, filename) => {
    // Read content from the file
    let fileContent = fs.readFileSync(path.resolve(pathname));

    // Setting up S3 upload parameters
    const params = {
        Bucket: 'thisistheend',
        Key: filename, // File name you want to save as in S3
        Body: fileContent,
        acl: 'public-read'
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        } 
        else if (data.Location){
            console.log(`File uploaded successfully. ${data.Location}`);
            return dataMes = { success:true }
            // return data.json({
            //     success: true,
            //     mes: `file uploaded to AWS S3 at ${data.Location}`
            //   })
        }
    });
};


// AWS.config.update({
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     region: 'ap-southeast-2'
// })

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'application/msword' || file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.mimetype === 'application/pdf' || file.mimetype === 'application/vnd.ms-excel' || file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.mimetype === '	application/zip') {
//         cb(null, true)
//     } else {
//         cb(new Error('invalid file type, please upload in the following format: .jpg, .png, .doc, .docx, .pdf, .xls, .xlsx, .zip'), false)
//     }
// }

// const upload = multer({
//     fileFilter: fileFilter,
//     storage: multerS3({
//         s3: s3,
//         bucket: 'thisistheend',
//         acl: 'public-read',
//         contentType: multerS3.AUTO_CONTENT_TYPE,
//         // metadata: function (req, file, cb) {
//         //     cb(null, { fieldName: file.fieldname });
//         // },
//         key: function (req, file, cb) {
//             cb(null, Date.now().toString())
//         },
//         // body: function (req, file, cb) {
//         //     cb(null, fs.readFileSync(path.join(__dirname, file), "utf8"))
//         // }

//     })
// })


module.exports = uploadFile;

