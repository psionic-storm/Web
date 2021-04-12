import { psionicStormAuth } from './base';
import {
  RequestGetSalonActionPayload,
  RequestAddSalonActionPayload,
  RequestUpdateSalonActionPayload,
  RequestDeleteSalonActionPayload,
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
} from 'Modules/salon/salonActions';

export async function getSalon({ salonId }: RequestGetSalonActionPayload) {
  const { data } = await psionicStormAuth.get(`/salon/${salonId}`);
  console.log(data);
  return data;
}

export async function addSalon({ name }: RequestAddSalonActionPayload) {
  const { data } = await psionicStormAuth.post(`/salon/`, { name });
  console.log(data);
  return data;
}

export async function updateSalon({ salonId, name }: RequestUpdateSalonActionPayload) {
  const { data } = await psionicStormAuth.patch(`/salon/${salonId}`, { name });
  console.log(data);
  return data;
}

export async function deleteSalon({ salonId }: RequestDeleteSalonActionPayload) {
  const { data } = await psionicStormAuth.patch(`/salon/${salonId}`, { name });
  console.log(data);
  return data;
}

export async function getBook({ salonId, bookId }: RequestGetBookActionPayload) {
  const { data } = await psionicStormAuth.get(`/salon/${salonId}/book/${bookId}`);
  console.log(data);
  return data;
}

export async function addBook({ salonId, title, author, description, thumbnail }: RequestAddBookActionPayload) {
  const { data } = await psionicStormAuth.post(`/salon/${salonId}/book`, {
    title,
    author,
    description,
    thumbnail,
  });
  console.log(data);
  return data;
}

export async function deleteBook({ salonId, bookId }: RequestDeleteBookActionPayload) {
  const { data } = await psionicStormAuth.delete(`/salon/${salonId}/book/${bookId}`);
  console.log(data);
  return data;
}

export async function addReview({ salonId, bookId, title, content }: RequestAddReviewActionPayload) {
  const { data } = await psionicStormAuth.post(`/salon/${salonId}/book/${bookId}/review`, {
    title,
    content,
  });
  console.log(data);
  return data;
}

export async function updateReview({ salonId, bookId, reviewId, title, content }: RequestUpdateReviewActionPayload) {
  const { data } = await psionicStormAuth.patch(`/salon/${salonId}/book/${bookId}/review/${reviewId}`, {
    title,
    content,
  });
  console.log(data);
  return data;
}

export async function deleteReview({ salonId, bookId, reviewId }: RequestDeleteReviewActionPayload) {
  const { data } = await psionicStormAuth.delete(`/salon/${salonId}/book/${bookId}/review/${reviewId}`);
  console.log(data);
  return data;
}

export async function getAllReviewComments({ salonId, bookId, reviewId }: RequestGetAllReviewCommentsActionPayload) {
  const { data } = await psionicStormAuth.get(`/salon/${salonId}/book/${bookId}/review/${reviewId}/comment`);
  console.log(data);
  return data;
}

export async function addReviewComment({ salonId, bookId, reviewId, comment }: RequestAddReviewCommentActionPayload) {
  const { data } = await psionicStormAuth.post(`/salon/${salonId}/book/${bookId}/review/${reviewId}/comment`, {
    comment,
  });
  console.log(data);
  return data;
}

export async function updateReviewComment({
  salonId,
  bookId,
  reviewId,
  commentId,
  comment,
}: RequestUpdateReviewCommentActionPayload) {
  const { data } = await psionicStormAuth.patch(
    `/salon/${salonId}/book/${bookId}/review/${reviewId}/comment/${commentId}`,
    {
      comment,
    },
  );
  console.log(data);
  return data;
}

export async function deleteReviewComment({
  salonId,
  bookId,
  reviewId,
  commentId,
}: RequestDeleteReviewCommentActionPayload) {
  const { data } = await psionicStormAuth.delete(
    `/salon/${salonId}/book/${bookId}/review/${reviewId}/comment/${commentId}`,
  );
  console.log(data);
  return data;
}

export async function addQuote({ salonId, bookId, content, page }: RequestAddQuoteActionPayload) {
  const { data } = await psionicStormAuth.post(`/salon/${salonId}/book/${bookId}/quote`, {
    content,
    page,
  });
  console.log(data);
  return data;
}

export async function updateQuote({ salonId, bookId, quoteId, content, page }: RequestUpdateQuoteActionPayload) {
  const { data } = await psionicStormAuth.patch(`/salon/${salonId}/book/${bookId}/quote/${quoteId}`, {
    content,
    page,
  });
  console.log(data);
  return data;
}

export async function deleteQuote({ salonId, bookId, quoteId }: RequestDeleteQuoteActionPayload) {
  const { data } = await psionicStormAuth.delete(`/salon/${salonId}/book/${bookId}/quote/${quoteId}`);
  console.log(data);
  return data;
}

export async function getAllQuoteComments({ salonId, bookId, quoteId }: RequestGetAllQuoteCommentsActionPayload) {
  const { data } = await psionicStormAuth.get(`/salon/${salonId}/book/${bookId}/quote/${quoteId}/comment`);
  console.log(data);
  return data;
}

export async function addQuoteComment({ salonId, bookId, quoteId, comment }: RequestAddQuoteCommentActionPayload) {
  const { data } = await psionicStormAuth.post(`/salon/${salonId}/book/${bookId}/quote/${quoteId}/comment`, {
    comment,
  });
  console.log(data);
  return data;
}

export async function updateQuoteComment({
  salonId,
  bookId,
  quoteId,
  commentId,
  comment,
}: RequestUpdateQuoteCommentActionPayload) {
  const { data } = await psionicStormAuth.patch(
    `/salon/${salonId}/book/${bookId}/quote/${quoteId}/comment/${commentId}`,
    {
      comment,
    },
  );
  console.log(data);
  return data;
}

export async function deleteQuoteComment({
  salonId,
  bookId,
  quoteId,
  commentId,
}: RequestDeleteQuoteCommentActionPayload) {
  const { data } = await psionicStormAuth.delete(
    `/salon/${salonId}/book/${bookId}/quote/${quoteId}/comment/${commentId}`,
  );
  console.log(data);
  return data;
}
