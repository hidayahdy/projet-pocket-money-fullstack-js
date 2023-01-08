
const expenses = require("../model/expenses");



//post expense
 exports.creatExpense=async(req,res)=>{
  

    
      try {
         const expense = new expenses({...req.body,user:req.user.id})
         await expense.save()
       res.status(200).send({msg:"expense",expense});
    } catch (error) {
      res.status(500).send({msg:"could't add expense",});
    }
  }

  //delete expense
 exports.delexpense=async(req,res)=>{

  try {
     const expense = await expenses.findByIdAndDelete(req.params.id);
     res.status(200).send({msg:"expense deleted",expense});
  } catch (error) {
    res.status(500).send({msg:"expense not deleted"});
  }
}

//update expense
exports.updatExpense=async(req,res)=>{
  try {
    const expense=await expenses.findByIdAndUpdate(
      req.params.id,
      {
        $set: { ...req.body },
      },
      { new: true }
    );
      res.status(200).send({msg:"expense updated",expense});
  } catch (error) {
    res.status(500).send({msg:"expense not updated"});
  }
}

//get all incomes
exports.Getexpenses = async (req, res) => {
 

  try {
    const expense = await expenses.find()
    res.status(200).send({ msg: "list of expenses", expense });
  } catch (error) {
    res.status(500).send("couldn't get expenses");
  }
};

//get One
exports.GetOnExp = async (req, res) => {
    try {
      const expense = await expenses.find({user:req.user.id}).populate("user");;
      res.status(200).send({ msg: "expense founded", expense});
    } catch (error) {
      res.status(500).send("expense not founded");
    }
  };