const Address = require("../models/addressModel")


const getAdd = async(req,res)=>{

    try {
        const response = await Address.find();

    if(!response){
        return res.status(400).json({msg:"data not fetched.."})
    }

    res.status(200).json({msg:response})
        
    } catch (error) {
        console.log(error);
    }
    
}

const postAdd = async(req,res)=>{
    try {

         console.log(req.body)

         const {address,number}= req.body

         let add = new Address({address:address,number:number})

         add.save()
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })

            res.status(200).json({msg:"data added...."})
        
    } catch (error) {
        console,log(error)
    }
}

const deleteAdd = async(req,res) =>{
    try {
        const {_id} = req.body

        const result = await Address.deleteOne({_id:_id})

        if(result){
            res.status(200).json({msg:"done..."})
        }
      


    } catch (error) {
        
    }
}

module.exports = {getAdd,postAdd,deleteAdd}