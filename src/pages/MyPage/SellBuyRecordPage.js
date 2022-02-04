import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

import ProductGrid from "../../components/MyPage/ProductGrid";
import SectionLabel from "../../components/MyPage/SellBuyRecord/SectionLabel";
import { keywords } from "../../Tests"

function SellBuyRecord() {
<<<<<<< HEAD
    const sellRecordData = keywords.animals.all;
    const buyRecordData = keywords.beauty.makeup;
	//사용할 때
=======
	const sellRecordData = keywords.animals.강아지;
	const buyRecordData = keywords.beauty.makeup;
>>>>>>> 8238e94b5ced55eaeb70a4642ae67fcf7c29b6a8

    const [viewSell, setViewSell] = useState(true);
    const [data, setData] = useState(sellRecordData);
    const changeData = () => {
        viewSell ? setData(buyRecordData) : setData(sellRecordData); //정보 불러오는 것
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