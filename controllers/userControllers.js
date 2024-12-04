
const bcrypt = require("bcryptjs")
const User = require("../models/userModel")



const dataDbSave = async (req,res) =>{
    
    try {
        const {name, number, email, password} = req.body;
        
        // console.log(req.body);
    
    
        const userExist = await User.findOne({email});
    
        if(userExist){
            return res.status(400).json({msg:"email is already exists"})   
        }
    
        const hash_pass = await bcrypt.hash(password, 12)
    


        let user = new User({name: name, phone:number, email:email, password:hash_pass})
    
        user.save()
            .then(res=>{console.log(res)})
            .catch(e=>{console.log(e);})

      res.status(200).json({msg:"data inserted"})      
    
    } catch (error) {
        res.status(500).json("internal server error")
    }

        
    }


 const dataCompare = async(req,res) =>{

    try {
        console.log(req.body)
     const {email, password} = req.body;

     const userExists = await User.findOne({email})

     if(!userExists){
        return res.status(400).json({msg:"user not registered"})
     }

     

     let passCheck = await bcrypt.compare(password, userExists.password)

     if(passCheck){
        return res.status(200).json({msg:"user details are matched"})
    }else{
        return res.status(400).json({msg:"user details are not matched"})
    }
    } catch (error) {
        console.log(error)
    }
     
 }   

 const getData = async(req,res) =>{
    try {
        const {email} = req.body;

    console.log(email)

    const user = await User.findOne({email})

    res.status(200).json({msg:user})
    } catch (error) {
        console.log(error)
    }
    
 }

module.exports = {dataDbSave, dataCompare, getData} 