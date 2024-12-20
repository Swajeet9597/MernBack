const Cart = require("../models/userCart")

const postCart = async(req,res) =>{
    const {title,price} = req.body;
    const {userId} = req.user;
    
    // console.log("reqbody",price)

    let cart = new Cart({title:title, price:price,userId:userId})

    res.status(201).json({msg:"done.."})

    cart.save()
       .then(res=>{
        console.log(res)
       })
       .catch(err=>{
        console.log(err);
       })

}

const getCart = async(req,res)=>{
    // const response = await Cart.find();
    const response = await Cart.aggregate([
        {
          $group: {
            _id: { title: "$title", price: "$price" },
            quantity: { $sum: 1 }
          }
        },
        {
          $project: {
            _id: 0,
            title: "$_id.title",
            price: "$_id.price",
            quantity: 1
          }
        }
      ]);

    if(!response){
         return res.status(400).json({msg:"data not found"})
    }
    
    res.status(200).json({msg:response})


}

const deleteCart = async(req,res)=>{
     
    const {title} = req.body;
    // console.log(title)

    const result = await Cart.findOneAndDelete({title:title});

    if(result){
        res.status(200).json({msg:"done..."})
    }
  
}

module.exports = {postCart,getCart,deleteCart}