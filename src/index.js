const express = require('express');
const bodyparser = require('body-parser');
const { PORT } = require('./config/serverconfig');
const { City } = require('./models/index');
const CityRepository = require('./repository/city-repo');
const setup_server = async () => {
    const app = express();
    // body parser setup
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: true }));

    app.listen(PORT,() => {
        console.log(`Server started at ${PORT}`);
        // console.log(process.env);
        const repo = new CityRepository();
        repo.createCity({name : "UNA "});
    });
};

setup_server();