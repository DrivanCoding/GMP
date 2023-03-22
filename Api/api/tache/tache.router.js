const { 
    createtache,  
    gettaches, 
    updatetache, 
    deletetache,
updateetat,
gettachesprojet,gettachesuser} = require('./tache.controller');
const router = require("express").Router();
// const {checkToken} =require('../../auth/token_validation')

// // premier niveau tokken
 router.post('/newtache', createtache);
 router.post('/updateetattache', updateetat);
// router.get('/', checkToken, gettaches);
// router.patch('/', checkToken, updatetache);
 router.delete('/:idtache',deletetache);

router.get('/', gettaches);
router.get('/user/:iduser', gettachesuser);
router.get('/projet/:idprojet', gettachesprojet);

// router.post('/login',login);

//deuxiemme niveau token

module.exports = router