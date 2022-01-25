import styled from "styled-components";

function SectionTitle({ children }) {
	return (
		<StyledSectionTitle>
			<LineDivider />
			<SectionLabel>{children}</SectionLabel>
			<LineDivider />
		</StyledSectionTitle>
	);
}

export default SectionTitle;

const StyledSectionTitle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1rem 0;
`;

const LineDivider = styled.hr`
	width: 100%;
	border: 0;
	border-top: 1px solid rgb(204, 204, 204);
`;

const SectionLabel = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 2.2rem;
	width: 8rem;
	margin: 0 1rem;
	font-size: 1rem;
	font-weight: bolder;
`;
