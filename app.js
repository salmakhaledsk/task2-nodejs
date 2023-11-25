// const request = require("request")

// const forecast =(latitude,longtitude, callback) =>{


// const url ="https://api.weatherapi.com/v1/current.json?key=8a577bb5295a416f9df143601232311&q="+ latitude + "," + longtitude 

// request ({url , json : true }, (error , response) => {
//     if (error){
//         callback ("Unable to connect weather service" ,  undefined)
//     }
//     else if(response.body.error){
//         callback ( response.body.error.message , undefined)
//     }       
//     else{ 
//     callback (undefined ,response.body.location.name + " it is " +response.body.current.condition.text  )
//     }
//  
// } )
// }
const forecast = require ("./data1.js/forecast")

// forecast (29.871903452398 , 26.4941838299718 ,(error , data)  =>{
//     console.log("ERROR", error)
//     console.log("DATA", data)
// })

// //////////////////////////////////////////////////////////////////////////////

// const request = require ("request")

// const geocode = (address, callback) => {
// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address+ '.json?access_token=pk.eyJ1Ijoic2FsbWFraGFsZWQyMiIsImEiOiJjbHBiZzlidHYwa2lnMnFwOXdldmxndDBvIn0.LmtVs1K9AAaO0pgsOYGQRQ'
// request ( { url : geocodeUrl , json :true } , (error , response) =>{
// if (error){
//   callback("unable to connect geocode service ", undefined)
// }
// else if (response.body.message){
//    callback(response.body.messege, undefined)
// }
// else if(response.body.features.length == 0){
//   callback("unable to handle loctaion", undefined)
// }
//     else{
//         callback(undefined , {
//          longtitude : response.body.features[0].center[0],
//          latitude : response.body.features[0].center[1]
//         })
    
//     }
// })
// }
const geocode = require("./data1.js/geocode")

const country = process.argv[2]
geocode (country ,(error , data)  =>{
        console.log("ERROR", error)
        console.log("DATA", data)
  
if (data){
    forecast (data.latitude , data.longtitude ,(error , data)  =>{
        console.log("ERROR", error)
        console.log("DATA", data)
    })
}
else {
    console.log("enterd data is not correct")
}
 
})