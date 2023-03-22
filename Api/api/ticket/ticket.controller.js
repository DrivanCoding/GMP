const bodyParser = require('body-parser')
const {create, gettickets,updateticket, deleteticket} = require('./ticket.service');
const {genSaltSync, hashSync, compareSync} = require('bcrypt');
const {sign} = require('jsonwebtoken')

module.exports = {
    createticket: (req, res) =>{
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
    getticketsByticketId: (req, res) =>{
        const id = req.params.id;
        getticketsByticketId(id, (err, results) =>{
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
    gettickets: (req, res) =>{
        gettickets((err, results) =>{
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
    updateticket: (req, res) =>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.motedepass = hashSync(body.motedepass, salt);
        updateticket(body, (err, results) =>{
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Failed to update ticket"
                })
            }
            return res.json({
                success: 1,
                message : 'updated successfully'
            });
        });
    },
    deleteticket: (req, res) => {
        
        const data = req.params;
        deleteticket(data, (err, results) =>{
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
                message: 'ticket deleted successfully'
            });
        });
    }

}   
