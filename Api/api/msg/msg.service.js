const pool = require('../../config/database')



module.exports = {
    create: (data, callback)=>{
        pool.query(
            `INSERT INTO message( iduser,msg,file)
                    values(?, ?, ?)`,
                    [
                        data.iduser,
                        data.msg,
                        data.file
                       
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
    getmsgs: callback =>{
        pool.query(
            `SELECT * FROM message, utilisateur where message.iduser=utilisateur.iduser`,
            [],
            (error, results, fields) =>{
                if (error) {
                    return  callback(error);
                }
                return callback(null, results)
            }
        );
    },
    updatemsg:(data, callback) =>{
        pool.query(
            `update msg set idequipe= ?, titremsg = ?, dateDebutmsg = ?, dateFinmsg = ?, description = ?, etatmsg = ? where idmsg = ?`,
            [
                data.idequipe,
                data.titremsg,
                data.datedebutmsg,
                data.datefinmsg,
                data.description,
                data.etatmsg,
                data.idmsg
            ],
            (error, results, fields) =>{
                if (error) {
                   return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    deletemsg:(data, callback) =>{
        pool.query(
            `delete from msg where idmsg = ?`,
            [data.idmsg],
            (error, results, fields) =>{
                if (error) {
                return callback(error);
                }
                console.log(results)
                return callback(null, results[0]);
            }
        );
       console.log(data.idmsg)
    },
    
};