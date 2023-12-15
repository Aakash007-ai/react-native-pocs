import { useQuery } from "react-query";
import axios from "axios";
export const ParallerQueriesPage = () => {
  const superHeroesFetcher = () => {
    return axios.get("http://localhost:4000/superheroes"); //we just have to return the request with our request handler no async no await
  };

  const friendsFetcher = () => {
    return axios.get("http://localhost:4000/friends");
  };

  const { data: superHeroes } = useQuery("super-heroes", superHeroesFetcher);
  const { data: friends } = useQuery("friends", superHeroesFetcher);
  return <div>Paralle Queries</div>;
};
