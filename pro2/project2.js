const request = require('request');

request('https://ghibliapi.herokuapp.com/films', (error, response, body) => 
{
    console.log('error:', error); // Print the error 
    console.log('statusCode:', response && response.statusCode);  // print the status code
    console.log('body:', body);

});