import SignPage from "./pages/SignPage";
import SelectRegion from "./components/MyPage/SelectRegion/SelectRegion";
import { Link } from "react-router-dom";
import TownStoreMainPage from "./pages/TownStoreMainPage";

function App() {
  return (
    <>
      <Link to="/town">TownStoreMainPage</Link>
      <Link to="/login">Login</Link>
      <Link to="/mypage/sellbuyrecord">SellBuyRecord</Link>
      <Link to="/mypage/region">SelectRegion</Link>
    </>
  );
}

export default App;
