import { psionicStorm } from './base';

export async function getAllReviews() {
  const { data } = await psionicStorm.get('/square/reviews');
  console.log(data);
  return data;
}

export async function getAllQuotes() {
  const { data } = await psionicStorm.get('/square/quotes');
  console.log(data);
  return data;
}
