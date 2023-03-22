const { 
    createequipe,  
    getequipes, 
    updateequipe, 
    deleteequipe} = require('./equipe.controller');
const router = require("express").Router();
// const {checkToken} =require('../../auth/token_validation')

// // premier niveau tokken
 router.post('/newequipe', createequipe);
// router.get('/', checkToken, getequipes);
// router.patch('/updateequipe',updateequipe);
 router.delete('/:idequipe',deleteequipe);

router.get('/', getequipes);


//deuxiemme niveau token

module.exports = router