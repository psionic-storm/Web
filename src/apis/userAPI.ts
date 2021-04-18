import { psionicStorm } from './base';

export async function signUp({ email, password }: any): Promise<any> {
  try {
    const { data } = await psionicStorm.post('/user/signUp', { email, password });
    return data;
  } catch (error) {
    return error.response.data;
  }
}

export async function signIn({ email, password }: any) {
  try {
    const { data } = await psionicStorm.post('/user/signIn', { email, password });
    psionicStorm.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
    return data;
  } catch (error) {
    return error.response.data;
  }
}

// To-do apis 폴더에서 제외해야 함
export function signOut() {
  // const { data } = await psionicStorm.get('/user/signOut');
  delete psionicStorm.defaults.headers.common['Authorization'];
  console.log('????');
  // return data;
}

export async function getCurrentUser() {
  try {
    const { data } = await psionicStorm.get('/user');
    return data;
  } catch (error) {
    return error.response.data;
  }
}
