const express = require('express'); 
const {PORT} = require('./config/serverconfig');
const setup_server = async() => {
    const app = express();
 
    app.listen(PORT,() =>{  
       console.log(`Server started at ${PORT}`); 
     //  console.log(process.env);
    });
}
setup_server();