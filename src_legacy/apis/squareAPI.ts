import { psionicStormAuth } from './base';

export async function getAllReviews() {
  const { data } = await psionicStormAuth.get('/square/reviews');
  console.log(data);
  return data;
}

export async function getAllQuotes() {
  const { data } = await psionicStormAuth.get('/square/quotes');
  console.log(data);
  return data;
}
