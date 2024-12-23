import { Outlet } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex flex-column vh-100 justify-content-between">
      <Header />
      <Outlet />
      {/*⭐️ URL에 따라 변경되는 부분 ⭐️ */}
      <Footer />
    </div>
  );
}

export default App;
