import { FC } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";

interface HeroListProps {
  publisher: string;
}

export const HeroList: FC<HeroListProps> = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  return (
    <ul>
      {heroes.map((heroe) => (
        <li key={heroe.id}>{heroe.superhero}</li>
      ))}
    </ul>
  );
};
