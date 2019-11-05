const axios = require("axios");

function loginAPI(username, password) {
  return axios.post(`https://rest-api-1612009.herokuapp.com/user/login`, {
    username,
    password
  });
}

function registerAPI(username, password) {
  return axios.post(`https://rest-api-1612009.herokuapp.com/user/register`, {
    username,
    password
  });
}

function getMeAPI(token) {
  return axios.get(`https://rest-api-1612009.herokuapp.com/me`, {
    headers: { Authorization: `Bearer ${token}` }
  });
}

module.exports = { loginAPI, registerAPI, getMeAPI };
