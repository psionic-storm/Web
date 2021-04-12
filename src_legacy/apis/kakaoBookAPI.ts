import { kakaoSearch } from './base';

export async function searchBook(query: string) {
  const { data } = await kakaoSearch.get(`book?&query=${query}&size=10&page=1`);
  return data;
}
