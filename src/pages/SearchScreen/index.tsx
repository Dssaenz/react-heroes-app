import { ChangeEvent, useMemo } from "react";
import queryString from "query-string";
import { useHistory, useLocation } from "react-router-dom";

import { HeroCard } from "../../components";
import { useForm } from "../../hooks/useForm";
import { getHeroeByName } from "../../selectors/getHeroeByName";

function SearchScreen() {
  const history = useHistory();
  const location = useLocation();
  const { q: query } = queryString.parse(location.search);

  const { values, handleInputChange } = useForm({ searchText: query });

  const { searchText } = values;

  const heroesFiltered = useMemo(() => getHeroeByName(query), [query]);

  const handleSearch = (e: ChangeEvent<EventTarget>) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form action="">
            <input
              type="text"
              name="searchText"
              value={searchText}
              className="form-control"
              placeholder="Find your hero"
              autoComplete="off"
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn mt-1  btn-block btn-outline-primary"
              onClick={handleSearch}
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {query === "" && (
            <div className="alert alert-info">Search a hero</div>
          )}

          {query !== "" && heroesFiltered.length === 0 && (
            <div className="alert alert-danger">
              There is not a hero with {searchText}
            </div>
          )}

          {heroesFiltered.map((hereo) => (
            <HeroCard key={hereo.id} {...hereo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchScreen;
