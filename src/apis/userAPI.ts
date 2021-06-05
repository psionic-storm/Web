import { psionicStorm } from './baseAPI';

let refresh: any;

async function signUp({ email, password }: any): Promise<any> {
  try {
    const { data } = await psionicStorm.post('/user/sign-up', { email, password });
    return data;
  } catch (error) {
    return error.response.data;
  }
}

async function signIn({ email, password }: any) {
  try {
    const { data } = await psionicStorm.post('/user/sign-in', { email, password });
    // psionicStorm.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
    // refresh = setTimeout(refreshTokens, 5000);
    return data;
  } catch (error) {
    return error.response.data;
  }
}

// To-do apis 폴더에서 제외해야 함
function signOut() {
  // const { data } = await psionicStorm.get('/user/signOut');
  delete psionicStorm.defaults.headers.common['Authorization'];
  clearTimeout(refresh);
  console.log('????');
  // return data;
}

async function refreshTokens():Promise<any> {
  const { data } = await psionicStorm.post('/user/silent-refresh');
  psionicStorm.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
  refresh = setTimeout(refreshTokens, 10000);
}

async function getCurrentUser() {
  try {
    const { data } = await psionicStorm.get('/user');
    return data;
  } catch (error) {
    return error.response.data;
  }
}

export default {
  signUp,
  signIn,
  signOut,
  refreshTokens,
  getCurrentUser,
};