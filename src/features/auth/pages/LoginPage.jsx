import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import authService from '../services/AuthService';
import { LoginContext } from '../../../contexts/LoginContext';

import { Login } from '../components/Login';

const LoginPage = () => {
  //LoginContext를 import하고 actions를 셋팅한다음에 값을 변경
  const { actions } = useContext(LoginContext);
  const { setIsLoggedIn, setUsername } = actions;

  const [user, setUser] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);

    //중첩 구조 분해 (nested destructuring)
    setUser({ ...user, [name]: value });
  };

  const onLoginClick = (e) => {
    e.preventDefault();
    authService
      .login(user)
      .then((response) => {
        console.log(response);
        localStorage.clear();
        localStorage.setItem('accessToken', response.data.access);
        localStorage.setItem('refreshToken', response.data.refresh);
        //localStorage.setItem('userName', response.data.user.username);
        authService.getUser()
          .then((response) => {
            console.log(response);
            setUsername(response.data);

            setIsLoggedIn(true);
            setUsername(response.data.username);
          })
          .catch((error) => {
            console.log(error);
          });

        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <Login handleInputChange={handleInputChange} onLoginClick={onLoginClick}></Login>;
};

export default LoginPage;
