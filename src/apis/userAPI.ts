import { psionicStorm, psionicStormAuth } from './base';

export async function signUp({ loginId, password, nickname }: any) {
  const { data } = await psionicStorm.post('/user/signUp', { loginId, password, nickname });

  return data;
}

export async function signIn({ loginId, password }: any) {
  const { data } = await psionicStorm.post('/user/signIn', { loginId, password });

}

export async function getCurrentUser() {
  const { data } = await psionicStormAuth.get('/user');
  return data;
}
