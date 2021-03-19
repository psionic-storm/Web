import Axios from 'axios';

export const TOKEN_KEY = 'authorization';

const devURL = 'http://localhost:';
const prodURL = '';
const PORT = 3000;

export const baseURL = process.env.NODE_ENV === 'production' ? prodURL : devURL;
export const apiURL = baseURL + PORT + '/api';

export const psionicStorm = Axios.create({
  baseURL: apiURL,
  headers: { 'Content-Type': 'application/json' },
});

export const psionicStormAuth = (token: string) =>
  Axios.create({
    baseURL: apiURL,
    headers: {
      'Content-Type': 'application/json',
      [TOKEN_KEY]: token,
    },
  });
