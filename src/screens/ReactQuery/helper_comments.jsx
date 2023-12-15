// https://tanstack.com/query/v5/docs/react/guides/important-defaults

//---------------onMutate-------------------
// onMutate: async newHeroData => {
//   // console.log('onMutate received props', newHeroData);
//   const previousheroData = queryClient.getQueryData('super-heroes');
//   // const previousheroData = await queryClient.ensureQueryData({
//   //if cache data is there it will return that data else it will fetch data from server
//   //   queryKey: ['super-heroes'],
//   //   queryFn: fetcherUrl,
//   // });
//   console.log('previousheroData', previousheroData?.data);
//   return newHeroData;
// },
//on-mutate --- to remodify data before modiyfing data in cache

// onMutate: async newHeroData => {
//   console.log('onMutate received props', newHeroData);
//   await queryClient.cancelQueries('super-heroes'); //stop fetching data from server
//   // const previousheroData = queryClient.getQueryData('super-heroes');
//   queryClient.setQueryData('super-heroes', oldQueryData => {
//     console.log(
//       'oldQueryData on mutate get run to update data', //it get run when we call mutate function
//       oldQueryData,
//     );
//     return {
//       ...oldQueryData,
//       data: [
//         ...oldQueryData?.data,
//         {
//           id: oldQueryData?.data?.length + 1,
//           ...newHeroData,
//         },
//       ],
//     };
//   });
// },

const fetcherUrl = () => {
  return axios.get('http://10.206.14.21:3000/superheroes');
  // .then(res => {
  //   console.log('data feched successfully :::', res?.data); //we can pass data as res?.data
  // })
  // .catch(error => {
  //   console.log('failed to fetch data :::', error?.message || '');
  // });

  // return axios.get('http://192.168.0.132:3000/superheroes');
  // return axios.get('https://jsonplaceholder.typicode.com/todos/1');
};

const fetchData = async () => {
  // 'http://192.168.0.132:3000/superheroes'
  // await axios
  //   .get('http://192.168.0.132:3000/superheroes')
  //   .then(res => {
  //     console.log('data feched successfully :::', res?.data);
  //   })
  //   .catch(error => {
  //     console.log('failed to fetch data :::', error?.message || '');
  //   });
  // await axios
  //   .get('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(res => {
  //     console.log('data feched successfully :::', res?.data);
  //   })
  //   .catch(error => {
  //     console.log('failed to fetch data :::', error?.message || '');
  //   });
};

// React.useEffect(() => {
//   console.log('SimpleReactQuery');
//   fetchData();
// }, []);

// return useMutation({
//   mutationFn: addSuperHero,
//   onMutate: async newHero => {
//     await queryClient.cancelQueries('super-heroes');
//     const previousHeroes = queryClient.getQueryData('super-heroes');
//     queryClient.setQueryData('super-heroes', old => [...old, newHero]);
//     return {previousHeroes};
//   },
// });

//------------mutations-----------------

// const {
//   mutate,
//   isError: isUploadFailed,
//   isLoading: isUploading,
//   isSuccess,
// } = useAddSuperHeroData();

// const useAddSuperHeroData = () => {
//   return useMutation({
//     // mutationFn: addSuperHero,
//     mutationFn: newHero => {
//       axios.post('http://localhost:4000/superheroes', newHero);
//     },
//     onMutate: async newHero => {
//       await queryClient.cancelQueries('super-heroes');
//       const previousheroData = queryClient.setQueryData(
//         'super-heroes',
//         oldQueryData => {
//           return {
//             ...oldQueryData,
//             data: [
//               ...oldQueryData?.data,
//               {
//                 id: oldQueryData?.data?.length + 1,
//                 ...newHero,
//               },
//             ],
//           };
//         },
//       );
//       return {previousheroData};
//     },
//     onError: (_err, _newHeroData, context) => {
//       queryClient.setQueryData('super-heroes', context?.previousheroData);
//     },
//     onSettled: () => {
//       queryClient.invalidateQueries('super-heroes');
//       // Error or success... doesn't matter!
//     },
//   });
// };

const addSuperHero = hero => {
  // console.log('addSuperHero to send request ', hero);
  // return request({url: '/superheroes', method: 'post', data: hero});
  return axios.post('http://10.206.14.21:3000/superheroes', hero);
};
