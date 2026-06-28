const express = require('express');

const  { FlightMiddlewares } = require('../../middlewares/index');
const CityController = require('../../controllers/city-controller');
const router = express.Router();
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');
router.post
('/flight',
    FlightMiddlewares.validateCreateFlight,
    FlightController.create
);
router.post('/city', CityController.create);
router.get('/city/:id', CityController.get);
router.patch('/city/:id', CityController.update);
router.delete('/city/:id', CityController.destroy);
router.get('/city',CityController.getall);
router.get('/flight',FlightController.getall);
router.post('/airports',AirportController.create);
router.get('/airports/:id',AirportController.get);
router.get('/airports',AirportController.getall);
router.patch('/airports/:id',AirportController.update);
router.delete('/airports/:id',AirportController.destroy);
module.exports = router;
