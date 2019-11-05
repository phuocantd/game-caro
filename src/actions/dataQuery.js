const axios = require("axios");

function loginAPI(username, password) {
  return {
    type: "FETCH_DATA",
    payload: axios.post(`https://rest-api-1612009.herokuapp.com/user/login`, {
      username,
      password
    })
  };
}

function registerAPI(username, password) {
  return {
    type: "FETCH_DATA",
    payload: axios.post(`https://rest-api-1612009.herokuapp.com/user/register`, {
      username,
      password
    })
  };
}

function getMeAPI(token) {
  return {
    type: "FETCH_USERS",
    payload: axios.get(`https://rest-api-1612009.herokuapp.com/me`, {
      headers: { Authorization: `Bearer ${token}` }
    })
  };
}

module.exports = { loginAPI, registerAPI, getMeAPI };
