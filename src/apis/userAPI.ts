import { psionicStorm } from './base';

export async function signUp({ email, password, nickname }: any) {
  const { data } = await psionicStorm.post('/user/signUp', { email, password, nickname });
  console.log(data);
  return data;
}

export async function signIn({ email, password }: any) {
  const { data } = await psionicStorm.post('/user/signIn', { email, password });

  psionicStorm.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${data.accessToken}`;
    return config;
  });

  return data;
}

export async function getCurrentUser() {
  const { data } = await psionicStorm.get('/user');
  console.log(data);
  return data;
}
