const mongoose = require('mongoose');
const path = require('path');
const express = require('express'),
    app = express(),
    port = process.env.PORT || 5000;

//MongoDB Config
const db = process.env.MONGO_URI || require('./config/ConnectionVars').mongoURI;

//MongoDB Connect
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));

//Static folder set up.
app.use(express.static(path.join(__dirname, 'public')));


//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

//Get api routes.
//app.use('/api/question', require('./routes/api/question'));
//app.use('/api/answer', require('./routes/api/answer'));

app.listen(port);