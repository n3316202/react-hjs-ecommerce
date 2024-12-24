import { Link } from 'react-router-dom';
import '../styles/store/styles.css';
import { useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext';

const Header = () => {
  // dev_02
  const { state, actions } = useContext(LoginContext);
  const { isLoggedIn, username } = state;
  const { setIsLoggedIn, setUsername } = actions;

  const handleLoginAndOut = (event) => {
    event.preventDefault();
    if (isLoggedIn) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');

      setIsLoggedIn(false);
      setUsername(null);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#">
          Ecommerce
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            {/* dev_02 */}
            <li className="nav-item">
              <Link className="nav-link" to="/login" onClick={isLoggedIn ? handleLoginAndOut : null}>
                {isLoggedIn ? `로그아웃(${username})` : `로그인`}
              </Link>
            </li>
            <li>
              <a className="nav-link" href="#">
                회원가입
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    All Products
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Programming-Books
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Marketing-Books
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <a href="#" className="btn btn-outline-dark">
              <i className="bi-cart-fill me-1" />
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill" id="cart_quantity">
                1
              </span>
            </a>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
