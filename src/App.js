import SignPage from "./pages/SignPage";
import SelectRegion from "./components/MyPage/SelectRegion/SelectRegion";
import { Link } from "react-router-dom";

import Navigation from "./components/Navigation"

function App() {
	return (
		<>
		<Navigation />
			 <Link to="/town">TownPage</Link>
			<Link to="/login">Login</Link>
			<Link to="/mypage/sellbuyrecord">SellBuyRecord</Link>
			<Link to="/mypage/region">SelectRegion</Link>
			<Link to="/faq">FAQpage</Link>
           
		</>
	);
}

export default App;
