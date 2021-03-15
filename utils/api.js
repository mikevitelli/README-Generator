// Require axios
const axios = require("axios");

const api = {
  async getUser(userResponses) {
    try {
      let response = await axios.get(
        `https://api.github.com/users/${userResponses.credits}`
      );
      return response.data;
    } catch (error) {
      console.log("oops you entered your username incorrectly");
    }
  },
};

// Must always export module to call in index.js
module.exports = api;
