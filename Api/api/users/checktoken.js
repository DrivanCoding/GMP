const jwt=require("jsonwebtoken")
let LocalStorage=require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch')
let token
module.exports={
    Checktoken:(req,res,next)=>{
        console.log(req.params.email)
        token=localStorage.getItem(req.params.email,token)
        console.log(token)
        if(token){
            jwt.verify(token,'qwe1234',(err,decoded)=>{
                if(err){
                    return res.json({
                        success:0,
                        message:"Invalid token",
                    });
                     }else{
                        //next();
                        if(decoded){
                            return res.json({
                                success:1,
                                message:decoded.user
                            });
                        }
                     }
            });
        }else{
            return res.json({
                success:0,
                message:"acces denied! "
            })
        }
    }
}
