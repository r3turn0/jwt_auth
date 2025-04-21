const http = require('http');
const url = require('url');
const path = require('path');
const { LocalStorage } = require('node-localstorage');

require('dotenv').config({path: path.resolve(__dirname + '/.env')});
console.log({path: path.resolve(__dirname + '/.env')});

const apiURL = new url.URL('http://localhost:8080')
const secret = process.env.SECRET;
const user = process.env.NETSUITE_USER;
const password = process.env.NETSUITE_PASSWORD;

console.log("Netsuite User", user);
console.log("Password", password);

const header = {
    options: {
      host: apiURL,
      username: user,
      password: password,
    },
    path: '/api/auth/signup',
    method: 'POST'
  }
  console.log(header);
  
// Client-side signup code
const signup = async (username, email, password) => {
  try {
    const response = await fetch('http://localhost:8080/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password })
    });

    if (!response.ok) {
      throw new Error('Signup failed');
    }

    const data = await response.json();
    console.log('Signup successful:', data.message);
  } catch (error) {
    console.error('Error during signup:', error.message);
  }
};

const signin = async(username, password) => {
  try {
    const response = await fetch('http://localhost:8080/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password })
    });

    // if (!response.ok) {
    //   throw new Error('Signin Failed');
    // }
    const data = await response.json();
    console.log('Signin successful:', data);
    
    // save the token for future use
    const localStorage = new LocalStorage('./scratch');
    localStorage.setItem('jwtToken', data.accesToken);
    
} catch (error) {
    console.error('Error during signin:', error.message);
  }
};

// Example usage
//signup('exampleUser', 'john@tiledata.net', 'securePassword123')
signin('exampleUser', 'securePassword123');


// (async () => {
//   try {
//     const req = http.get(header, (res) => {
//       console.log(res.statusMessage);
//     });
//   }
//   catch (err) {
//     console.log('An error has occured: ', err);
//   }
// })();