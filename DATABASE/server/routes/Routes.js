const router = require("express").Router();
const pageController = require("../controllers/pageController")

router.post("/register", pageController.user_register);
router.post("/contact", pageController.user_contact);
router.post("/addRecipe", pageController.user_addRecipe);
router.get("/show", pageController.user_all);
router.get("/showcontactUser", pageController.contactUser_all);
router.get("/showaddRecipeUser", pageController.addRecipeUser_all);
router.get("/:userId", pageController.user_details);
// router.put("/userId", pageController.user_update);
router.delete("/delete/:id", pageController.user_delete)



// router.delete("/arUser_delete/:id", pageController.addrecipeUser_delete)

module.exports = router;