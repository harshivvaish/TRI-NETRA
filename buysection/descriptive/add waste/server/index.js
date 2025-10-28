const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app= express();
app.use(bodyParser.urlencoded({ extended:false}));

const port = 8000;

app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req, res) => {
    res.sendfile(__dirname + '/public/index.html');
})

mongoose.connect('mongodb://localhost:27017/trinetra_BUYPRODUCT', {
    
}).then(() => {
    console.log('mongo is connected')
})



const dataschema = new mongoose.Schema({
    name: {
        type: 'string',
        required:[true,"please enter value"],
        
        },

    phno: {
        type: 'number',
        
        }, 
    

    alt: {
        type: 'number',
        
        },


    address: {
        type: 'string',
        
        },

    amount: {
        type: 'string',
        
    },

    id: {
        type: 'number',
        
    }
    
});

const data = mongoose.model('data',dataschema);

app.post('/submit', (req,res) => {
    const {name,phno,alt_phno,address,amount,id} = req.body;
    const newdata = new data({
        name,
        phno,
        alt_phno,
        address,
        amount,
        id
    });
    newdata.save();

    res.redirect("/qr payment/index.html")
})

app.listen(port, () => {
    console.log('server is running');
})

function done(){
    window.location.href=".html";
}