const axios = require("axios");

function loginAPI(username, password) {
  return {
    type: "FETCH_DATA",
    payload: axios.post(`http://localhost:3000/user/login`, {
      username,
      password
    })
  };
}

function registerAPI(username, password) {
  return {
    type: "FETCH_DATA",
    payload: axios.post(`http://localhost:3000/user/register`, {
      username,
      password
    })
  };
}

function getMeAPI(token) {
  return {
    type: "FETCH_USERS",
    payload: axios.get(`http://localhost:3000/me`, {
      headers: { Authorization: `Bearer ${token}` }
    })
  };
}

module.exports = { loginAPI, registerAPI, getMeAPI };
