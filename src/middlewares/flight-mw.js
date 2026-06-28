 const validateCreateFlight = (req,res,next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivaltime ||
        !req.body.departuretime ||
        !req.body.price
    ){
        return res.status(400).json({
            data : {},
            success : false,
            message : 'Invalid request body for creation of flight',
            err : 'missing mandatory parameters '
        });
    }
    next();
 }

 module.exports = {
    validateCreateFlight
 }






 /**
 *  flightnumber,
 *  airplaneId,
 *  departureAirportId,
 *  arrivalAirportId,
 *  arrivalTime,
 *  departureTime,
 *  price,
 *  totalseats -> airplane
 */