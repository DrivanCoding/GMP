const { filter } = require('rxjs');
const pool = require('../../config/database')



module.exports = {
    create: (data, callback)=>{
        pool.query(
            `insert into utilisateur( nomuser, prenomuser, telephone, adress, fonction, email, motedepass,img,idequipe)
                    values(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                    [
                        data.nomuser,
                        data.prenomuser,
                        data.telephone,
                        data.adress,
                        data.fonction,
                        data.email,
                        data.motedepass,
                        data.img,
                        data.idequipe
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
    createFonction: (data, callback)=>{
        pool.query(
            `insert into ?(iduser)
                    values(?)`,
                    [
                        data.fonction,
                        data.iduser
                    ],
                    (error, results, fields) =>{
                        if (error) {
                            callback(error);
                        }
                        
                        return callback(null,results)
                    }
        );
    },
    getUsers: callback =>{
        pool.query(
            `select * from utilisateur where fonction <> 'admin'`,
            [],
            (error, results, fields) =>{
                if (error) {
                    return  callback(error);
                }
                return callback(null, results)
            }
        );
    },
    getUsersByUserId:(id, callback) =>{
        pool.query(
            `select id, firstName,lastName,gender,email,number from users where id = ?`,
            [id],
            (error, results, fields) =>{
                if (error) {
                    callback(error);
                }
                return callback(null, results[0]);
            }
        );
    },
    getUserEquipes:(id,callback) =>{
        pool.query(
            `select * from utilisateur where  idequipe=? `,
            [id],
            (error, results, fields) =>{
                if (error) {
                    return  callback(error);
                }
                return callback(null, results)
            }
        );
    },
    updateUser:(data, callback) =>{
        pool.query(
            `update utilisateur SET nomuser=?,prenomuser=?,telephone=?,adress=?,fonction=?,email=? where iduser = ?`,
            [
                data.nomuser,
                data.prenomuser,
                data.telephone,
                data.adress,
                data.fonction,
                data.email,
                data.iduser
            ],
            (error, results, fields) =>{
                if (error) {
                   return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    updateProfil:(data, callback) =>{
        pool.query(
            `update utilisateur SET nomuser=?,prenomuser=?,telephone=?,adress=?,email=?, img=? where iduser = ?`,
            [
                data.nomuser,
                data.prenomuser,
                data.telephone,
                data.adress,
                data.email,
                data.img,
                data.iduser,
            ],
            (error, results, fields) =>{
                if (error) {
                   return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    deleteUser:(data, callback) =>{
        pool.query(
            `delete from utilisateur where iduser = ?`,
            [data.iduser],
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
    getUserByUserEmail: (email, callback) =>{
        pool.query(
                `select * from utilisateur where email = ?`,
            [email],
            (error, results, fields) =>{
                if (error) {
                   return callback(error);
                }
                return callback(null, results[0])
            }
        ); 
    },
    filteruser: (data,callback) =>{
        data="%"+data+"%"    
        pool.query(
            `select * from utilisateur where fonction <>'admin' and (nomuser LIKE ? or prenomuser LIKE ?) `,
            [data,data],
            (error, results, fields) =>{
                if (error) {
                    return  callback(error);
                }
                return callback(null, results)
            }
        );
    },
};