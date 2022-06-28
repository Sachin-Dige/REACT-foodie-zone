const express = require("express");
const app = express();

const mongoose = require("mongoose");
const cors =  require("cors");
const multer = require("multer");
const path = require("path")
app.use(cors());
app.use(express.json());
app.use(errHandler);
// DB CONNECTION................................................
mongoose.connect(
    'mongodb://localhost:27017/foodiezone',()=>console.log("DATABASE connected succesfully....")
    );
    
    // IMAGE SCHEMA
    var imgSchema = mongoose.Schema({
        recipeName: String,
        description:String,
        ingredients: String,
        steps: String,
        img:String,
    contentType: String
});
var image = mongoose.model("image",imgSchema);

// SET STORAGE
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function(req, file, cb) {
        // cb(null, `$(file.fieldname)_${Date.now()}${path.extname(file.originalname)}`)
        cb(null, file.originalname)
    }
})

var upload = multer({
    storage: storage,
    limits:{
        fileSize:1024 * 1024 * 5
    }
});
app.use('/user_file', express.static('uploads'));
app.post("/uploading", upload.single('user_file'),(req,res) => {

    var final_img = new image({
        // success:1,
        recipeName: req.body.recipeName,
        description: req.body.description,
        ingredients: req.body.ingredients,
        steps: req.body.steps,
        img: `http://localhost:4000/user_file/${req.file.originalname}`,
        contentType: req.file.mimetype,
    });
    final_img
    .save()
    .then(() => res.json("new recipe posted"))
    .catch((err) => res.status(400).json(`Error: ${err}`))
    // image.create(final_img,function(err,result){
    //     if(err){
    //         console.log(err);
    //     } else{
    //         console.log("Image Has Posted.... ");
    //         res.contentType(final_img.contentType);
    //         res.send(final_img.img);
    //         result.save();
    //     }
    // })
    
    console.log(req.file);
    
})

// GET IMAGE FORM DATABASE SHOW TO WEBSITE
app.get('/getimg', function(req,res){
    image.find({}, function(err,result){
        if(err){
            res.status(500).send("AN ERROR IS OCCURED",err);
        } else {
            res.send(result);
        }
    });
});

// HANDLER
function errHandler(err, req, res, next) {
    if (err instanceof multer.MulterError) {
        res.json({
            success:0,
            message: err.message
        })
    }
}

app.delete("/ar_delete/:id", async (req,res) => {
    try{
        const data = await image.findByIdAndDelete(req.params.id);
        res.json(data);
    } catch(error){
        res.json({message:error});
    }

});

const register_pageRoutes = require("./routes/Routes");
const contact_pageRoutes= require("./routes/Routes");
const addrecipe_pageRoutes = require("./routes/Routes")


//ROUTE MIDDLEWARE...............................................
app.use("/users", register_pageRoutes);
app.use("/contact_users", contact_pageRoutes);
app.use("/addrecipe_users", addrecipe_pageRoutes)

app.listen(4000, ()=>console.log("Server is running on Port-4000"));