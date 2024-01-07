import { Heroes, heroes } from "../data/heroes";

export const getHeroesById = (id: string): Heroes | undefined =>
  heroes.find((heroe) => heroe.id === id);
