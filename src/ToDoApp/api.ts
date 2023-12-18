import axios from 'axios';
import {QueryClient, useMutation, useQuery} from '@tanstack/react-query';

// const addToDoPost = props :addToDoWithId=> {

// };

// export const useToDoQuery = () => {
//   return useQuery({
//     queryKey: ['todos'],
//     queryFn: () => {
//       return axios.get('http://192.168.0.132:3000/todo');
//     },
//   });
// };

type TAddToDoMutatin = {
  name: string;
  description: string;
};
// export const useAddToDo = (queryClient: QueryClient) => {
//   return useMutation({
//     mutationFn: {name, description},
//   });
// };

// export const addToDoWithMutationFn = async ({
//   id,
//   name,
//   description,
// }: AddToDoWithIdInput) => {
//   const mutation = useMutation({
//     return axios.post('https://jsonplaceholder.typicode.com/todos', {id,name,description}),
//   });
// };
