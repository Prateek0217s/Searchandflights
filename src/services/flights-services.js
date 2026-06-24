const {flightRepository,AirplaneRepository} = require('../repository/index');
const {compareTime} = require('../utilities/helper');
class FlightService{
    constructor(){
        this.airplaneRepository  = new AirplaneRepository();
    }
    async createFlight(data){
           if(!compareTime(data.arrivaltime,data.departuretime)){
            throw{error : 'Arrival Time cannt be less than departure time'};
           }
            const airplaneRepository = new AirplaneRepository();
            const airplane = await  this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFLight({...data,totalSeats:airplane.capacity});
            return flight;
        }
        catch(error){
            console.log("something went wrong on the repository");
            throw{error};
        }
    }

    /*async getFlightData(){
        try{
            const flight = await this.flightRepository.getFlightData();
            return flight;
            
        }
        catch(error){
            console.log('something went wrong on the repo.');
            throw{error};
        }
    }
*/
module.exports = FlightService;