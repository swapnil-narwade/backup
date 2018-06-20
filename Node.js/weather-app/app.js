const yargs= require('yargs');

const geocode= require('./geocode/geocode');
const geoWeather= require('./geoWeather/geoWeather');
const argv = yargs
    .options({
        a:{
            demand: true,
            alias: 'address',
            describe: 'address to fetch the weather',
            string: true
        }
    })
    .help()
    .alias('help','h')
    .argv;

geocode.geocodeAddress(argv.address,(errorMessage, results)=>{
    if (errorMessage){
        console.log(errorMessage);
    } else {
        geoWeather.getWeather(results.latitude, results.longitude,(errorMsg, weatherResult)=>{
            if(errorMsg){
                console.log(errorMsg);
            }else{
                console.log(JSON.stringify(weatherResult, undefined,2));
            }
        });
        console.log(JSON.stringify(results,undefined,2));
    }
});



//3786bb4e49bb0d5709307185de8f9271
//      https://api.darksky.net/forecast/[key]/[latitude],[longitude]