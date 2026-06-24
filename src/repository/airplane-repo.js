const { Airplane } = require('../models/index');

class AirplaneRepository {
    async getAirplane(id) {
        return Airplane.findByPk(id);
    }
}

module.exports = AirplaneRepository;
