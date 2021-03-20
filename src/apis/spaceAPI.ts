import { psionicStorm, psionicStormAuth } from './base';

export async function getSpace({ spaceId }: any) {
  const { data } = await psionicStorm.get(`/space/${spaceId}`);
  console.log(data);
  return data;
}

export async function updateSpace({ spaceId, name }: any) {
  const { data } = await psionicStormAuth.patch(`/space/${spaceId}`, { name });
  console.log(data);
  return data;
}

export async function getBook({ spaceId, bookId }: any) {
  const { data } = await psionicStorm.get(`/space/${spaceId}/book/${bookId}`);
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
