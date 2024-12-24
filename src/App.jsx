import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginProvider } from './contexts/LoginContext';
import Header from './layout/Header';
import Footer from './layout/Footer';

function App() {
  //{/*⭐️ URL에 따라 변경되는 부분 ⭐️ */}
  return (
    <div className="d-flex flex-column vh-100 justify-content-between">
      <LoginProvider>
        <Header />
        <Outlet />
        {/*⭐️ URL에 따라 변경되는 부분 ⭐️ */}
        <Footer></Footer>
      </LoginProvider>
    </div>
  );
}

export default App;
