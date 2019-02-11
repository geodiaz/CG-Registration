const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
//for windows "set DEBUG=app & nodemon app.js"
//for debian "DEBUG=app nodemon app.js"
const port = process.env.PORT || 3000;
const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const router = require('./src/routes/router');

app.get('/', (req,res)=>{
    res.render(
        'index'
    );
});


app.listen(port, () => {
    debug(`listening to server:  ${chalk.green(port)}`);
  });