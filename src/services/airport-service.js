const { AirportRepository } = require('../repository/index');

class AirportService {
    constructor() {
        this.airportRepository = new AirportRepository();
    }

    async createAirport(data) {
        return this.airportRepository.createAirport(data);
    }

    async getAirport(id) {
        return this.airportRepository.getAirport(id);
    }

    async getAllAirports(filter) {
        return this.airportRepository.getAllAirports(filter);
    }

    async updateAirport(id, data) {
        return this.airportRepository.updateAirport(id, data);
    }

    async deleteAirport(id) {
        return this.airportRepository.deleteAirport(id);
    }
}

module.exports = AirportService;
