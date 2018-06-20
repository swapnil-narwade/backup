const request= require('request');


let getWeather= (latitude, longitude, callback)=>{
request({url:`https://api.darksky.net/forecast/3786bb4e49bb0d5709307185de8f9271/${latitude},${longitude}`,
    json: true},(error, response, body)=>{
    if (error) {
        callback("unable to connect to the weather server");
    } else if (response.statusCode === 400){
        callback("can not fetch the weather report");
    } else if ( !error && response.statusCode=== 200){
        callback(undefined,
            {Temperature: body.currently.temperature,
            DewPoint:body.currently.dewPoint,
            Humidity: body.currently.humidity,
            Pressure: body.currently.pressure,
            WindSpeed: body.currently.windSpeed
            });
    }
});
};

module.exports={
  getWeather
};