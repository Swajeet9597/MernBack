
const authToken = async(req,res,next)=>{
   try {
       
        const token = req.cookies?.token

        console.log("token",token)


   } catch (error) {
    console.log(error)
   }
}


module.exports = authToken