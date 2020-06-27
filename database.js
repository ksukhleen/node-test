var mysql = require('mysql')

module.exports = function hb(req, res) {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root', 
        password: '',
        database: 'sampledb'
    });
    
    connection.connect((error) => {
        if(!!error){
            console.log(error)
        }else{
            console.log('Connected')
        }
    })
    return connection
}


