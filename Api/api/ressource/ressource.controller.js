const bodyParser = require('body-parser')
const {create, getressources,getressourcess,updateressource, deleteressource} = require('./ressource.service');
const {genSaltSync, hashSync, compareSync} = require('bcrypt');
const {sign} = require('jsonwebtoken')

module.exports = {
    createressource: (req, res) =>{
        const body = req.body;
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
    getressourcesByressourceId: (req, res) =>{
        const id = req.params.id;
        getressourcesByressourceId(id, (err, results) =>{
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
    getressources: (req, res) =>{
        const id=req.params.idprojet
        getressources(id,(err, results) =>{
            if (err) {
                console.log(err);
                return;
            }
            console.log(results)
            return res.json({
                success:1,
                data: results
            });

        }); 
    },
    getressourcess: (req, res) =>{
        getressourcess((err, results) =>{
            if (err) {
                console.log(err);
                return;
            }
            console.log(results)
            return res.json({
                success:1,
                data: results
            });

        }); 
    },
    updateressource: (req, res) =>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.motedepass = hashSync(body.motedepass, salt);
        updateressource(body, (err, results) =>{
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Failed to update ressource"
                })
            }
            return res.json({
                success: 1,
                message : 'updated successfully'
            });
        });
    },
    deleteressource: (req, res) => {
        
        const data = req.params;
        deleteressource(data, (err, results) =>{
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
                message: 'ressource deleted successfully'
            });
        });
    }

}   
