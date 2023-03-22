const bodyParser = require('body-parser')
const {create, getequipes,updateequipe, deleteequipe} = require('./equipe.service');

module.exports = {
    createequipe: (req, res) =>{
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
    getequipes: (req, res) =>{
        getequipes((err, results) =>{
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
    updateequipe: (req, res) =>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.motedepass = hashSync(body.motedepass, salt);
        updateequipe(body, (err, results) =>{
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Failed to update equipe"
                })
            }
            return res.json({
                success: 1,
                message : 'updated successfully'
            });
        });
    },
    deleteequipe: (req, res) => {
        
        const data = req.params;
        deleteequipe(data, (err, results) =>{
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
                message: 'equipe deleted successfully'
            });
        });
    }

}   
