const pool = require('../../config/database')



module.exports = {
    create: (data, callback)=>{
        pool.query(
            `INSERT INTO equipe(nomequipe)
                    values(?)`,
                    [
                        data.nomequipe,
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
    getequipes: callback =>{
        pool.query(
            `SELECT * FROM equipe`,
            [],
            (error, results, fields) =>{
                if (error) {
                    return  callback(error);
                }
                return callback(null, results)
            }
        );
    },
    updateequipe:(data, callback) =>{
        pool.query(
            `update users set  nomequipe = ? where idequipe = ?`,
            [
                data.nomequipe,
                data.idequipe
            ],
            (error, results, fields) =>{
                if (error) {
                   return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    deleteequipe:(data, callback) =>{
        pool.query(
            `delete from equipe where idequipe = ?`,
            [data.idequipe],
            (error, results, fields) =>{
                if (error) {
                return callback(error);
                }
                console.log(results)
                return callback(null, results[0]);
            }
        );
       console.log(data.iduser)
    },
    
};