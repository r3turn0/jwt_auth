const http = require('http');
const url = require('url');
const path = require('path');
const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

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
      throw new Error('Signup Failed.');
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

    if (!response.ok) {
      throw new Error('Signin Failed');
    }

    const data = await response.json();
    console.log('Signin successful:', data);
    
    // save the token for future use
    if(data.accessToken) {
      localStorage.setItem('jwtToken', data.accessToken);
      console.log('Token stored in localStorage:', localStorage.getItem('jwtToken'));
    }
    else {
      console.log('No token returned during signin.');
    }

} catch (error) {
    console.error('Error during signin:', error.message);
  }
};

// Example usages
// signup(user, 'john@tiledata.net', password)
signin(user, password);

// GET REQUEST
const fetchWithToken = async () => {
  const token = localStorage.getItem("jwtToken"); // Retrieve the token from storage
  console.log('Retrivieng token:', token);
  const response = await fetch('http://localhost:8080/api/tables/tm_shopify', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': `${token}`, // Include token here
    }
  });

  if (!response.ok) {
    throw new Error('Request failed: fetchWithToken', response);
  }

  const data = await response.json();
  console.log('Table Data:', data);
};

const postWithToken = async () => {
  const token = localStorage.getItem("jwtToken"); // Retrieve the token from storage
  console.log('Retrivieng token:', token);
  const response = await fetch('http://localhost:8080/api/tables/e_product', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': `${token}`, // Include token here
    },
    body: JSON.stringify([{ 
      "internal_id": 1234567890,
      "externalid": "E0001-01426-TEST",
      "item_name": "Test Item"
    },
    { 
      "internal_id": 1234567891,
      "externalid": "E0001-01427-TEST",
      "item_name": "Test Item 2"
    }])
  });

  if (!response.ok) {
    throw new Error('Request failed: postWithToken', response);
  }

  const data = await response.json();
  console.log('Table Data:', data);
};

const updateWithToken = async () => {
  const token = localStorage.getItem("jwtToken"); // Retrieve the token from storage
  console.log('Retrivieng token:', token);
  const response = await fetch('http://localhost:8080/api/tables/e_product/update/1234567890', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': `${token}`, // Include token here
    },
    body: JSON.stringify([{ 
      "internal_id": 1234567890,
      "externalid": "E0001-01426-TEST",
      "item_name": "Updated Item"
    }])
  });

  if (!response.ok) {
    throw new Error('Request failed: updatedWithToken', response);
  }

  const data = await response.json();
  console.log('Table Data:', data);
};


const deleteWithToken = async () => {
  const token = localStorage.getItem("jwtToken"); // Retrieve the token from storage
  console.log('Retrivieng token:', token);
  const response = await fetch('http://localhost:8080/api/tables/e_product/delete/1234567890', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': `${token}`, // Include token here
    }
  });
  
  if (!response.ok) {
    throw new Error('Request failed: deleteWithToken', response);
  }
  
  const data = await response.json();
  console.log('Table Data:', data);
};

// Call the function to fetch data with token for e_product
//fetchWithToken().catch((err) => console.error(err.message));
postWithToken().catch((err) => console.error(err.message));
updateWithToken().catch((err) => console.error(err.message));
deleteWithToken().catch((err) => console.error(err.message));

