import { psionicStorm, psionicStormAuth } from './base';

export async function getSpace(spaceId: number) {
  const { data } = await psionicStorm.get(`/space/${spaceId}`);
  console.log(data);
  return data;
}

export async function updateSpace({ spaceId, name }: any) {
  const { data } = await psionicStormAuth.patch(`/space/${spaceId}`, { name });
  console.log(data);
  return data;
}
