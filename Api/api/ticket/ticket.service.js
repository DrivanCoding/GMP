const pool = require('../../config/database')



module.exports = {
    create: (data, callback)=>{
        pool.query(
            `INSERT INTO ticket( idequipe, titreticket, dateDebutticket, dateFinticket, description, etatticket, butjet)
                    values(?, ?, ?, ?, ?, ?, ?)`,
                    [
                        data.idequipe,
                        data.titreticket,
                        data.dateDebutticket,
                        data.dateFinticket,
                        data.description,
                        data.etatticket,
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
    gettickets: callback =>{
        pool.query(
            `SELECT * FROM ticket`,
            [],
            (error, results, fields) =>{
                if (error) {
                    return  callback(error);
                }
                return callback(null, results)
            }
        );
    },
    updateticket:(data, callback) =>{
        pool.query(
            `update ticket set idequipe= ?, titreticket = ?, dateDebutticket = ?, dateFinticket = ?, description = ?, etatticket = ? where idticket = ?`,
            [
                data.idequipe,
                data.titreticket,
                data.datedebutticket,
                data.datefinticket,
                data.description,
                data.etatticket,
                data.idticket
            ],
            (error, results, fields) =>{
                if (error) {
                   return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    deleteticket:(data, callback) =>{
        pool.query(
            `delete from ticket where idticket = ?`,
            [data.idticket],
            (error, results, fields) =>{
                if (error) {
                return callback(error);
                }
                console.log(results)
                return callback(null, results[0]);
            }
        );
       console.log(data.idticket)
    },
    
};