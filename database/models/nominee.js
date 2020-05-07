  
const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const bcrypt = require('bcryptjs');
// mongoose.promise = Promise

// Define userSchema
const nomineeSchema = new Schema({

  role: { type: String, unique: false, required: true },
  name: { type: String, unique: false, required: true },
  contact: { type: String, unique: false, required: true },
  email: { type: String, unique: false, required: true},
  responsibility: { type: String, unique: false, required: false },


})


// Define schema methods
// nomineeSchema.methods = {
// 	checkPassword: function (inputPassword) {
// 		return bcrypt.compareSync(inputPassword, this.password)
// 	},
// 	hashPassword: plainTextPassword => {
// 		return bcrypt.hashSync(plainTextPassword, 10)
// 	}
// }



const Nominee = mongoose.model('Nominee', nomineeSchema)
module.exports = Nominee