const express = require('express');
const bodyparser = require('body-parser');
const { PORT } = require('./config/serverconfig');
const Apiroutes = require('./routes/index');
const setup_server = async () => {
    const app = express();
    // body parser setup
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: true }));
    app.use('/api',Apiroutes);
    app.listen(PORT,() => {
        console.log(`Server started at ${PORT}`);
        // console.log(process.env);
    
    });
};

setup_server(); 