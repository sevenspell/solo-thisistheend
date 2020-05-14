  
const mongoose = require('mongoose')
const Schema = mongoose.Schema


// Define userSchema
const fileSchema = new Schema({

  filename: { type: String, unique: true, required: true },
  fileCategory: { type: String, unique: false, required: true },
  fileNomineeTags: { type: String, unique: false, required: false },
  userID: { type: String, unique: false, required: true}
})




const File = mongoose.model('File', fileSchema)
module.exports = File