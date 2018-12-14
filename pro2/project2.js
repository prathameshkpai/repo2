const request = require('request');

request('https://ghibliapi.herokuapp.com/films', (error, response, body) => 
{
    console.log('error:', error); // Print the error 
    console.log('statusCode:', response && response.statusCode );  // print the status code
    let Res = JSON.parse(body) 
    //console.log('body:', body);   
    console.log(Res)
});