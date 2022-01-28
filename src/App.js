import Login from "./Components/Login/Login";
import SignPage from "./Components/Login/SignPage";
import FAQ from "./Components/FAQ/FAQ";
import GlobalStyles from "./Components/GlobalStyles";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

// import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      {/* <BrowserRouter>
      <FAQ />
      </BrowserRouter> */}

      <BrowserRouter>
        <Link to="/Login">로그인</Link>
        <br />
        <Link to="/FAQ">자주묻는질문</Link>
        <br />
        <Link to="/SignPage">회원가입</Link>
        <br />
        <Routes>
          <Route path="Login" element={<Login />} />
          <Route path="FAQ/*" element={<FAQ />} />
          <Route path="SignPage" element={<SignPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
