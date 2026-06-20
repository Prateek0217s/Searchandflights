#Welcome to flights and search
## Project Setup : 
- clone the project on your local 
- run "npm install" on your terminal on the same path of your directory.
-create a ".env" with the essentials listed below: 
        -"PORT =3000"

- inside the "src/config" folder create a file "config.json" and then add this following code : 
{
    "development" :{
        "username" : "root",
        "password" : "root123",
        "database" : "flights_and_search",
        "host" : "127.0.0.1",
        "dialect" : "mysql"
    }
    }

-Once you have added your db config as listed above, go to the src folder and run the command "npx sequelize db:create"

## DB design :
 - Airplane table
 - Flight 
 - Airport 
 - city
 
 - A Flight belongs to one airport but an airplane can be used in multiple flights
 - A city has many airports but one airport belongs to a city
 - one airport can have many flights , but one flight should belongs to an airport

 ## Tables : 

 -> City  -> id,name,created_at, updated_at.
 -> Airport ->  id,name,address,city_id,created_at,updated_at
    Relationship : City can have many airports and Airport belongs to a city (one to many)
 
 -> These command : 
    -> npx sequelize model: generate --name Airport --attributes 
        name:string,address:string,cityId : integer 
