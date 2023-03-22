const express = require('express');

const router = express.Router();


router.get("/generalHome",(req, res) =>{
    res.render("generalHome")
});

router.get('/login',(req, res) => {
    res.render("login")
} )





module.exports = router