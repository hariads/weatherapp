const req=require('request');
module.exports.geocode = (address) => {
var add=encodeURIComponent(address);
var ur='http://maps.googleapis.com/maps/api/geocode/json?address=%20'+add;

req({url:ur,
json:true},(err,res,body)=>
{
    console.log('Address: ',body.results[0].formatted_address);
    console.log('lat:',body.results[0].geometry.location.lat);
    console.log('lon:',body.results[0].geometry.location.lng);
var wea='https://api.darksky.net/forecast/a460af58c48e69cc95c002b00d4f9bd1/'+body.results[0].geometry.location.lat+','+body.results[0].geometry.location.lng;
req({url:wea,
    json:true},(error,response,body)=>{
    console.log('temperature',body.currently.temperature);});
});
}

