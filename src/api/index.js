import axios from 'axios';

export default axios.create({
  baseURL: 'https://itunes.apple.com/search',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
  },
});
