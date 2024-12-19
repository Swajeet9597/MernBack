
const authToken = async(req,res,next)=>{
   try {
       
        const token = req.cookies?.token || req.header

        console.log("token",req.cookies)

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