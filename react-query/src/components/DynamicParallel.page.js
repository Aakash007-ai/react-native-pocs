// import { useQuery } from "react-query";
import axios from "axios";
import { useQueries } from "react-query";
//when we have to fetch data of each id
//like a table and he has to find data of particular row
//so , we can't use useQuery hook
//as its for single query
//we ahve to create multiple of different query
//so we use useQueries hook to minimise our work

//for our case we find data of 2 id in row at same time
export const DynamicParallelPage = ({ heroIds }) => {
  //we are getting array of ids to be fetched
  const superHeroesFetcher = (heroId) => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`);
  };

  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => superHeroesFetcher(id),
      };
    })
  ); // it result an array of query result
  //so using this we get data before tapping anything on it
  console.log({ queryResults });
  return <div>Dynamic Parallel Queries</div>;
};
