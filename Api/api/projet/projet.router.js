const { 
    createProjet,  
    getProjets, 
    updateprojet, 
    deleteProjet} = require('./projet.controller');
const router = require("express").Router();
// const {checkToken} =require('../../auth/token_validation')

// // premier niveau tokken
 router.post('/newprojet', createProjet);
// router.get('/', checkToken, getprojets);
// router.patch('/', checkToken, updateprojet);
 router.delete('/:idprojet',deleteProjet);

router.get('/', getProjets);

// router.post('/login',login);

//deuxiemme niveau token

module.exports = router