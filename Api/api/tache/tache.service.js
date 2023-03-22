const pool = require('../../config/database')



module.exports = {
    create: (data, callback)=>{
        pool.query(
            `INSERT INTO tache( iduser,idsprint,idprojet,titletache, dateDebuttache, dateFintache, etattache)
                    values(?, ?, ?, ?, ?, ?,?)`,
                    [
                        data.iduser,
                        data.idsprint,
                        data.idprojet,
                        data.titletache,
                        data.dateDebuttache,
                        data.dateFintache,
                        data.etattache,
                       
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
    gettaches: callback =>{
        pool.query(
            `SELECT * FROM tache`,
            [],
            (error, results, fields) =>{
                if (error) {
                    return  callback(error);
                }
                return callback(null, results)
            }
        );
    },
    gettachesuser:(id,callback) =>{
        pool.query(
            `SELECT * FROM tache t,projet p,sprint s where p.idprojet=t.idprojet and t.idsprint=s.idsprint and iduser=?`,
            [id],
            (error, results, fields) =>{
                if (error) {
                    return  callback(error);
                }
                    return callback(null, results)
            }
        );
    },
    gettachesprojet:(id,callback) =>{
        pool.query(
            `SELECT * FROM tache where idprojet=?`,
            [id],
            (error, results, fields) =>{
                if (error) {
                    return  callback(error);
                }
                    return callback(null, results)
            }
        );
    },
    updatetache:(data, callback) =>{
        pool.query(
            `update tache set idequipe= ?, titretache = ?, dateDebuttache = ?, dateFintache = ?, description = ?, etattache = ? where idtache = ?`,
            [
                data.idequipe,
                data.titretache,
                data.datedebuttache,
                data.datefintache,
                data.description,
                data.etattache,
                data.idtache
            ],
            (error, results, fields) =>{
                if (error) {
                   return callback(error);
                }
                return callback(null, results);
            }
        )
    },    updatetat:(data, callback) =>{
        pool.query(
            `update tache set etattache = ? where idtache = ?`,
            [
                data.etattache,
                data.idtache
            ],
            (error, results, fields) =>{
                if (error) {
                   return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    deletetache:(data, callback) =>{
        pool.query(
            `delete from tache where idtache = ?`,
            [data.idtache],
            (error, results, fields) =>{
                if (error) {
                return callback(error);
                }
                console.log(results)
                return callback(null, results[0]);
            }
        );
       console.log(data.idtache)
    },
    
};