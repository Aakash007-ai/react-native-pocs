// import { useQuery } from "react-query";
// import axios from "axios";
import {
  useAddSuperHeroData,
  useSuperHeroesData,
} from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";
import React from "react";
// const fetchSuperHeroes = async () => {
//   return await axios.get("http://localhost:4000/superheroes");
// };

export const RQSuperHeroesPage = () => {
  const [name, setName] = React.useState("");
  const [alterEgo, setAlterEgo] = React.useState("");
  const onSuccess = (data) => {
    //here we get api response
    console.log("request get successfully", data);
  };

  const onError = (error) => {
    console.log("here we get error", error);
  };

  // const results = useQuery("super-heroes", fetchSuperHeroes, {
  //   // cacheTime: 5000,
  //   cacheTime: Infinity,
  //   staleTime: 30000,
  // });

  // const results = useQuery("super-heroes", fetchSuperHeroes);
  // const results = useQuery("super-heroes", () => {
  //   return axios.get("http://localhost:4000/superheroes");
  // });
  //use Query  hook require a key for a particular query to be happen
  //it return an object
  // const { isLoading, data, isError, error, isFetching } = results;

  const { isLoading, data, isError, error, isFetching } = useSuperHeroesData(
    onSuccess,
    onError
  );

  const {
    mutate: addHero,
    isError: isUploadFailed,
    isLoading: uploading,
    error: uploadError,
  } = useAddSuperHeroData();

  const handleAddHeroClick = () => {
    console.log({ name, alterEgo });
    //addSuperHero({ name, alterEgo });
    const hero = { name, alterEgo };
    addHero(hero);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </div>
      {data?.data.map((hero) => {
        return (
          <div key={hero.name}>
            <Link to={`rq-super-heroes/${hero.id}`}> {hero.name}</Link>
          </div>
        );
      })}
    </>
  );
};
