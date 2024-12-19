
const authToken = async(req,res,next)=>{
   try {
       
        const token = req.cookies?.token || req.header

        if(!token){
            return res.status(400).json({
                msg:"User is not log in",
                error:true,
                success: false
            })
        }

        console.log("token",token)

        jwt.verify(token,'qwerddgfbgfjfghfgsdbgtre', function(err,decoded){
             console.log(err);
             console.log("decoded",decoded);
        })

        next()


   } catch (error) {
    console.log(error)
   }
}


module.exports = authToken