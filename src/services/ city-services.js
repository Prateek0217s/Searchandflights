const {CityRepository} = require('../repository/index');

class CityService{
    constructor(){
        this.cityRepository = new CityRepository();
    }
    async createCity(data){
        try{
            const city = await this.cityRepository.createCity(data);
            return city;
        }
        catch(error){
            console.log("something went wrong on the repostitory");
            throw{error};
        }
    }
    async deleteCity(cityId){
        try{
            const response = new this.cityRepository.deleteCity(cityId);
            return response;
        }
        catch(error){
            console.log("something went wrong on the repository");
            throw{error};
        }
    }
    async updatecity(cityId, data){
        try{
             const city = await this.cityRepository.updatecity(cityId,data);
             return city;
        }
        catch(error){
            console.log('Something is wrong on the repository');
            throw{error};
        }
    }
    async getCity(cityId){
        try{
            const city = await new this.cityRepository.findbypk(cityId);
            return city;
        }
        catch(error){
            console.log('Something is wrong on the repository');
            throw{error};
        }
    }
    }

module.exports = CityService;
