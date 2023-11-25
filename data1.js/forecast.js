const request = require('request')
const forecast =(latitude,longtitude, callback) =>{
const url ="https://api.weatherapi.com/v1/current.json?key=8a577bb5295a416f9df143601232311&q="+ latitude + "," + longtitude  
request ({url , json : true }, (error , response) => {
    if (error){
        callback ("Unable to connect weather service" ,  undefined)
    }
    else if(response.body.error){
        callback ( response.body.error.message , undefined)
    }       
    else{ 
    callback (undefined ,response.body.location.name + " it is " +response.body.current.condition.text  
    +"and temp   "+ response.body.current.temp_c )
    }
} )
}
module.exports = forecast;