const { 
    createticket,  
    gettickets, 
    updateticket, 
    deleteticket} = require('./ticket.controller');
const router = require("express").Router();
// const {checkToken} =require('../../auth/token_validation')

// // premier niveau tokken
 router.post('/newticket', createticket);
// router.get('/', checkToken, gettickets);
// router.patch('/', checkToken, updateticket);
 router.delete('/:idticket',deleteticket);

router.get('/', gettickets);

// router.post('/login',login);

//deuxiemme niveau token

module.exports = router