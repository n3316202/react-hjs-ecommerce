import axios from 'axios';

//dev_02
const http = axios.create({
  baseURL: import.meta.env.VITE_REQUEST_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export default http;
