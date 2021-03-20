import { psionicStormAuth } from './base';

export async function getSpace({ spaceId }: any) {
  const { data } = await psionicStormAuth.get(`/space/${spaceId}`);
  console.log(data);
  return data;
}

export async function updateSpace({ spaceId, name }: any) {
  const { data } = await psionicStormAuth.patch(`/space/${spaceId}`, { name });
  console.log(data);
  return data;
}

export async function getBook({ spaceId, bookId }: any) {
  const { data } = await psionicStormAuth.get(`/space/${spaceId}/book/${bookId}`);
  console.log(data);
  return data;
}

export async function addBook({ spaceId, title, author, description }: any) {
  const { data } = await psionicStormAuth.post(`/space/${spaceId}/book`, {
    title,
    author,
    description,
  });
  console.log(data);
  return data;
}

export async function deleteBook({ spaceId, bookId }: any) {
  const { data } = await psionicStormAuth.delete(`/space/${spaceId}/book/${bookId}`);
  console.log(data);
  return data;
}

export async function addReview({ spaceId, bookId, title, content }: any) {
  const { data } = await psionicStormAuth.post(`/space/${spaceId}/book/${bookId}/review`, {
    title,
    content,
  });
  console.log(data);
  return data;
}

export async function updateReview({ spaceId, bookId, reviewId, title, content }: any) {
  const { data } = await psionicStormAuth.patch(`/space/${spaceId}/book/${bookId}/review/${reviewId}`, {
    title,
    content,
  });
  console.log(data);
  return data;
}

export async function deleteReview({ spaceId, bookId, reviewId }: any) {
  const { data } = await psionicStormAuth.delete(`/space/${spaceId}/book/${bookId}/review/${reviewId}`);
  console.log(data);
  return data;
}

export async function getAllReviewComments({ spaceId, bookId, reviewId }: any) {
  const { data } = await psionicStormAuth.get(`/space/${spaceId}/book/${bookId}/review/${reviewId}/comment`);
  console.log(data);
  return data;
}

export async function addReviewComment({ spaceId, bookId, reviewId, comment }: any) {
  const { data } = await psionicStormAuth.post(`/space/${spaceId}/book/${bookId}/review/${reviewId}/comment`, {
    comment,
  });
  console.log(data);
  return data;
}

export async function updateReviewComment({ spaceId, bookId, reviewId, commentId, comment }: any) {
  const { data } = await psionicStormAuth.patch(
    `/space/${spaceId}/book/${bookId}/review/${reviewId}/comment/${commentId}`,
    {
      comment,
    },
  );
  console.log(data);
  return data;
}

export async function deleteReviewComment({ spaceId, bookId, reviewId, commentId }: any) {
  const { data } = await psionicStormAuth.delete(
    `/space/${spaceId}/book/${bookId}/review/${reviewId}/comment/${commentId}`,
  );
  console.log(data);
  return data;
}

export async function addQuote({ spaceId, bookId, content, page }: any) {
  const { data } = await psionicStormAuth.post(`/space/${spaceId}/book/${bookId}/quote`, {
    content,
    page,
  });
  console.log(data);
  return data;
}

export async function updateQuote({ spaceId, bookId, quoteId, content, page }: any) {
  const { data } = await psionicStormAuth.patch(`/space/${spaceId}/book/${bookId}/quote/${quoteId}`, {
    content,
    page,
  });
  console.log(data);
  return data;
}

export async function deleteQuote({ spaceId, bookId, quoteId }: any) {
  const { data } = await psionicStormAuth.delete(`/space/${spaceId}/book/${bookId}/quote/${quoteId}`);
  console.log(data);
  return data;
}

export async function getAllQuoteComments({ spaceId, bookId, quoteId }: any) {
  const { data } = await psionicStormAuth.get(`/space/${spaceId}/book/${bookId}/quote/${quoteId}/comment`);
  console.log(data);
  return data;
}

export async function addQuoteComment({ spaceId, bookId, quoteId, comment }: any) {
  const { data } = await psionicStormAuth.post(`/space/${spaceId}/book/${bookId}/quote/${quoteId}/comment`, {
    comment,
  });
  console.log(data);
  return data;
}

export async function updateQuoteComment({ spaceId, bookId, quoteId, commentId, comment }: any) {
  const { data } = await psionicStormAuth.patch(
    `/space/${spaceId}/book/${bookId}/quote/${quoteId}/comment/${commentId}`,
    {
      comment,
    },
  );
  console.log(data);
  return data;
}

export async function deleteQuoteComment({ spaceId, bookId, quoteId, commentId }: any) {
  const { data } = await psionicStormAuth.delete(
    `/space/${spaceId}/book/${bookId}/quote/${quoteId}/comment/${commentId}`,
  );
  console.log(data);
  return data;
}
