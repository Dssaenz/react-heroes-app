/* eslint-disable @typescript-eslint/no-explicit-any */
import { Heroes, heroes } from "../data/heroes";

export const getHeroeByName = (name: any = ""): Heroes[] => {
  if (name === "") return [];
  name = name.toLocaleLowerCase();
  return heroes.filter((heroe) =>
    heroe.superhero.toLocaleLowerCase().includes(name)
  );
};
