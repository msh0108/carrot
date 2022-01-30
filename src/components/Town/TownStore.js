import styled from "styled-components";

import TownStoreCard from "./TownStoreCard";

function TownStore() {
	return (
		<TownStoreContainer>
			<h1>우리동네 가게 소식</h1>
			{test.map((store, index) => (
				<TownStoreCard store={store} />
			))}
		</TownStoreContainer>
	);
}

export default TownStore;

const TownStoreContainer = styled.div`
	padding: 4rem 10rem;
	h1 {
		font-size: 2.5rem;
	}
`;

const test = [
	{
		name: "이빠네마그릴(Ipanerma Grill)",
		img: "https://dnvefa72aowie.cloudfront.net/origin/smb/202003/9AB9A706CBBD10EACFBEDE5ABCD1AB58B2468E5445F72C3CF39BA230FA225E9B.jpg?q=82&s=300x300&t=crop",
		description:
			"홍대 앞<이빠네 그릴> 가격은 좀 쎄지만 맛도 그럭저럭 괜찮고 갓 구운 곳이다",
		region: "신포동",
		address: "인천광역시 중구 제물량로166번길 7 (신생동)",
	},
	{
		name: "이빠네마그릴(Ipanerma Grill)",
		img: "https://dnvefa72aowie.cloudfront.net/origin/smb/202003/9AB9A706CBBD10EACFBEDE5ABCD1AB58B2468E5445F72C3CF39BA230FA225E9B.jpg?q=82&s=300x300&t=crop",
		description:
			"홍대 앞<이빠네 그릴> 가격은 좀 쎄지만 맛도 그럭저럭 괜찮고 갓 구운 곳이다",
		region: "신포동",
		address: "인천광역시 중구 제물량로166번길 7 (신생동)",
	},
	{
		name: "이빠네마그릴(Ipanerma Grill)",
		img: "https://dnvefa72aowie.cloudfront.net/origin/smb/202003/9AB9A706CBBD10EACFBEDE5ABCD1AB58B2468E5445F72C3CF39BA230FA225E9B.jpg?q=82&s=300x300&t=crop",
		description:
			"홍대 앞<이빠네 그릴> 가격은 좀 쎄지만 맛도 그럭저럭 괜찮고 갓 구운 곳이다",
		region: "신포동",
		address: "인천광역시 중구 제물량로166번길 7 (신생동)",
	},
	{
		name: "이빠네마그릴(Ipanerma Grill)",
		img: "https://dnvefa72aowie.cloudfront.net/origin/smb/202003/9AB9A706CBBD10EACFBEDE5ABCD1AB58B2468E5445F72C3CF39BA230FA225E9B.jpg?q=82&s=300x300&t=crop",
		description:
			"홍대 앞<이빠네 그릴> 가격은 좀 쎄지만 맛도 그럭저럭 괜찮고 갓 구운 곳이다",
		region: "신포동",
		address: "인천광역시 중구 제물량로166번길 7 (신생동)",
	},
	{
		name: "이빠네마그릴(Ipanerma Grill)",
		img: "https://dnvefa72aowie.cloudfront.net/origin/smb/202003/9AB9A706CBBD10EACFBEDE5ABCD1AB58B2468E5445F72C3CF39BA230FA225E9B.jpg?q=82&s=300x300&t=crop",
		description:
			"홍대 앞<이빠네 그릴> 가격은 좀 쎄지만 맛도 그럭저럭 괜찮고 갓 구운 곳이다",
		region: "신포동",
		address: "인천광역시 중구 제물량로166번길 7 (신생동)",
	},
	{
		name: "이빠네마그릴(Ipanerma Grill)",
		img: "https://dnvefa72aowie.cloudfront.net/origin/smb/202003/9AB9A706CBBD10EACFBEDE5ABCD1AB58B2468E5445F72C3CF39BA230FA225E9B.jpg?q=82&s=300x300&t=crop",
		description:
			"홍대 앞<이빠네 그릴> 가격은 좀 쎄지만 맛도 그럭저럭 괜찮고 갓 구운 곳이다",
		region: "신포동",
		address: "인천광역시 중구 제물량로166번길 7 (신생동)",
	},
	{
		name: "이빠네마그릴(Ipanerma Grill)",
		img: "https://dnvefa72aowie.cloudfront.net/origin/smb/202003/9AB9A706CBBD10EACFBEDE5ABCD1AB58B2468E5445F72C3CF39BA230FA225E9B.jpg?q=82&s=300x300&t=crop",
		description:
			"홍대 앞<이빠네 그릴> 가격은 좀 쎄지만 맛도 그럭저럭 괜찮고 갓 구운 곳이다",
		region: "신포동",
		address: "인천광역시 중구 제물량로166번길 7 (신생동)",
	},
	{
		name: "이빠네마그릴(Ipanerma Grill)",
		img: "https://dnvefa72aowie.cloudfront.net/origin/smb/202003/9AB9A706CBBD10EACFBEDE5ABCD1AB58B2468E5445F72C3CF39BA230FA225E9B.jpg?q=82&s=300x300&t=crop",
		description:
			"홍대 앞<이빠네 그릴> 가격은 좀 쎄지만 맛도 그럭저럭 괜찮고 갓 구운 곳이다",
		region: "신포동",
		address: "인천광역시 중구 제물량로166번길 7 (신생동)",
	},
];
