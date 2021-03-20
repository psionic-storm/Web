import { psionicStormAuth } from './base';

export async function addSalon({ name }: any) {
  const { data } = await psionicStormAuth.post(`/salon/`, { name });
  console.log(data);
  return data;
}

export async function getSalon({ salonId }: any) {
  const { data } = await psionicStormAuth.get(`/salon/${salonId}`);
  console.log(data);
  return data;
}

export async function updateSalon({ salonId, name }: any) {
  const { data } = await psionicStormAuth.patch(`/salon/${salonId}`, { name });
  console.log(data);
  return data;
}

export async function getBook({ salonId, bookId }: any) {
  const { data } = await psionicStormAuth.get(`/salon/${salonId}/book/${bookId}`);
  console.log(data);
  return data;
}

export async function addBook({ salonId, title, author, description }: any) {
  const { data } = await psionicStormAuth.post(`/salon/${salonId}/book`, {
    title,
    author,
    description,
  });
  console.log(data);
  return data;
}

export async function deleteBook({ salonId, bookId }: any) {
  const { data } = await psionicStormAuth.delete(`/salon/${salonId}/book/${bookId}`);
  console.log(data);
  return data;
}

export async function addReview({ salonId, bookId, title, content }: any) {
  const { data } = await psionicStormAuth.post(`/salon/${salonId}/book/${bookId}/review`, {
    title,
    content,
  });
  console.log(data);
  return data;
}

export async function updateReview({ salonId, bookId, reviewId, title, content }: any) {
  const { data } = await psionicStormAuth.patch(`/salon/${salonId}/book/${bookId}/review/${reviewId}`, {
    title,
    content,
  });
  console.log(data);
  return data;
}

export async function deleteReview({ salonId, bookId, reviewId }: any) {
  const { data } = await psionicStormAuth.delete(`/salon/${salonId}/book/${bookId}/review/${reviewId}`);
  console.log(data);
  return data;
}

export async function getAllReviewComments({ salonId, bookId, reviewId }: any) {
  const { data } = await psionicStormAuth.get(`/salon/${salonId}/book/${bookId}/review/${reviewId}/comment`);
  console.log(data);
  return data;
}

export async function addReviewComment({ salonId, bookId, reviewId, comment }: any) {
  const { data } = await psionicStormAuth.post(`/salon/${salonId}/book/${bookId}/review/${reviewId}/comment`, {
    comment,
  });
  console.log(data);
  return data;
}

export async function updateReviewComment({ salonId, bookId, reviewId, commentId, comment }: any) {
  const { data } = await psionicStormAuth.patch(
    `/salon/${salonId}/book/${bookId}/review/${reviewId}/comment/${commentId}`,
    {
      comment,
    },
  );
  console.log(data);
  return data;
}

export async function deleteReviewComment({ salonId, bookId, reviewId, commentId }: any) {
  const { data } = await psionicStormAuth.delete(
    `/salon/${salonId}/book/${bookId}/review/${reviewId}/comment/${commentId}`,
  );
  console.log(data);
  return data;
}

export async function addQuote({ salonId, bookId, content, page }: any) {
  const { data } = await psionicStormAuth.post(`/salon/${salonId}/book/${bookId}/quote`, {
    content,
    page,
  });
  console.log(data);
  return data;
}

export async function updateQuote({ salonId, bookId, quoteId, content, page }: any) {
  const { data } = await psionicStormAuth.patch(`/salon/${salonId}/book/${bookId}/quote/${quoteId}`, {
    content,
    page,
  });
  console.log(data);
  return data;
}

export async function deleteQuote({ salonId, bookId, quoteId }: any) {
  const { data } = await psionicStormAuth.delete(`/salon/${salonId}/book/${bookId}/quote/${quoteId}`);
  console.log(data);
  return data;
}

export async function getAllQuoteComments({ salonId, bookId, quoteId }: any) {
  const { data } = await psionicStormAuth.get(`/salon/${salonId}/book/${bookId}/quote/${quoteId}/comment`);
  console.log(data);
  return data;
}

export async function addQuoteComment({ salonId, bookId, quoteId, comment }: any) {
  const { data } = await psionicStormAuth.post(`/salon/${salonId}/book/${bookId}/quote/${quoteId}/comment`, {
    comment,
  });
  console.log(data);
  return data;
}

export async function updateQuoteComment({ salonId, bookId, quoteId, commentId, comment }: any) {
  const { data } = await psionicStormAuth.patch(
    `/salon/${salonId}/book/${bookId}/quote/${quoteId}/comment/${commentId}`,
    {
      comment,
    },
  );
  console.log(data);
  return data;
}

export async function deleteQuoteComment({ salonId, bookId, quoteId, commentId }: any) {
  const { data } = await psionicStormAuth.delete(
    `/salon/${salonId}/book/${bookId}/quote/${quoteId}/comment/${commentId}`,
  );
  console.log(data);
  return data;
}
