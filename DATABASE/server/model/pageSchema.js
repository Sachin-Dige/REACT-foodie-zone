const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    password: String,
    repassword:String,
});

module.exports=mongoose.model("users",productSchema);
