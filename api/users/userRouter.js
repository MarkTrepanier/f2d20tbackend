const router = require("express").Router();
const User = require("./userModel");
const Page = require("../pages/page-model");

router.get("/", async (req, res) => {
  res.json(await User.getAllUsers());
});

//router.get("/:user_id", {});
//get page
router.get("/:user_id/pages/:page_id", async (req,res,next)=>{
  try{
    const page = await Page.findById(req.params.page_id)
    res.status(200).json(page)
  }catch(err){
    next(err)
  }
})

//router.get("/:user_id/invites", {});

module.exports = router;
