const request = require ("request")

const geocode = (address, callback) => {
    const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address+ '.json?access_token=pk.eyJ1Ijoic2FsbWFraGFsZWQyMiIsImEiOiJjbHBiZzlidHYwa2lnMnFwOXdldmxndDBvIn0.LmtVs1K9AAaO0pgsOYGQRQ'
    request ( { url : geocodeUrl , json :true } , (error , response) =>{
    if (error){
      callback("unable to connect geocode service ", undefined)
    }
    else if (response.body.message){
       callback(response.body.messege, undefined)
    }
    else if(response.body.features.length == 0){
      callback("unable to handle loctaion", undefined)
    }
        else{
            callback(undefined , {
             longtitude : response.body.features[0].center[0],
             latitude : response.body.features[0].center[1]
            })
        
        }
    })
    }
    module.exports = geocode;
