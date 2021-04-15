import { psionicStorm } from './base';

export async function signUp({ email, password, nickname }: any) {
  const { data } = await psionicStorm.post('/user/signUp', { email, password, nickname });
  console.log(data);
  return data;
}

export async function signIn({ email, password }: any) {
  const { data } = await psionicStorm.post('/user/signIn', { email, password });
  psionicStorm.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
  console.log(data);
  return data;
}

// To-do apis 폴더에서 제외해야 함
export function signOut() {
  // const { data } = await psionicStorm.get('/user/signOut');
  delete psionicStorm.defaults.headers.common['Authorization'];
  console.log('????');
  // return data;
}

export async function getCurrentUser() {
  const { data } = await psionicStorm.get('/user');
  console.log(data);
  return data;
}
