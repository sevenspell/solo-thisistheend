  
const mongoose = require('mongoose')
const Schema = mongoose.Schema


// Define userSchema
const nomineeSchema = new Schema({

  role: { type: String, unique: false, required: true },
  name: { type: String, unique: false, required: true },
  contact: { type: String, unique: false, required: true },
  email: { type: String, unique: false, required: true},
  responsibility: { type: String, unique: false, required: false },


})


const Nominee = mongoose.model('Nominee', nomineeSchema)
module.exports = Nominee