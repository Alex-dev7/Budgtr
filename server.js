require('dotenv').config()
const express = require('express')
const Budget = require('./models/budget')
const helpers = require('./ejs-helpers')

const app = express()


app.use("/static", express.static("public"))

//-----------Index-------------
app.get("/", (req, res) => res.redirect("/budgets"))
app.get('/budgets', (req, res) => {
    res.render('index.ejs', {
        Budget,
        helpers
    })

})




//-----------New-------------

app.get('/budgets/new', (req, res) => {
    res.render('new.ejs')

})


//-----------Create-------------

app.post('/budgets', (req, res) => {

})



//-----------Show-------------

app.get('/budgets/:index', (req, res) => {
    
    res.render('show.ejs', {
        
        Budget,
        item: Budget[req.params.index],
        helpers


       
    })

})





const PORT = process.env.PORT || 3030
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
