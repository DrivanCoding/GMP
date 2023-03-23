const { JsonWebTokenError,verify } = require('jsonwebtoken');
const { 
    createUser, 
    getUsersByUserId, 
    getUsers, 
    updateUser, 
    deleteUser, 
    login,
    uploadfile,
    filteruser,
    getUserEquipes,
    updateProfil
} = require('./user.controller');
const {
    Checktoken
}=require('./checktoken');
const checktoken = require('./checktoken');
const router = require("express").Router();


// const {checkToken} =require('../../auth/token_validation')

// // premier niveau tokken
 router.post('/newuser', createUser);
 router.post('/updateuser', updateUser);
 router.post('/updateprofil', updateProfil);
// router.get('/', checkToken, getUsers);
// router.get('/userslist:id', checkToken, getUsersByUserId );
// router.patch('/', checkToken, updateUser);
 router.delete('/:iduser',deleteUser);
 router.post('/login',login);
 
router.get('/:filter',filteruser);
router.get('/membre/:idequipe',getUserEquipes);
router.get('/',getUsers);

// router.post('/login',login);

//deuxiemme niveau token

 router.get('/profil/:email',Checktoken)
 rout.erpost("/sendmail", (req, res) => {
    console.log("request came");
    let user = req.body;
    sendMail(user, (err, info) => {
      if (err) {
        console.log(err);
        res.status(400);
        res.send({ error: "Failed to send email" });
      } else {
        
        console.log("Email has been sent");
        res.send(info);
      }
    });
  });

module.exports = router