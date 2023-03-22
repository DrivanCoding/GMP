const pool = require('../../config/database')



module.exports = {
    create: (data, callback)=>{
        pool.query(
            `INSERT INTO projet( idequipe, titreprojet, dateDebutprojet, dateFinprojet, description, etatprojet, butjet)
                    values(?, ?, ?, ?, ?, ?, ?)`,
                    [
                        data.idequipe,
                        data.titreprojet,
                        data.dateDebutprojet,
                        data.dateFinprojet,
                        data.description,
                        data.etatprojet,
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
    getProjets: callback =>{
        pool.query(
            `SELECT * FROM projet`,
            [],
            (error, results, fields) =>{
                if (error) {
                    return  callback(error);
                }
                return callback(null, results)
            }
        );
    },
    updateprojet:(data, callback) =>{
        pool.query(
            `update projet set idequipe= ?, titreprojet = ?, dateDebutProjet = ?, dateFinProjet = ?, description = ?, etatprojet = ? where idprojet = ?`,
            [
                data.idequipe,
                data.titreprojet,
                data.datedebutProjet,
                data.datefinProjet,
                data.description,
                data.etatprojet,
                data.idprojet
            ],
            (error, results, fields) =>{
                if (error) {
                   return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    deleteProjet:(data, callback) =>{
        pool.query(
            `delete from projet where idprojet = ?`,
            [data.idprojet],
            (error, results, fields) =>{
                if (error) {
                return callback(error);
                }
                console.log(results)
                return callback(null, results[0]);
            }
        );
       console.log(data.idprojet)
    },
    
};