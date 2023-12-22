import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {axios} from './axios-secure';
import {queryClient} from './queryClient';

const fetcherUrl = () => {
  return axios.get('/superheroes');
};

export const fetchSuperHeroes = () => {
  //we can pass onSuccess , onError
  return useQuery({
    queryKey: ['super-heroes'],
    queryFn: fetcherUrl,
    // staleTime: 5000, //data will be picked from cache for always , by default it is 0
    gcTime: 3000,
    onSuccess: data => {
      console.log('onSuccess------------', data);
      // queryClient.clear(); //clears all the cache
      //   queryClient.setQueryData(['super-heroes'], data);
    },
  });
};
