const bodyParser = require('body-parser')
const {create, getsprints,getsprintss,updatesprint, deletesprint} = require('./sprint.service');
const {genSaltSync, hashSync, compareSync} = require('bcrypt');
const {sign} = require('jsonwebtoken')

module.exports = {
    createsprint: (req, res) =>{
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
    getsprintsBysprintId: (req, res) =>{
        const id = req.params.id;
        getsprintsBysprintId(id, (err, results) =>{
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
    getsprints: (req, res) =>{
        data=req.params
        getsprints(data,(err, results) =>{
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
    getsprintss: (req, res) =>{
        getsprintss((err, results) =>{
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
    updatesprint: (req, res) =>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.motedepass = hashSync(body.motedepass, salt);
        updatesprint(body, (err, results) =>{
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Failed to update sprint"
                })
            }
            return res.json({
                success: 1,
                message : 'updated successfully'
            });
        });
    },
    deletesprint: (req, res) => {
        
        const data = req.params;
        deletesprint(data, (err, results) =>{
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
                message: 'sprint deleted successfully'
            });
        });
    }

}   
