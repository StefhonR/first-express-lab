const express = require('express')

const app = express()

app.get('/', function(req, res) {
    res.send('<h1 style="color: navy; font-family: Avenir;">Express is Working!</h1>')
})

app.get('/greetings', function(req, res) {
    res.send('<h1>Hello, stranger.</h1>')
})

app.get('/greetings/:name', function(req, res) {
    res.send(`<Name>Hello, ${req.params.name}! It is so great to see you.</Name>`)
})


app.listen(3000, function () {
    console.log('Listening on port 3000')
})