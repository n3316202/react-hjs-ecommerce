import Header from '../../../layout/Header';
import Footer from '../../../layout/Footer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import authService from '../../auth/services/AuthService';
import { LoginContext } from '../../../contexts/LoginContext';
import MainPage from '../components/Main';

const IndexPage = () => {
  //LoginContext를 import하고 actions를 셋팅한다음에 값을 변경
  const { actions } = LoginContext;
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
        localStorage.setItem('accessToken', response.data.token.access);
        localStorage.setItem('refreshToken', response.data.token.refresh);
        localStorage.setItem('userName', response.data.user.username);

        setIsLoggedIn(true);
        console.log('유저이름' + response.data.user.username);
        setUsername(response.data.user.username);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="d-flex flex-column vh-100 justify-content-between">
      <Header />
      <MainPage></MainPage>
      <Footer />
    </div>
  );
};

export default IndexPage;
