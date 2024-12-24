import './css/styles.css';
//폼을 다루는 5가지 방법
//https://rudaks.tistory.com/entry/react-form%EC%9D%84-%EB%8B%A4%EB%A3%A8%EB%8A%94-5%EA%B0%80%EC%A7%80-%EB%B0%A9%EB%B2%95
//dev_02
export const Login = ({ handleInputChange, onLoginClick }) => {
  return (
    <div className="d-flex flex-column vh-100 justify-content-between">
      <div className="wrapper">
        <div className="logo">
          <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt />
        </div>
        <div className="text-center mt-4 name">Login</div>
        <form className="p-3 mt-3">
          <input type="hidden" name="next" defaultValue="#" />
          {/* 로그인 성공후 이동되는 URL */}
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user" />
            <input type="text" name="username" id="username" onChange={handleInputChange} placeholder="아이디" />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key" />
            <input type="password" name="password" id="password" onChange={handleInputChange} placeholder="패스워드" />
          </div>
          <button className="btn mt-3" onClick={onLoginClick}>
            Login
          </button>
        </form>
        <div className="text-center fs-6">
          <a href="#">Forget password?</a>
          or
          <a href="#">Sign up</a>
        </div>
      </div>
    </div>
  );
};
