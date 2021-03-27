import { kakaoBook } from './base';

export async function searchBook(query: string) {
  const { data } = await kakaoBook.get(`book?&query=${query}&size=10&page=1`);
  console.log(data);
  return data;
}
