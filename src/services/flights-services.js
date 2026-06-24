const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utilities/helper');

class FlightService {
    constructor() {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data) {
        const departureAirportId = data.departureAirportId ?? data.departueAirportId;
        const requiredFields = {
            flightNumber: data.flightNumber,
            airplaneId: data.airplaneId,
            departureAirportId,
            arrivalAirportId: data.arrivalAirportId,
            arrivaltime: data.arrivaltime,
            departuretime: data.departuretime,
            price: data.price
        };
        const missingFields = Object.entries(requiredFields)
            .filter(([, value]) => value === undefined || value === null || value === '')
            .map(([field]) => field);

        if (missingFields.length > 0) {
            const error = new Error(`Missing required fields: ${missingFields.join(', ')}`);
            error.statusCode = 400;
            throw error;
        }

        if (!compareTime(data.arrivaltime, data.departuretime)) {
            const error = new Error('Arrival time must be later than departure time');
            error.statusCode = 400;
            throw error;
        }

        const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
        if (!airplane) {
            const error = new Error(`Airplane with id ${data.airplaneId} was not found`);
            error.statusCode = 404;
            throw error;
        }

        return this.flightRepository.createFlight({
            flightNumber: data.flightNumber,
            airplaneId: data.airplaneId,
            departueAirportId: departureAirportId,
            arrivalAirportId: data.arrivalAirportId,
            arrivaltime: data.arrivaltime,
            departuretime: data.departuretime,
            price: data.price,
            boardGate: data.boardGate,
            totalSeats: airplane.Capacity
        });
    }

    async getFlightData() {
        return this.flightRepository.getFlightData();
    }
}

module.exports = FlightService;
