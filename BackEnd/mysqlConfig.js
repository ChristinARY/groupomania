const mysql = require('mysql')


const con = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: "groupomaniadb"
})

con.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack)
        return
    }
    console.log('connect successfully')
    //console.log('connected as id ' + con.threadId)
})

module.exports = con