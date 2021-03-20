import { psionicStorm, psionicStormAuth } from './base';

export async function signUp({ loginId, password, nickname }: any) {
  const { data } = await psionicStorm.post('/user/signUp', { loginId, password, nickname });

  return data;
}

export async function signIn({ loginId, password }: any) {
  const { data } = await psionicStorm.post('user/signIn', { loginId, password });
  console.log(data);
}
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDIsI…DI0fQ.kll4uK8V3T6_VWch6A0yzGap9avoAi2KAkI2w1cRbaw
export async function getCurrentUser(token: string) {
  const { data } = await psionicStormAuth(token).get('/user');

  return data;
}
