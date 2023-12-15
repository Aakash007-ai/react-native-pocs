import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

// const fetchSuperHero = ({ queryKey }) => {
//   //received as array of object with respect to array
//   const heroId = queryKey[1];
//   return axios.get(`http://localhost:4000/superheroes/${heroId}`);
// };

export const useSuperHeroData = (heroId) => {
  const queryClient = useQueryClient();
  // return useQuery(["super-hero", heroId], fetchSuperHero, {
  return useQuery(
    ["super-hero", heroId],
    () => {
      return axios.get(`http://localhost:4000/superheroes/${heroId}`);
    },
    {
      initialData: () => {
        const hero = queryClient
          .getQueryData("super-heroes")
          ?.data?.find((hero) => hero.id === parseInt(heroId));

        if (hero) {
          return { data: hero };
        } else {
          return undefined;
        }
      },
    }
  );
  //   return userQuery(`super-hero-${heroId}`);
};
