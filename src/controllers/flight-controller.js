const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success : true,
            message : "Successfully created a flight",
            err: {}
        });
    }
    catch (error) {
        console.log(error);
        return res.status(error.statusCode || 500).json({
            data: {},
            success : false,
            message : "not able to create a flight",
            err : { message: error.message }
        });
    }
};

module.exports = {
    create
};
 
