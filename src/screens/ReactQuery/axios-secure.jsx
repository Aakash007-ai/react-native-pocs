import axios from 'axios';
import baseURL from './baseURL';

const defaultOptions = {
  baseURL: baseURL,
};

let instance = axios.create(defaultOptions);

instance.interceptors;
export default instance;
