import styled from "styled-components";

function TownStoreCard({ store }) {
	return (
		<StyledTownStoreCard>
			<CardImage src={store.img} />
			<CardContent>
				<p className="storeName">{store.name}</p>
				<p className="storeDescription">{store.description}</p>
				<p className="storeAddress">{store.address}</p>
			</CardContent>
			<hr />
		</StyledTownStoreCard>
	);
}

export default TownStoreCard;

const StyledTownStoreCard = styled.button`
	display: grid;
	grid-template-columns: 1fr 20fr;
	border: none;
	width: 100%;
	background-color: white;
	padding-bottom: 1rem;

	hr {
		border: 0;
		border-top: 1px solid rgb(192, 189, 189);
		width: 100%;
		grid-column: span 2;
	}
`;

const CardImage = styled.img`
	width: 8rem;
	height: 8rem;
	margin-right: 1rem;
	border-radius: 1rem;
`;

const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	height: 100%;

	.storeName {
		font-weight: bolder;
		font-size: 1.5rem;
		margin: 0.5rem 0;
	}

	.storeDescription {
		font-size: 1rem;
		margin: 0;
		flex-grow: 1;
	}

	.storeAddress {
		font-size: 0.8rem;
		color: grey;
	}
`;
