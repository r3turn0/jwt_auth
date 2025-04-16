const http = require('http');
const url = require('url');
const path = require('path');

require('dotenv').config({path: path.resolve(__dirname + '.env')});
console.log({path: path.resolve(__dirname + './.env')});

const apiURL = new url.URL('http://localhost:8080')
//const secretKey = process.env.SECRET;
const user = 'netsuite_user';
const email = 'john@tiledata.net';

const header = {
    host: apiURL,
    username: user,
    email:  email, 
    path: '/api/auth/',
    method: 'POST'
}

console.log(header);
(async () => {
  try {
    const req = http.get(header, (res) => {
      console.log(res.statusMessage);
    });
  }
  catch (err) {
    console.log('An error has occured: ', err);
    console.log('The request made was: ', req);
  }
})();