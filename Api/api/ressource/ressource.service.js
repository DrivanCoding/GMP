const pool = require('../../config/database')



module.exports = {
    create: (data, callback)=>{
        pool.query(
            `INSERT INTO ressource( idprojet, titreres,type, valeur)
                    values(?, ?, ?, ? )`,
                    [
                        data.idprojet,
                        data.titreres,
                        data.type,
                        data.valeur
                       
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
    getressources: (id,callback) =>{
        pool.query(
            `SELECT * FROM ressource where idprojet=?`,
            [id],
            (error, results, fields) =>{
                if (error) {
                    return  callback(error);
                }
                return callback(null, results)
            }
        );
    },
    getressourcess: (callback) =>{
        pool.query(
            `SELECT * FROM ressource`,
            [],
            (error, results, fields) =>{
                if (error) {
                    return  callback(error);
                }
                return callback(null, results)
            }
        );
    },
    updateressource:(data, callback) =>{
        pool.query(
            `update ressource set idequipe= ?, titreressource = ?, dateDebutressource = ?, dateFinressource = ?, description = ?, etatressource = ? where idressource = ?`,
            [
                data.idequipe,
                data.titreressource,
                data.datedebutressource,
                data.datefinressource,
                data.description,
                data.etatressource,
                data.idressource
            ],
            (error, results, fields) =>{
                if (error) {
                   return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    deleteressource:(data, callback) =>{
        pool.query(
            `delete from ressource where idressource = ?`,
            [data.idressource],
            (error, results, fields) =>{
                if (error) {
                return callback(error);
                }
                console.log(results)
                return callback(null, results[0]);
            }
        );
       console.log(data.idressource)
    },
    
};