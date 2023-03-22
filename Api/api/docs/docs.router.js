const { JsonWebTokenError,verify } = require('jsonwebtoken');
const { 
    createdoc,  
    getdocs,  
    getdoc,  
    deletedoc} = require('./docs.controller');
const router = require("express").Router();
// const {checkToken} =require('../../auth/token_validation')

// // premier niveau tokken
 router.post('/newdoc', createdoc);
// router.get('/', checkToken, getdocs);
// router.patch('/', checkToken, updatedoc);
 router.delete('/:iddoc',deletedoc);

router.get('/:idprojet', getdoc);
router.get('/', getdocs);

// router.post('/login',login);

//deuxiemme niveau token


module.exports = router