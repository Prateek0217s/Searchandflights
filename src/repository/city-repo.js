   const {City} = require('../models/index')
   
   class CityRepository {
    async createCity({name}){
        try {
            const city = await City.create({name});
            return city;
        } catch(error){
            console.log("something went wrong on the repository");
            throw{error};
        }
    }

    async deleteCity({cityid}){
        try {
            await City.destroy({
                where :{
                    id: cityid
                }
            });
            return true;
        } catch(error){
            console.log("something went wrong on the repository");
            throw{error};
        }
    }
    async updatecity(cityid,data){
        try{
            const city = await city.update(data,{
                where : {
                    id : cityid
                }
            });
            return city;
        }
        catch(error){
            console.log("something went wrong on the repository");
            throw(error);
        }
    }
     
    async getcity(cityid){
        try{
            const city = await city.findbypk(cityid);
            return city; 
        }
        catch(error){
            console.log("something went wrong on the repository");
            throw{error};
        }

    }
   }

module.exports = CityRepository;
