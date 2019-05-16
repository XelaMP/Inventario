const express = require('express');
const app = express();
const morgan = require ('morgan');


const {mongoose} = require ('./database');
const user = require('./routes/user.route')

app.set('port',process.env.PORT || 3000);


app.use(morgan('dev'));
app.use(express.json());


app.use('/api/user', user);
app.listen(3000,()=> {
    console.log('Server on port ',app.get('port'));

})