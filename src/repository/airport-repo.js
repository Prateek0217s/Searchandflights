const { Airport } = require('../models/index');

class AirportRepository {
    async createAirport(data) {
        try {
            const airport = await Airport.create(data);
            return airport;
        }
        catch (error) {
            console.log('Something went wrong on the repository');
            throw error;
        }
    }

    async getAirport(id) {
        try {
            const airport = await Airport.findByPk(id);
            return airport;
        }
        catch (error) {
            console.log('Something went wrong on the repository');
            throw error;
        }
    }

    async getAllAirports(filter = {}) {
        try {
            const where = {};
            const cityId = filter.cityId ?? filter.Cityid;

            if (filter.name) {
                where.name = filter.name;
            }

            if (cityId) {
                where.cityId = cityId;
            }

            const airports = await Airport.findAll({ where });
            return airports;
        }
        catch (error) {
            console.log('Something went wrong on the repository');
            throw error;
        }
    }

    async updateAirport(id, data) {
        try {
            const airport = await Airport.findByPk(id);
            if (!airport) {
                return null;
            }

            await airport.update(data);
            return airport;
        }
        catch (error) {
            console.log('Something went wrong on the repository');
            throw error;
        }
    }

    async deleteAirport(id) {
        try {
            const response = await Airport.destroy({
                where: {
                    id
                }
            });
            return response > 0;
        }
        catch (error) {
            console.log('Something went wrong on the repository');
            throw error;
        }
    }
}

module.exports = AirportRepository
