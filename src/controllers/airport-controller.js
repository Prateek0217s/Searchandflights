const {AirportService} = require('../services/index');

const airportservice = new AirportService;

const create = async(req,res) => {
    try{
        const flightRequestData = {
            flightNumber : req.query.flightNumber,
            airplaneId : req.query.airplaneId,
            departureAirportId : req.query.departureAirportId,
            arrivalAirportId : req.query.arrivalAirportId,
            arrivalTime : req.query.arrivalTime,
            departureTime : req.query.departureTime,
            price : req.query.price
        }
        const response = await airportservice.create(flightRequestData);
        return res.status(200).json({
            message : response,
            success : true,
            message : 'successfully create the airport',
            err : {}
        })
    }
    catch(error){
        console.log('something went wrong on the controller layer');
        return res.status(500).json({
            data : {},
            success : false,
            message : 'unable to create the airport',
            err : error
        });
    }
}

const destroy = async(req,res) => {
    try{
        const response = await airportservice.destroy(req.params.id);
        return res.status(201).json({
            data : response,
            success : true,
            message : "successfully deleted the service",
            err : {}
        })
    }
    catch(error){
        console.log('something went wrong on the controller layer');
        return res.status(500).json({
            data : {},
            success : false,
            message : 'unable to delete the airport',
            err : error
        });
    }
}

const get = async(req,res) => {
    try{
        const response = await airportservice.get(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message :'successfully fetch the service',
            err : {}
        })
    }
    catch(error){
        console.log('something went wrong on the controller layer');
        return res.status(500).json({
            data : {},
            success : false,
            message : 'unable to fetch the airport',
            err : error
        });
    }
}

const getall = async(req,res) => {
    try{
        const response = await airportservice.getall();
        return req.status(201).json({
            data : response,
            success : true,
            message : 'successfully fetched all the service ',
            err : {}
        })
    }
    catch(error){
        console.log('something went wrong on the controller layer');
        return res.status(500).json({
            data : {},
            success : false,
            message : 'unable to fetch all the airport',
            err : error
        });
    }
}

const update = async(req,res) => {
    try{
        const response = await airportservice.update(req.params.id,req.query);
        return res.status(201).json({
            data : response,
            success : true,
            message : "Successfully updated the service",
            err : {}
        });

    }
    catch(error){
        console.log('something went wrong on the controller layer');
        return res.status(500).json({
            data : {},
            success : false,
            message : 'unable to update the airport',
            err : error
        });
    }
}

module.exports = {
    create, 
    destroy,
    get,
    getall,
    update
}