const mongoose = require('mongoose');
await mongoose.connect('mongodb://localhost:27017/sessionLogin');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Session = new Schema({
  author: ObjectId,
  title: String,
  name: String,
  email: String,
  user: String,
  password: String
}).then(con=>{
  console.log("connect db");
}).catch(error=>{
  console.log("error",error);
})

module.exports = mongoose;