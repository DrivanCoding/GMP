const bodyParser = require('body-parser')
const {create, gettachesuser,gettachesprojet,gettaches,updatetache, deletetache,updatetat} = require('./tache.service');

module.exports = {
    createtache: (req, res) =>{
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
    gettachesBytacheId: (req, res) =>{
        const id = req.params.id;
        gettachesBytacheId(id, (err, results) =>{
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
    gettaches: (req, res) =>{
        gettaches((err, results) =>{
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
    gettachesuser: (req, res) =>{
        const id=req.params.iduser
        gettachesuser(id,(err, results) =>{
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
    gettachesprojet: (req, res) =>{
        const id=req.params.idprojet
        gettachesprojet(id,(err, results) =>{
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
    updatetache: (req, res) =>{
        const body = req.body;
        updatetache(body, (err, results) =>{
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Failed to update tache"
                })
            }
            return res.json({
                success: 1,
                message : 'updated successfully'
            });
        });
    },
    updateetat: (req, res) =>{
        const body = req.body;
        updateetat(body, (err, results) =>{
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Failed to update tache"
                })
            }
            return res.json({
                success: 1,
                message : 'updated successfully'
            });
        });
    },
    deletetache: (req, res) => {
        
        const data = req.params;
        deletetache(data, (err, results) =>{
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
                message: 'tache deleted successfully'
            });
        });
    }

}   
