// require detabase
const jwt = require("jsonwebtoken");   
// require("../db/conn");
const queschema = require("../models/questionschema");
// const regiterschema = require("../models/registerschema");

// To feach deta from the detabse
module.exports = async (req, res) => {
  console.log("hiii")
  try{
    console.log("try")
    const ques = await queschema.find({user: "604dca761fe4dc2cb80200ae"});
    console.log("cauch")
    console.log(ques)
    res.json({
      success: true,
      pastSurveys: ques,
    });
  
  }catch(error){
    res.status(200).json({
      success: false,
      error: ("sone error in end file"),
    })
  }

  
};
