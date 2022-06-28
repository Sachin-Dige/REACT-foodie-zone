const User = require("../model/pageSchema");
const Contactuser = require("../model/contactSchema")
const Addrecipeuser = require("../model/addrecipeSchema")

// POST REGSISTER DATA
const user_register = async (req,res) => {
    const data = new User(req.body);
    try{
        const saveUser = await data.save();
        res.send(saveUser);
    } catch (error) {
        res.status(400).send(error)
    }
};

// POST CONTACT DATA
const user_contact = async (req,res) => {
    
    const contact_data = new Contactuser(req.body);
    try{
        const saveUser = await contact_data.save();
        res.send(saveUser)
    } catch(error) {
        res.status(400).send(error)
    }
};

//POST ADDRECIPE DATA
const user_addRecipe = async (req, res) => {
    const addRecipe_data = new Addrecipeuser(req.body);
    try{
        const saveUser = await addRecipe_data.save();
        res.send(saveUser)
    } catch(error) {
        res.status(400).send(error)
    }
}

// GET REGISTER DATA
const user_all = async (req,res) => {
    try{
        const data = await User.find();
        res.json(data);
    } catch(error){
        res.json({message:error});
    }
};

// GET CONTACT DATA
const contactUser_all = async (req,res) => {
    try{
        const contact_data = await Contactuser.find();
        res.json(contact_data);
    } catch(error){
        res.json({message:error})
    }
};

// GET ADDRECIPE DATA
const addRecipeUser_all = async (req,res) => {
    try{
        const addRecipe_data = await Addrecipeuser.find();
        res.json(addRecipe_data);
    } catch(error) {
        res.json({message:error})
    }
} 

// DELETE REGISTER DATA
const user_details = async (req,res) => {
    try{
        const users = await User.findById(req.params.userId);
        res.json(users);
    }  catch(error){
        res.json({message:error})
    }
}

// DELETE CONTACT USER DATA
const user_delete = async (req,res) => {
    try{
        const data = await Contactuser.findByIdAndDelete(req.params.id);
        res.json(data);
    } catch(error){
        res.json({message:error});
    }
};

module.exports={
    user_register,
    user_contact,
    user_addRecipe,
    user_all,
    contactUser_all,
    addRecipeUser_all,
    user_delete,
    user_details
}
