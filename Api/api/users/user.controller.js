const bodyParser = require('body-parser')
const {create,getUserEquipes,getUsers, getUsersByUserId, updateUser,updateProfil, deleteUser, getUserByUserEmail,filteruser} = require('./user.service');
const {genSaltSync, hashSync, compareSync} = require('bcrypt');
const {sign} = require('jsonwebtoken')
const jwt=require("jsonwebtoken")
let LocalStorage=require("node-localstorage").LocalStorage,
localStorage= new LocalStorage('./scratch')
const fs=require("fs")
module.exports = {
    createUser: (req, res) =>{
        const body = req.body;
        console.log(req.body)
        const salt = genSaltSync(10);
        body.motedepass = hashSync(body.motedepass, salt);
        create(body, (err, results) =>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'Database connection error'
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    filteruser: (req, res) =>{
        const filter = req.params.filter;
        filteruser(filter, (err, results) =>{
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: 'Record not Found'
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getUsers: (req, res) =>{
        getUsers((err, results) =>{
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                data: results
            });
        }); 
    },
    
    getUserEquipes: (req, res) =>{
        const id=req.params.idequipe
        getUserEquipes(id,(err, results) =>{
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                data: results
            });
        }); 
    },
    updateUser: (req, res) =>{
        const body = req.body;
        console.log(body);
        // const salt = genSaltSync(10);
        // body.motedepass = hashSync(body.motedepass, salt);
        updateUser(body, (err, results) =>{
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Failed to update user"
                })
            }
            return res.json({
                success: 1,
                message : 'updated successfully'
            });
        });
    },
    updateProfil: (req, res) =>{
        const body = req.body;
        console.log(body);
        // const salt = genSaltSync(10);
        // body.motedepass = hashSync(body.motedepass, salt);
        updateProfil(body, (err, results) =>{
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Failed to update user"
                })
            }
            return res.json({
                success: 1,
                message : 'updated successfully'
            });
        });
    },
    deleteUser: (req, res) => {
        
        const data = req.params;
        deleteUser(data, (err, results) =>{
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    succes: 0,
                    message: 'Record Not Found'
                });
            }
            return res.json({
                success: 1,
                message: 'user deleted successfully'
            });
        });
    },
    login: (req, res) =>{
        const body = req.body;
        getUserByUserEmail(body.email, (err, results) =>{
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.json({
                    success:0,
                    data: 'invalid email or motedepass'
                });
            }
            const result = compareSync(body.motedepass, results.motedepass);
            if (result) {
                results.motedepass = undefined;
                const token = sign({ user: results }, "qwe1234", {
                    expiresIn: '3h'
                });
                localStorage.setItem(results.email,token)
                console.log(results)
                return res.json({
                    success: 1,
                    message: 'login successfully',
                    token : token,
                    data:results
                });
            } else {
                return res.json({
                    success: 0,
                    data: 'invalid email or motedepass'
                });
            }
           
        });  
    },
    uploadfile:(req,res)=>{
        console.log(req)
        var source = req.file.files.path;
        var dest = '../../asset';
        
        // fs.readFile(source, function(err, data) {
        //     fs.writeFile(dest, data, function(err) {
        //         fs.unlink(source, function(){
        //             if(err) throw err;
        //             res.send("File uploaded to: " + dest);
        //         });
        //     }); 
        // });

    }
    ,
}   
