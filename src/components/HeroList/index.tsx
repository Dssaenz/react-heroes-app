import { FC, useMemo } from "react";

import { HeroCard } from "..";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";

interface HeroListProps {
  publisher: string;
}

const HeroList: FC<HeroListProps> = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="card-columns">
      {heroes.map((heroe) => (
        <HeroCard key={heroe.id} {...heroe} />
      ))}
    </div>
  );
};

export default HeroList;
