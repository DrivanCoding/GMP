const { 
    createmsg,  
    getmsgs, 
    updatemsg, 
    deletemsg} = require('./msg.controller');
const router = require("express").Router();
// const {checkToken} =require('../../auth/token_validation')

// // premier niveau tokken
 router.post('/newmsg', createmsg);
// router.get('/', checkToken, getmsgs);
// router.patch('/', checkToken, updatemsg);
 router.delete('/:idmsg',deletemsg);

router.get('/', getmsgs);

// router.post('/login',login);

//deuxiemme niveau token

module.exports = router