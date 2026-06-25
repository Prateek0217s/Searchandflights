const { Flights } = require('../models/index');

class FlightRepository{

    async createFlight(data){
        try{
            const flight = await Flights.create(data);
            return flight;
        }
        catch(error){
            console.log("Something went wrong on the repository");
            throw{error};
        }
    }

    async deleteFlights(FlightId){
        try{
             await Flights.destroy({
                where : {
                    id : FlightId
                }

             });
             return true;
            }
            catch(error){
                console.log("Somehong went wrong on the repository");
                throw{error};
            }
        }

    async getflights(flightId){
        try{
            const flight = await Flights.findByPk(flightId);
            return flight;
        }
        catch(error){
            console.log("something went wrong on the repository");
            throw{error};
        }
    }
   

    async getFlightData(){
        try{
            const flight = await Flights.findAll();
            return flight;
        }
        catch(error){
            console.log("something went wrong on the repository");
            throw{error};
        }
    }
    }

module.exports = FlightRepository;
