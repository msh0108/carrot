import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Link to="/town">TownPage</Link>
      <Link to="/login">Login</Link>
      <Link to="/mypage/sellbuyrecord">SellBuyRecord</Link>
      <Link to="/mypage/region">SelectRegion</Link>
      <Link to="/sign">Sign</Link>
    </>
  );
}

export default App;
