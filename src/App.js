// import SignPage from "./SignPage";
// import SelectRegion from "./components/MyPage/SelectRegion/SelectRegion";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Link to="/town">TownPage</Link>
      <Link to="/login">Login</Link>
      <Link to="/mypage/sellbuyrecord">SellBuyRecord</Link>
      <Link to="/mypage/region">SelectRegion</Link>
    </>
  );
}

export default App;
