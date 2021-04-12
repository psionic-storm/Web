import { RequestSignInActionPayload, RequestSignUpActionPayload } from 'Modules/user/userActions';
import { psionicStorm, psionicStormAuth } from './base';

export async function signUp({ loginId, password, nickname }: RequestSignUpActionPayload) {
  const { data } = await psionicStorm.post('/user/signUp', { loginId, password, nickname });
  console.log(data);
  return data;
}

export async function signIn({ loginId, password }: RequestSignInActionPayload) {
  const { data } = await psionicStorm.post('/user/signIn', { loginId, password });
  return data;
}

export async function getCurrentUser() {
  const { data } = await psionicStormAuth.get('/user');
  return data;
}
