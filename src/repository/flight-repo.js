const { Op } = require('sequelize');
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
   

    async getFlightData(filter = {}){
        try{
            const where = {};
            const minPrice = filter.minprice ?? filter.minPrice;
            const maxPrice = filter.maxprice ?? filter.maxPrice;
            const departureAirportId = filter.departureAirportId ?? filter.departueAirportId;

            if (filter.airplaneId) {
                where.airplaneId = filter.airplaneId;
            }

            if (departureAirportId) {
                where.departueAirportId = departureAirportId;
            }

            if (filter.arrivalAirportId) {
                where.arrivalAirportId = filter.arrivalAirportId;
            }

            if (minPrice || maxPrice) {
                where.price = {};
                if (minPrice) {
                    where.price[Op.gte] = Number(minPrice);
                }
                if (maxPrice) {
                    where.price[Op.lte] = Number(maxPrice);
                }
            }

            const flight = await Flights.findAll({ where });
            return flight;
        }
        catch(error){
            console.log("something went wrong on the repository");
            throw{error};
        }
    }
    }

module.exports = FlightRepository;
