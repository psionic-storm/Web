import { psionicStorm, psionicStormAuth } from './base';

export async function getSpace(spaceId: number) {
  const { data } = await psionicStorm.get(`/space/${spaceId}`);
  console.log(data);
  return data;
}
