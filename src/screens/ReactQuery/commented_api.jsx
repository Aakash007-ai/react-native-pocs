import axios from './axios-secure';
import {useMutation, useQuery} from '@tanstack/react-query';
import {queryClient} from './queryClient';

export const fetcherUrl = () => {
  return axios.get('/superheroes');
};

export const useSuperHeroQuery = () => {
  return useQuery({
    queryKey: ['super-heroes'],
    queryFn: fetcherUrl,
    // staleTime: 5000, //data will be picked from cache for always , by default it is 0
    gcTime: 3000,
    onSuccess: data => {
      console.log('onSuccess------------', data);
      // queryClient.clear(); //clears all the cache
      queryClient.setQueryData(['super-heroes'], data);
    },
  });
};

export const addSuperHeroMutation = () => {
  return useMutation({
    mutationKey: ['add-super-hero'],
    mutationFn: newHeroData => {
      console.log('newHeroData in mutation function', newHeroData);
      return axios.post('/superheroes', newHeroData);
    },
    onMutate: async newHero => {
      console.log('onMutate', newHero);
      await queryClient.cancelQueries(['super-heroes']); //cancelling is a await
      const previousHeroes = queryClient.getQueryData(['super-heroes']);

      queryClient.setQueryData(['super-heroes'], old => {
        console.log('old query data:::---', old);
        return {
          ...old,
          data: [...old.data, {...newHero, id: old.data.length + 1}],
        };
      });

      console.log(
        'newly updated old data',
        queryClient.getQueryData(['super-heroes']),
      );

      // const previousHeroes = queryClient.getQueryData(['super-heroes']);
      // queryClient.setQueryData('super-heroes', old => [...old, newHero]);
      return {previousHeroes};
    },

    onError: (error, variables, context) => {
      // An error happened!
      console.log(`rolling back optimistic update with id ${context.id}`);
      //in case when we want to rollback the optimistic update, when mutation fails
      queryClient.setQueryData(['super-heroes'], context.previousHeroes); //it is the context returned by onMutate
    },
    onSuccess: (data, variables, context) => {
      // Boom baby!
      // console.log(
      //   "reinvalidating query 'super-heroes",
      //   data,
      //   variables,
      //   context,
      // );
      // queryClient.invalidateQueries({queryKey: ['super-heroes']});
    },
    onSettled: (data, error, variables, context) => {
      console.log('onSettled', data, error, variables, context);
      queryClient.invalidateQueries({queryKey: ['super-heroes']}); //after everything gets pushed refetch the data
    },
  });
};

// useMutation({
//   mutationKey: ['add-super-hero'],
//   mutationFn: newHeroData => {
//     console.log('newHeroData in mutation function', newHeroData);
//     return axios.post('/superheroes', newHeroData);
//   },
//   onMutate: async newHero => {
//     console.log('onMutate', newHero);
//     await queryClient.cancelQueries(['super-heroes']); //cancelling is a await
//     const previousHeroes = queryClient.getQueryData(['super-heroes']);

//     queryClient.setQueryData(['super-heroes'], old => {
//       console.log('old query data:::---', old);
//       return {
//         ...old,
//         data: [...old.data, {...newHero, id: old.data.length + 1}],
//       };
//     });

//     console.log(
//       'newly updated old data',
//       queryClient.getQueryData(['super-heroes']),
//     );

//     // const previousHeroes = queryClient.getQueryData(['super-heroes']);
//     // queryClient.setQueryData('super-heroes', old => [...old, newHero]);
//     return {previousHeroes};
//   },

//   onError: (error, variables, context) => {
//     // An error happened!
//     console.log(`rolling back optimistic update with id ${context.id}`);
//     //in case when we want to rollback the optimistic update, when mutation fails
//     queryClient.setQueryData(['super-heroes'], context.previousHeroes); //it is the context returned by onMutate
//   },
//   onSuccess: (data, variables, context) => {
//     // Boom baby!
//     // console.log(
//     //   "reinvalidating query 'super-heroes",
//     //   data,
//     //   variables,
//     //   context,
//     // );
//     // queryClient.invalidateQueries({queryKey: ['super-heroes']});
//   },
//   onSettled: (data, error, variables, context) => {
//     console.log('onSettled', data, error, variables, context);
//     queryClient.invalidateQueries({queryKey: ['super-heroes']}); //after everything gets pushed refetch the data
//   },
//   // onMutate: async newHero => {},
// });
