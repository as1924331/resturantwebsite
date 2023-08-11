const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static(`${__dirname}/public`))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
})) 





// now form now we will connect mongo and store data init
mongoose.connect('mongodb://127.0.0.1:27017/resturent1feedback')

const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    textarea:String
})
const Review = mongoose.model('Feedback', customerSchema)
 app.post('/Review', (req, res) => {
    let detail = new Review(req.body);
    detail.save()
        .then(doc => {
            res.send('Your FOrm is submitted successfully')
            console.log(doc)
        })
        .catch(err => console.log(err))
})




app.listen(4000, (res) => {
    console.log('Listening on port 4000')
})
