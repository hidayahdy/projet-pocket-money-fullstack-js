
const incomes = require("../model/incomes");



//post income
 exports.createIncome=async(req,res)=>{
    try {
      const income = new incomes({...req.body,user:req.user.id})
      await income.save()
    res.status(200).send({msg:"income",income});
 } catch (error) {
   res.status(500).send({msg:"could't add income",});
 }
}

  //delete income
 exports.delIncome=async(req,res)=>{

  try {
     const income = await incomes.findByIdAndDelete(req.params.id);
     res.status(200).send({msg:"income deleted",income});
  } catch (error) {
    res.status(500).send({msg:"income not deleted"});
  }
}

//update income
exports.updateIncome=async(req,res)=>{
  try {
    const income=await incomes.findByIdAndUpdate(req.params.id,
      {$set:req.body},{new:true})
      res.status(200).send({msg:"income updated",income});
  } catch (error) {
    res.status(500).send({msg:"income not updated"});
  }
}

//get all incomes
exports.Getincomes = async (req, res) => {

  try {
    const income = await incomes.find();
    res.status(200).send({ msg: "list of incomes", income });
  } catch (error) {
    res.status(500).send("couldn't get incomes");
  }
};



//get One
exports.GetOnEinc = async (req, res) => {
  try {
    const income = await incomes.find({user:req.user.id}).populate("user");;
    res.status(200).send({ msg: "expense founded", income});
  } catch (error) {
    res.status(500).send("expense not founded");
  }
};