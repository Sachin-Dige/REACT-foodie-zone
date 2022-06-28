const mongoose = require("mongoose");


const addrecipeSchema = new mongoose.Schema({
    recipeName: String,
    description:String,
    ingredients: String,
    steps: String,
    // recipeImg: {data:Buffer, contentType: String}
})

module.exports=mongoose.model("addrecipe_Users",addrecipeSchema);

