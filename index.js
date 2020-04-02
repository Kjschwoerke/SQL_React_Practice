const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express();

const SELECT_ALL_SHOWS_QUERY = 'SELECT * FROM shows'

//create connection to SQL DataBase and connect
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ferret84',
    database: 'shows',
    port: '3306'
})

connection.connect(err => {
    if(err){
        return err
    }
})

// console.log(connection)

//----------------------------------------------

app.use(cors())


//create routes here:
app.get ('/', (req, res) => {
    res.send('Go to /shows to see shows')
    
})

app.get ('/shows/add', (req, res) => {
    const { id, title, about } = req.query
    const INSERT_SHOWS_QUERY = `INSERT INTO shows(id, title, about) VALUES('${id}', '${title}', '${about}')`
    connection.query(INSERT_SHOWS_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        }else{
            return res.send('successfully added show')
        }
    })
})

app.get ('/shows/delete', (req, res) => {
    const { id } = req.query
    const DELETE_SHOWS_QUERY = `DELETE FROM shows WHERE id = '${id}'`
    connection.query(DELETE_SHOWS_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        }else{
            return res.send('successfully deleted show')
        }
    })
})

app.get('/shows', (req, res) => {
    connection.query(SELECT_ALL_SHOWS_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    })
})
//-----------------------------------------------

app.listen(4000, () => {
    console.log('The server is listening on port 4000')
})