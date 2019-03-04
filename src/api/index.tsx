import axios from 'axios';

const footBallApiInstance = axios.create({
  baseURL: 'https://api.football-data.org/v2/',
  headers: {
    'X-Auth-Token': process.env.REACT_APP_API_KEY,
  }
});

export default footBallApiInstance;
