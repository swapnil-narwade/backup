const request = require('request');

let geocodeAddress = (address, callback)=>{
let encodedURL = encodeURIComponent(address);
request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyBd8CiM3_oeED5qSPBF_nsve9rtqlC2DQo`,
        json:true},
    (error,response,body)=>{
        if (error){
            callback("unable to connect to the google servers");
        } else if (body.status === "ZERO_RESULTS"){
            callback("incorrect address");
        } else if(body.status ==="OK"){
            callback(undefined,{
                Address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
};

module.exports={
    geocodeAddress
};
