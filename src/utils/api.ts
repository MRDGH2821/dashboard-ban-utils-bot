import axios, { AxiosRequestConfig } from 'axios';
import { user } from './types';

const CONFIG: AxiosRequestConfig = { withCredentials: true };

export const getAuthStatus = () =>
  axios.get<user>('http://localhost:3001/api/auth/status', CONFIG);
