import { psionicStormAuth } from './base';
import {
  RequestGetSpaceActionPayload,
  RequestUpdateSpaceActionPayload,
  RequestGetBookActionPayload,
  RequestAddBookActionPayload,
  RequestDeleteBookActionPayload,
  RequestAddReviewActionPayload,
  RequestUpdateReviewActionPayload,
  RequestDeleteReviewActionPayload,
  RequestGetAllReviewCommentsActionPayload,
  RequestAddReviewCommentActionPayload,
  RequestUpdateReviewCommentActionPayload,
  RequestDeleteReviewCommentActionPayload,
  RequestAddQuoteActionPayload,
  RequestUpdateQuoteActionPayload,
  RequestDeleteQuoteActionPayload,
  RequestGetAllQuoteCommentsActionPayload,
  RequestAddQuoteCommentActionPayload,
  RequestUpdateQuoteCommentActionPayload,
  RequestDeleteQuoteCommentActionPayload,
} from 'Modules/space/spaceActions';

export async function getSpace({ spaceId }: RequestGetSpaceActionPayload) {
  const { data } = await psionicStormAuth.get(`/space/${spaceId}`);
  console.log(data);
  return data;
}

export async function updateSpace({ spaceId, name }: RequestUpdateSpaceActionPayload) {
  const { data } = await psionicStormAuth.patch(`/space/${spaceId}`, { name });
  console.log(data);
  return data;
}

export async function getBook({ spaceId, bookId }: RequestGetBookActionPayload) {
  const { data } = await psionicStormAuth.get(`/space/${spaceId}/book/${bookId}`);
  console.log(data);
  return data;
}

export async function addBook({ spaceId, title, author, description }: RequestAddBookActionPayload) {
  const { data } = await psionicStormAuth.post(`/space/${spaceId}/book`, {
    title,
    author,
    description,
  });
  console.log(data);
  return data;
}

export async function deleteBook({ spaceId, bookId }: RequestDeleteBookActionPayload) {
  const { data } = await psionicStormAuth.delete(`/space/${spaceId}/book/${bookId}`);
  console.log(data);
  return data;
}

export async function addReview({ spaceId, bookId, title, content }: RequestAddReviewActionPayload) {
  const { data } = await psionicStormAuth.post(`/space/${spaceId}/book/${bookId}/review`, {
    title,
    content,
  });
  console.log(data);
  return data;
}

export async function updateReview({ spaceId, bookId, reviewId, title, content }: RequestUpdateReviewActionPayload) {
  const { data } = await psionicStormAuth.patch(`/space/${spaceId}/book/${bookId}/review/${reviewId}`, {
    title,
    content,
  });
  console.log(data);
  return data;
}

export async function deleteReview({ spaceId, bookId, reviewId }: RequestDeleteReviewActionPayload) {
  const { data } = await psionicStormAuth.delete(`/space/${spaceId}/book/${bookId}/review/${reviewId}`);
  console.log(data);
  return data;
}

export async function getAllReviewComments({ spaceId, bookId, reviewId }: RequestGetAllReviewCommentsActionPayload) {
  const { data } = await psionicStormAuth.get(`/space/${spaceId}/book/${bookId}/review/${reviewId}/comment`);
  console.log(data);
  return data;
}

export async function addReviewComment({ spaceId, bookId, reviewId, comment }: RequestAddReviewCommentActionPayload) {
  const { data } = await psionicStormAuth.post(`/space/${spaceId}/book/${bookId}/review/${reviewId}/comment`, {
    comment,
  });
  console.log(data);
  return data;
}

export async function updateReviewComment({
  spaceId,
  bookId,
  reviewId,
  commentId,
  comment,
}: RequestUpdateReviewCommentActionPayload) {
  const { data } = await psionicStormAuth.patch(
    `/space/${spaceId}/book/${bookId}/review/${reviewId}/comment/${commentId}`,
    {
      comment,
    },
  );
  console.log(data);
  return data;
}

export async function deleteReviewComment({
  spaceId,
  bookId,
  reviewId,
  commentId,
}: RequestDeleteReviewCommentActionPayload) {
  const { data } = await psionicStormAuth.delete(
    `/space/${spaceId}/book/${bookId}/review/${reviewId}/comment/${commentId}`,
  );
  console.log(data);
  return data;
}

export async function addQuote({ spaceId, bookId, content, page }: RequestAddQuoteActionPayload) {
  const { data } = await psionicStormAuth.post(`/space/${spaceId}/book/${bookId}/quote`, {
    content,
    page,
  });
  console.log(data);
  return data;
}

export async function updateQuote({ spaceId, bookId, quoteId, content, page }: RequestUpdateQuoteActionPayload) {
  const { data } = await psionicStormAuth.patch(`/space/${spaceId}/book/${bookId}/quote/${quoteId}`, {
    content,
    page,
  });
  console.log(data);
  return data;
}

export async function deleteQuote({ spaceId, bookId, quoteId }: RequestDeleteQuoteActionPayload) {
  const { data } = await psionicStormAuth.delete(`/space/${spaceId}/book/${bookId}/quote/${quoteId}`);
  console.log(data);
  return data;
}

export async function getAllQuoteComments({ spaceId, bookId, quoteId }: RequestGetAllQuoteCommentsActionPayload) {
  const { data } = await psionicStormAuth.get(`/space/${spaceId}/book/${bookId}/quote/${quoteId}/comment`);
  console.log(data);
  return data;
}

export async function addQuoteComment({ spaceId, bookId, quoteId, comment }: RequestAddQuoteCommentActionPayload) {
  const { data } = await psionicStormAuth.post(`/space/${spaceId}/book/${bookId}/quote/${quoteId}/comment`, {
    comment,
  });
  console.log(data);
  return data;
}

export async function updateQuoteComment({
  spaceId,
  bookId,
  quoteId,
  commentId,
  comment,
}: RequestUpdateQuoteCommentActionPayload) {
  const { data } = await psionicStormAuth.patch(
    `/space/${spaceId}/book/${bookId}/quote/${quoteId}/comment/${commentId}`,
    {
      comment,
    },
  );
  console.log(data);
  return data;
}

export async function deleteQuoteComment({
  spaceId,
  bookId,
  quoteId,
  commentId,
}: RequestDeleteQuoteCommentActionPayload) {
  const { data } = await psionicStormAuth.delete(
    `/space/${spaceId}/book/${bookId}/quote/${quoteId}/comment/${commentId}`,
  );
  console.log(data);
  return data;
}
