// 외부
import styled from "styled-components";

// 내부
<<<<<<< HEAD
import FAQContentBox from "../components/FAQ/FAQContentBox";
import HelpBox from "../components/FAQ/HelpBox";
=======
import FAQContentBox from "../../components/FAQ/FAQContentBox";
import HelpBox from "../../components/FAQ/HelpBox";
>>>>>>> 8bb7707323e51837dbf71f61a122cd42da079ef6

function FAQPage() {
	return (
		<div>
			<QnAWrapping>
				<FAQContentBox />
				<HelpBox />
			</QnAWrapping>
		</div>
	);
}

export default FAQPage;

const QnAWrapping = styled.div`
	margin: 0 auto;
	width: 80%;
	.title {
		padding: 15px 30px;
		text-align: left;
		font-weight: bold;
		font-size: 3.5vh;
	}
`;
