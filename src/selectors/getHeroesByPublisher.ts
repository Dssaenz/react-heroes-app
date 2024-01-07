import { Heroes, heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher: string): Array<Heroes> => {
  const validatePublisher = ["DC Comics", "Marvel Comics"];

  if (!validatePublisher.includes(publisher))
    throw new Error(`Publisher "${publisher}" no es correcto`);

  return heroes.filter((heroe) => heroe.publisher === publisher);
};
