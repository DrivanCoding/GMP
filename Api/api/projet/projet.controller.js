const bodyParser = require('body-parser')
const {create, getProjets,updateprojet, deleteProjet} = require('./projet.service');
const {genSaltSync, hashSync, compareSync} = require('bcrypt');
const {sign} = require('jsonwebtoken')

module.exports = {
    createProjet: (req, res) =>{
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
    getProjetsByProjetId: (req, res) =>{
        const id = req.params.id;
        getProjetsByProjetId(id, (err, results) =>{
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
    getProjets: (req, res) =>{
        getProjets((err, results) =>{
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
    updateprojet: (req, res) =>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.motedepass = hashSync(body.motedepass, salt);
        updateProjet(body, (err, results) =>{
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Failed to update Projet"
                })
            }
            return res.json({
                success: 1,
                message : 'updated successfully'
            });
        });
    },
    deleteProjet: (req, res) => {
        
        const data = req.params;
        deleteProjet(data, (err, results) =>{
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
                message: 'Projet deleted successfully'
            });
        });
    }

}   
