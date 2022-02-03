import SignPage from "./pages/SignPage";
import SelectRegion from "./components/MyPage/SelectRegion/SelectRegion";
import { Link } from "react-router-dom";

function App() {
	return (
		<>
			<Link to="town">TownPage</Link>
			<Link to="login">Login</Link>
		</>
	);
}

export default App;
