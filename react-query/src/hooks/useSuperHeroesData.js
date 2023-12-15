import {useQuery, useQueryClient, useMutation} from 'react-query';
import axios from 'axios';
import {request} from '../utils/axios-utils';
const superHeroesFetcher = () => {
  return request({url: '/superheroes'});
  // return axios.get("http://localhost:4000/superheroes"); //we just have to return the request with our request handler no async no await
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery('super-heroes', superHeroesFetcher, {
    onSuccess,
    onError,
    // staleTime: 30000, ///staleTime is the time after which the data will be refetched

    // cacheTime: Infinity,by default 5 minutes
    // staleTime: 30000,
    // select : (data) => {
    //   return data.data //we can modify the data we want to return
    //  //e.g. we want to retrun whole response rather than just data
    // }
  });
};

const addSuperHero = hero => {
  return request({url: '/superheroes', method: 'post', data: hero});
  // return axios.post("http://localhost:4000/superheroes", hero);
};

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient(); // to refetch the query data
  return useMutation(addSuperHero, {
    // onSuccess: () => { //here we are refetching the query
    //   queryClient.invalidateQueries("super-heroes"); //it will refetch this query
    // },
    // onSuccess: (data) => { //updating data on success
    //   queryClient.setQueryData("super-heroes", (oldQueryData) => {
    //     return {
    //       ...oldQueryData,
    //       data: [...oldQueryData.data, data.data],
    //     };
    //   });
    // },
    //optimistic updates updating ui before post request
    onMutate: async newHero => {
      //so first cancel any query that will happen
      await queryClient.cancelQueries('super-heroes');
      //then get the previous value
      const previousHeroData = queryClient.setQueryData(
        'super-heroes',
        oldQueryData => {
          return {
            ...oldQueryData,
            data: [
              ...oldQueryData.data,
              {id: oldQueryData?.data.length + 1, ...newHero},
            ],
          };
        },
      );
      return {previousHeroData}; //incase  request get failed
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueryData('super-heroes', context.previousHeroData);
    },
    onSettled: () => {
      queryClient.invalidateQueries('super-heroes');
    },
  });
};
