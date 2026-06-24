const { Flights } = require('../models/index');

class FlightRepository {
    async createFlight(data) {
        return Flights.create(data);
    }

    async getFlightData() {
        return Flights.findAll();
    }
}

module.exports = FlightRepository;
