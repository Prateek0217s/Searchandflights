const express = require('express'); 
const bodyparser = require('body-parser');
const {PORT} = require('./config/serverconfig');
const setup_server = async() => {
    const app = express();
    //body parser setup 
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended : true}));
 
    app.listen(PORT,() =>{  
       console.log(`Server started at ${PORT}`); 
     //  console.log(process.env);
    });
}
setup_server(); 