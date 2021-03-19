import { psionicStorm, psionicStormAuth } from './base';

export async function signUp({ loginId, password, nickname }: any) {
  const { data } = await psionicStorm.post('/user/signUp', { loginId, password, nickname });

  console.log(data + 3);
  return data;
}

export async function getCurrentUser(token: string) {
  const { data } = await psionicStormAuth(token).get('/user');

  return data;
}
