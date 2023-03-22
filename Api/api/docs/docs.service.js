const pool = require('../../config/database')

module.exports = {
    create: (data, callback)=>{
        console.log(data)
        pool.query(
            `INSERT INTO documents( idprojet, nomdoc, type)
                    values(?, ?, ?)`,
                    [
                        data.idprojet,
                        data.nomdoc,
                        data.type,
                       
                    ],
                    (error, results, fields) =>{
                        if (error) {
                            callback(error);
                        }
                        
                        return callback(null,results)
                    }
        );
       
    },
    getdocs: (callback) =>{
        pool.query(
            `SELECT * FROM documents`,
            [],
            (error, results, fields) =>{
                if (error) {
                    return  callback(error);
                }
                return callback(null, results)
            }
        );
    },
     getdoc: (data,callback) =>{
        pool.query(
            `SELECT * FROM documents where idprojet=?`,
            [data.idprojet],
            (error, results, fields) =>{
                if (error) {
                    return  callback(error);
                }
                return callback(null, results)
            }
        );
    },
    updatedoc:(data, callback) =>{
        pool.query(
            `update documents set iddoc= ?, titremodule = ?, dateDebutmodule = ?, dateFinmodule = ?,  where iddoc = ?`,
            [
                data.iddoc,
                data.titremodule,
                data.dateDebutmodule,
                data.dateFinmodule,
                data.iddoc
            ],
            (error, results, fields) =>{
                if (error) {
                   return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    deletedoc:(data, callback) =>{
        pool.query(
            `delete from documents where iddoc = ?`,
            [data.iddoc],
            (error, results, fields) =>{
                if (error) {
                return callback(error);
                }
                console.log(results)
                return callback(null, results[0]);
            }
        );
       console.log(data.iddoc)
    },
    
};