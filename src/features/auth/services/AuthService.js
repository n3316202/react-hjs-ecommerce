import http from '@/api/HttpCommon.js';

//dev_02
/** LOGIN API */
const login = async (user) => {
  return await http.post('/auth/jwt/create/', user);
};

/** Get Tocken */
const getUser = async () => {
  return await http.get('/auth/users/me/');
};

export default {
  login,
  getUser,
};
