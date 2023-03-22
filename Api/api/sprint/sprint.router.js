const { JsonWebTokenError,verify } = require('jsonwebtoken');
const { 
    createsprint,  
    getsprints, 
    getsprintss, 
    updatesprint, 
    deletesprint} = require('./sprint.controller');
const router = require("express").Router();
// const {checkToken} =require('../../auth/token_validation')

// // premier niveau tokken
 router.post('/newsprint', createsprint);
// router.get('/', checkToken, getsprints);
// router.patch('/', checkToken, updatesprint);
 router.delete('/:idsprint',deletesprint);

router.get('/:idprojet', getsprints);
router.get('/', getsprintss);

// router.post('/login',login);

//deuxiemme niveau token


module.exports = router