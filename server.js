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

app.get('/tip', function(req, res) {
    res.send('<h1>Are you you enjoying your meal?</h1>')
})

app.get('/tip/:total/:tipPercentage', function(req, res) {
    const total = parseFloat(req.params.total)
    const tipPercentage = parseFloat(req.params.tipPercentage)
    const tipAmount = (total * tipPercentage) / 100

    res.send(`<h1>Thank you for eating at my restaurant! Your tip amount is $${tipAmount}</h1>`)
})

app.get('/magic/:question', function(req,res) {
    const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

    let randomResponse = responses[Math.floor(Math.random()*responses.length)]

    res.send(`<h1>${req.params.question}: ${randomResponse}</h1>`)
})

app.listen(3000, function () {
    console.log('Listening on port 3000')
})