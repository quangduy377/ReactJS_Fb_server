const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const MONGO_CONNECTION = "mongodb+srv://quangduy377:5115230a@cluster0.dczf1.mongodb.net/fb?retryWrites=true&w=majority"
const mongoose = require('mongoose')
const app = express();
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));
const LoginRoutes = require('./routes/login')
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    // if (req.method === 'OPTIONS') {
    //     return res.sendStatus(200)
    // }
    next();
});

app.use(LoginRoutes)
mongoose.connect(MONGO_CONNECTION).then(result=>app.listen(8080)).catch(err=>console.log(err))

// app.listen(8080)
