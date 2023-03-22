const { 
    createressource,  
    getressources,
    getressourcess,
    updateressource, 
    deleteressource} = require('./ressource.controller');
const router = require("express").Router();
// const {checkToken} =require('../../auth/token_validation')

// // premier niveau tokken
 router.post('/newres', createressource);
// router.get('/', checkToken, getressources);
// router.patch('/', checkToken, updateressource);
 router.delete('/:idressource',deleteressource);

router.get('/:idprojet', getressources);
router.get('/', getressourcess);

// router.post('/login',login);

//deuxiemme niveau token

module.exports = router