const {CityService} = require('../services/index');

const cityService = new CityService();

const create = async (req,res) => {
    try  {   const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            success : true,
            message : " Successfully created a city",
            err :{}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "not able to create the city",
            err : error
        });
    }
}

const destroy = async (req,res) => {
     try {
         const response = await cityService.deleteCity(req.params.id);
         return res.status(200).json({
            data : response,
            success : true,
            message : "Successfully destroyed the city",
            err : {}
         });
     }
 catch(error){
    console.log(error);
    return res.status(500).json({
        data : {},
        success : false,
        message : "cann't delete a city",
        err : error
    });
 }
}

const get = async (req,res) =>{
    try{
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : "Successfully fetched the city",
            err : {}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false, 
            message : " cann't able to fetch the data ",
            err : error
        })
    }
}

const update = async (req,res) =>{
    try{
        const response = await cityService.updatecity(req.params.id, req.body);
        return res.status(201).json({
            data : response,
            success : true,
            message : " Successfully updated the city",
            err : {}
        });      
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "cann't retreive the city",
            err : error 
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update
}
