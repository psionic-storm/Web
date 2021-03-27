import Axios from 'axios';

export const TOKEN_KEY = 'Authorization';

const devURL = 'http://localhost:';
const prodURL = '';
const kakaoBookURL = `https://dapi.kakao.com/v3/search`;
const PORT = 4000;

export const baseURL = process.env.NODE_ENV === 'production' ? prodURL : devURL;
export const apiURL = baseURL + PORT + '/api';

export const psionicStorm = Axios.create({
  baseURL: apiURL,
  headers: { 'Content-Type': 'application/json' },
});

export const psionicStormAuth = Axios.create({
  baseURL: apiURL,
  headers: {
    'Content-Type': 'application/json',
    [TOKEN_KEY]: `Bearer ${localStorage.getItem('accessToken')}`,
  },
});

export const kakaoBook = Axios.create({
  baseURL: kakaoBookURL,
  headers: {
    Authorization: `KakaoAK ${process.env.KAKAO_API_KEY}`,
    'Content-Type': 'application/json',
  },
});
