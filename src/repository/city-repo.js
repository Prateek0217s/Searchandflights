    const { Op } = require('sequelize');
    const {City} = require('../models/index');
   
   class CityRepository {
    async createCity({name}){
        try {
            const city = await City.create({name});
            return city;
        } 
        catch(error){
            console.log("something went wrong on the repository");
            throw{error};
        }
    }

    async deleteCity(cityid){
        try {
            await City.destroy({
                where :{
                    id: cityid
                }
            });
            return true;
        } 
        catch(error){
            console.log("something went wrong on the repository");
            throw{error};
        }
    }
    async updateCity(cityid,data){
        try{
            const city = await City.findByPk(cityid);
            if (!city) return null;
            await city.update(data);
            return city;
        }
        catch(error){
            console.log("something went wrong on the repository");
            throw(error);
        }
    }
     
    async getCity(cityid){
        try{
            const city = await City.findByPk(cityid);
            return city; 
        }
        catch(error){
            console.log("something went wrong on the repository");
            throw{error};
        }

    } 
  
   async getallcities(filter = {}){
    try{
        if(filter.name){
            const city = await City.findAll({
                where : {
                    name : {
                        [Op.like] : `${filter.name}%`
                    }
                }
            });
            return city;

        }
       const city = await City.findAll();
        return city;
    }
    catch(error){
        console.log("kuch to gadbad hogyi hain ");
        throw{error};
    }
   }
}
module.exports = CityRepository;
