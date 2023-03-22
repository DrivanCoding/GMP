const { 
    createservice,  
    getservices, 
    updateservice, 
    deleteservice} = require('./service.controller');
const router = require("express").Router();
// const {checkToken} =require('../../auth/token_validation')

// // premier niveau tokken
 router.post('/newservice', createservice);
// router.get('/', checkToken, getservices);
// router.patch('/', checkToken, updateservice);
 router.delete('/:idservice',deleteservice);

router.get('/', getservices);

// router.post('/login',login);

//deuxiemme niveau token

module.exports = router