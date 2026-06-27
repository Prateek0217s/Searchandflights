const { AirportRepository } = require('../repository/index');

class AirportService {
    constructor() {
        this.airportRepository = new AirportRepository();
    }

    async createAirport(data) {
        return this.airportRepository.createAirport(data);
    }
}

module.exports = AirportService;
