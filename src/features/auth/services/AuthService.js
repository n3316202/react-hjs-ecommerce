import http from '@/api/HttpCommon.js';

//dev_02
/** LOGIN API */
const login = async (user) => {
  return await http.post('/auth/jwt/create/', user);
};

/** Get Tocken */
//const getToken = async (user) => {
//  return await http.post(request.getToken, user);
//};

export default {
  login,
  //getToken,
};
