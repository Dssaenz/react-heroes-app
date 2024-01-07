import { useMemo } from "react";
import { useParams, Redirect, useHistory } from "react-router-dom";

import { getHeroesById } from "../../selectors/getHeroesById";

interface RouteParams {
  heroeId: string;
}

function HeroeScreen() {
  const history = useHistory();
  const { heroeId } = useParams<RouteParams>();
  const heroe = useMemo(() => getHeroesById(heroeId), [heroeId]);

  if (!heroe) {
    return <Redirect to="/" />;
  }

  const { superhero, alter_ego, characters, first_appearance, publisher } =
    heroe;

  const handleReturn = () =>
    history.length <= 2 ? history.push("/") : history.goBack();

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          alt={superhero}
          src={`../../assets/heroes/${heroeId}.jpg`}
          className="img-thumbnail"
        />
      </div>

      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance:</b>
            {first_appearance}
          </li>
        </ul>

        <h5>Characters</h5>
        <p>{characters}</p>

        <button onClick={handleReturn} className="btn btn-outline-info">
          Return
        </button>
      </div>
    </div>
  );
}

export default HeroeScreen;
