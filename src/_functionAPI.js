const axios = require("axios");

function loginAPI(username, password) {
  return axios.post(`http://localhost:3000/user/login`, {
    username,
    password
  });
}

function registerAPI(username, password) {
  return axios.post(`http://localhost:3000/user/register`, {
    username,
    password
  });
}

function getMeAPI(token) {
  return axios.get(`http://localhost:3000/me`, {
    headers: { Authorization: `Bearer ${token}` }
  });
}

module.exports = { loginAPI, registerAPI, getMeAPI };
