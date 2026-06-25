const { Trophy } = require('lucide-react');
const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight({ ...req.query, ...req.body });
        return res.status(201).json({
            data: flight,
            success : true,
            message : "Successfully created a flight",
            err: {}
        });
    }
    catch (error) {
        console.error(error);
        return res.status(error.statusCode || 500).json({
            data: {},
            success : false,
            message : "not able to create a flight",
            err : { message: error.message }
        });
    }
};

const getall =  async(req,res) => {
    try{
        const flight = await flightService.getallflights(req.query);
        return res.status(200).json({
            data : flight,
            success : true,
            message : "Successfully fetched the flights data from the database",
            error : {}
        });

    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "not able to fetch the data",
            err : {message : error.message}
        });
    }
}

module.exports = {
    create,
    getall
};

