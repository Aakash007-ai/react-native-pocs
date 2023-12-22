import axios from './axios-secure';
import {useMutation, useQuery} from '@tanstack/react-query';
import {queryClient} from './queryClient';

//apis
export const fetcherUrl = () => {
  return axios.get('/superheroes');
};

export const addSuperHeroUrl = newHeroData => {
  return axios.post('/superheroes', newHeroData);
};

//React Query Custom Hooks

export const useSuperHeroQuery = () => {
  return useQuery({
    queryKey: ['super-heroes'],
    queryFn: fetcherUrl,
    gcTime: 3000,
    onSuccess: data => {
      queryClient.setQueryData(['super-heroes'], data);
    },
  });
};

export const addSuperHeroMutation = () => {
  return useMutation({
    mutationKey: ['add-super-hero'],
    mutationFn: addSuperHeroUrl,
    onMutate: async newHero => {
      await queryClient.cancelQueries(['super-heroes']);
      const previousHeroes = queryClient.getQueryData(['super-heroes']);
      queryClient.setQueryData(['super-heroes'], old => {
        return {
          ...old,
          data: [...old.data, {...newHero, id: old.data.length + 1}],
        };
      });

      return {previousHeroes};
    },

    onError: (error, variables, context) => {
      queryClient.setQueryData(['super-heroes'], context.previousHeroes); //it is the context returned by onMutate
    },
    onSuccess: (data, variables, context) => {},
    onSettled: (data, error, variables, context) => {
      queryClient.invalidateQueries({queryKey: ['super-heroes']}); //after everything gets pushed refetch the data
    },
  });
};
