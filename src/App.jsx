import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //{/*⭐️ URL에 따라 변경되는 부분 ⭐️ */}
  return <Outlet />;
}

export default App;
