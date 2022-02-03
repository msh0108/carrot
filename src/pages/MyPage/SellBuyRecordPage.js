import React, { useState } from "react";
import styled, { css } from "styled-components";

import ProductGrid from "../../components/MyPage/ProductGrid";
import SectionLabel from "../../components/MyPage/SellBuyRecord/SectionLabel";
import { animals, beauty } from "../../Tests";

function SellBuyRecord() {
	const sellRecordData = animals.all;
	const buyRecordData = beauty.makeup;

	const [viewSell, setViewSell] = useState(true);
	const [data, setData] = useState(sellRecordData);
	const changeData = () => {
		viewSell ? setData(buyRecordData) : setData(sellRecordData);
	};

	return (
		<StyledSellBuyRecord>
			<SectionLabel
				viewSell={viewSell}
				setViewSell={setViewSell}
				changeData={changeData}
			/>
			<ProductGrid productData={data} />
		</StyledSellBuyRecord>
	);
}

export default SellBuyRecord;

const StyledSellBuyRecord = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem 10rem;
`;