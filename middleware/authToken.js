
const authToken = async(req,res,next)=>{
   try {
       
        // const token = req.cookies?.token

        console.log("token",req.cookies)

        next()


   } catch (error) {
    console.log(error)
   }
}


module.exports = authToken