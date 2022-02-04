import { useState } from "react";
import styled, { css } from "styled-components";
import { BsXCircle, BsPlusLg } from "react-icons/bs";

import SectionTitle from "../SectionTitle";

function SelectRegion() {
	const [isSelected, setIsSelected] = useState(false);
	const [regionName, setRegionName] = useState("망원동");
	const select_btn = () => setIsSelected(!isSelected);

	return (
		<StyledSelectRegion>
			<SectionTitle>내 동네 설정 및 변경</SectionTitle>
			{isSelected ? (
				<RegionSelectedBox>
					<RegionText>{regionName}</RegionText>
					<IconButton onClick={select_btn}>
						<BsXCircle />
					</IconButton>
				</RegionSelectedBox>
			) : (
				<RegionNotSelectedBox>
					<IconButton onClick={select_btn}>
						<BsPlusLg />
					</IconButton>
				</RegionNotSelectedBox>
			)}
		</StyledSelectRegion>
	);
}

export default SelectRegion;

const StyledSelectRegion = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem 10rem;
	align-items: center;
`;

const RegionText = styled.div`
	color: inherit;
	font-size: 1.2rem;
	text-align: left;
	align-self: center;
	flex-grow: 1;
	width: 100%;
`;

const RegionSelectedBox = styled.div`
	display: flex;
	background-color: rgb(255, 119, 43);
	border-radius: 5rem;
	width: 100%;
	height: 3rem;
	color: white;
	justify-items: center;
	padding: 0 1.2rem;
	border: 1px solid transparent;
	box-sizing: border-box;
`;

const RegionNotSelectedBox = styled.div`
	display: flex;
	border: 1px solid rgb(196, 196, 196);
	border-radius: 5rem;
	width: 100%;
	height: 3rem;
	color: rgb(107, 107, 107);
	padding: 0 1.2rem;
	justify-content: center;
	box-sizing: border-box;
`;

const IconButton = styled.button`
	display: flex;
	width: 20%;
	border: none;
	color: inherit;
	align-items: center;
	background: none;
	cursor: pointer;
	justify-content: center;
`;
