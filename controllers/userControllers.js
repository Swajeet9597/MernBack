
const bcrypt = require("bcryptjs")
const User = require("../models/userModel")
const jwt = require('jsonwebtoken');



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
        const tokenData = {
            _id : userExists._id,
            email : userExists.email
        }
        const token = await jwt.sign(tokenData, 'qwerddgfbgfjfghfgsdbgtre', { expiresIn: 60 * 60 * 1 });
        const tokenOption = {
            httpOnly :true,
            secure: true
        }
        return res.cookie("token",token,tokenOption).status(200).json({msg:"User log in...", data: token})
    }else{
        return res.status(400).json({msg:"Email or password are not matched !"})
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

 const editUser = async(req,res)=>{
    try {

        console.log("edit user",req.body);
        const {email,older_email,name} = req.body

        const user = await User.updateOne(
            {email:older_email},
            {
                $set:
                {
                    email:email,
                    name:name
                }
            }
        )

        res.status(200).json({msg:"data updated..."})


         
        
    } catch (error) {
        console.log(error);
    }
 }

module.exports = {dataDbSave, dataCompare, getData,editUser} 