const pool = require('../../config/database')



module.exports = {
    create: (data, callback)=>{
        pool.query(
            `INSERT INTO service( idequipe, titreservice, dateDebutservice, dateFinservice, description, etatservice, butjet)
                    values(?, ?, ?, ?, ?, ?, ?)`,
                    [
                        data.idequipe,
                        data.titreservice,
                        data.dateDebutservice,
                        data.dateFinservice,
                        data.description,
                        data.etatservice,
                        data.butjet
                       
                    ],
                    (error, results, fields) =>{
                        if (error) {
                            callback(error);
                        }
                        
                        return callback(null,results)
                    }
        );
        console.log(data)
    },
    getservices: callback =>{
        pool.query(
            `SELECT * FROM service`,
            [],
            (error, results, fields) =>{
                if (error) {
                    return  callback(error);
                }
                return callback(null, results)
            }
        );
    },
    updateservice:(data, callback) =>{
        pool.query(
            `update service set idequipe= ?, titreservice = ?, dateDebutservice = ?, dateFinservice = ?, description = ?, etatservice = ? where idservice = ?`,
            [
                data.idequipe,
                data.titreservice,
                data.datedebutservice,
                data.datefinservice,
                data.description,
                data.etatservice,
                data.idservice
            ],
            (error, results, fields) =>{
                if (error) {
                   return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    deleteservice:(data, callback) =>{
        pool.query(
            `delete from service where idservice = ?`,
            [data.idservice],
            (error, results, fields) =>{
                if (error) {
                return callback(error);
                }
                console.log(results)
                return callback(null, results[0]);
            }
        );
       console.log(data.idservice)
    },
    
};