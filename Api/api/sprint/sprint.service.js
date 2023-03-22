const pool = require('../../config/database')



module.exports = {
    create: (data, callback)=>{
        console.log(data)
        pool.query(
            `INSERT INTO sprint( idprojet, titremodule, dateDebutModule, dateFinModule)
                    values(?, ?, ?, ?)`,
                    [
                        data.idprojet,
                        data.titremodule,
                        data.dateDebutmodule,
                        data.dateFinmodule,
                       
                    ],
                    (error, results, fields) =>{
                        if (error) {
                            callback(error);
                        }
                        
                        return callback(null,results)
                    }
        );
       
    },
    getsprints: (data,callback) =>{
        pool.query(
            `SELECT * FROM sprint where idprojet=?`,
            [data.idprojet],
            (error, results, fields) =>{
                if (error) {
                    return  callback(error);
                }
                return callback(null, results)
            }
        );
    },
    getsprintss: (callback) =>{
        pool.query(
            `SELECT * FROM sprint `,
            [],
            (error, results, fields) =>{
                if (error) {
                    return  callback(error);
                }
                return callback(null, results)
            }
        );
    },
    updatesprint:(data, callback) =>{
        pool.query(
            `update sprint set idsprint= ?, titremodule = ?, dateDebutmodule = ?, dateFinmodule = ?,  where idsprint = ?`,
            [
                data.idsprint,
                data.titremodule,
                data.dateDebutmodule,
                data.dateFinmodule,
                data.idsprint
            ],
            (error, results, fields) =>{
                if (error) {
                   return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    deletesprint:(data, callback) =>{
        pool.query(
            `delete from sprint where idsprint = ?`,
            [data.idsprint],
            (error, results, fields) =>{
                if (error) {
                return callback(error);
                }
                console.log(results)
                return callback(null, results[0]);
            }
        );
       console.log(data.idsprint)
    },
    
};