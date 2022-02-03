import React, { useState } from "react";
import styled, { css } from "styled-components";

import ProductGrid from "../../components/MyPage/ProductGrid";
import SectionLabel from "../../components/MyPage/SellBuyRecord/SectionLabel";

function SellBuyRecord() {
	const sellRecordData = test;
	const buyRecordData = test;

	const [viewSell, setViewSell] = useState(true);
	const [data, setData] = useState(test);
	const changeData = () => {
		viewSell ? setData(sellRecordData) : setData(buyRecordData);
	};

	return (
		<StyledSellBuyRecord>
			<SectionLabel viewSell={viewSell} setViewSell={setViewSell} changeData={changeData}/>
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

const test = [
	{
		href: "/articles/341208845",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/4f8ff1bebbadc7f0d0fd9365c32439e50eea214307a9494dc4ce30098c47a702.webp?q=82&s=300x300&t=crop",
		title: "[식물] 반려식물 공기정화식물 글로리아페페",
		content:
			"물방울페페 라고도 불리는 귀여운 글로리아페페입니다~\n순둥순둥하게 잘 크는 식물이라 물 충분히 주고 빛 좋은 곳에서 키우시면 금방 잎도 훨씬 많이 내고 예쁘게 클 거에요~\n사진처럼 토분에 심겨진 상태 그대로 드립니다~",
		region: "서울 은평구 갈현제2동",
		cost: "7,000원",
	},
	{
		href: "/articles/345725375",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/BB49B1BF9DAAD12A88410D1EC3025E4A3274CC30695F3225751D67D8CE2F65F3.jpg?q=82&s=300x300&t=crop",
		title: "2M 대형 극락조?여인초? 2미터 아무튼 대형식물! 카페인테리어 플랜테리어 식물 화분",
		content:
			"극락조인지 여인초인지 식물에 관심없어서 잘 모릅니당ㅜㅜ\n\n다만 30만원넘게 주고 구매하였고\n열심히 잘 키워온 아이랍니다 \n\n5만원에 올렸다가 뒈질뻔했습니다 \n\n풍성하니 이쁘긴하네요\n\n주말동안 거래가능합니다\n\n카페인테리어소품가구 \n판매글에 더 있으니 확인해주세요❤️",
		region: "대전 서구 갈마동",
		cost: "100,000원",
	},
	{
		href: "/articles/345701369",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/BF67ECC1737E7BFA288B3AF03C04391333B673A5969F64D4123FD3880B849DED.jpg?q=82&s=300x300&t=crop",
		title: "희귀 다육식물 (아프리카식물)",
		content:
			"자리비움 합니다! \n각각 2만5천원 입니다!\n(이쁜 꽃도 보실수 있어요)\n\n일괄로 사시면 5천원 할인해드려서 7만원에 드릴게요 ! 연락주세요! \n메세지 주시면 이름 정보 다 알려드립니다 \n키우시는 법도 자세하게 알려드립니다!",
		region: "서울 용산구 후암동",
		cost: "25,000원",
	},
	{
		href: "/articles/345696285",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/162931272ae6eaa590eb2635978627e7aeff20edd63ef795f540454a2ff35f9c.webp?q=82&s=300x300&t=crop",
		title: "식물공기정화식물",
		content: "공기정화에좋은식물",
		region: "충남 천안시 동남구 신부동",
		cost: "30,000원",
	},
	{
		href: "/articles/344685149",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/A00D185E9D524A3DE003727DF9F1AFD0B850684BD598604209199A2BDD24D070.jpg?q=82&s=300x300&t=crop",
		title: "LED 식물등 3구 식물 성장 등 조명",
		content: "실사용 거의 없습니다 \n환불 X",
		region: "경기도 남양주시 별내동",
		cost: "20,000원",
	},
	{
		href: "/articles/327216530",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202112/5981252e660215875ddb515bd1abcd1761bebed4c928e6bc2129a32b690a2f1f.webp?q=82&s=300x300&t=crop",
		title: "[새제품]빈화분,소형화분,다육이화분,다육식물,중형화분,다육이,화초,화분,식물",
		content:
			'화사하고 예쁜  도자기화분,\n미사용 제품입니다\n높이;  10.5cm,  넓이;  12,5cm X 9cm\n🐞개당 가격입니다\n🐞선입금  시ㅡ\n      제 상품중에 있는 식물이랑 같이하시면 \n      심어 드려요(비율ㅡ상토5;마사토5)\n      (화분에 심고 나서 불발이  되면  화분이  중고가 \n         되어서  선입금으로 합니다)\n🐞에눌,환불, 찔러보기 ㅡ X\n🐾거래장소는 \n     "관악농협 문성지점" 앞에서 \n      하고 있습니다',
		region: "서울 관악구 미성동",
		cost: "10,000원",
	},
	{
		href: "/articles/324217025",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202112/0EE16055225F7DFB87DB4DE6DB476C226D9ED547EC1D2CE734B13F10F5F51679.jpg?q=82&s=300x300&t=crop",
		title: "식물저승사자 (왜 우리집에만 오면 식물이 죽을까?)",
		content: "초보식물집사님들께 추천합니다",
		region: "경기도 안산시 단원구 초지동",
		cost: "4,500원",
	},
	{
		href: "/articles/345640602",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/1a1c881c5a6e78660cdbfb6e0c27bca2fc58c266c437c5a47e83ee61c4a82a28.webp?q=82&s=300x300&t=crop",
		title: "식물,화분,행잉식물,디시디아 그린",
		content:
			"늘어지는게 멋스러운 \n디시디아 그린입니다.\n수태에 감싸 플분에\n식재되어 가볍고 깔끔해요.\n수태가 바짝 말랐을때 저면관수나 욕실 샤워기로 흠뻑 주세요.\n\n식물 특성상 교환,환불은 불가합니다.\n신중히 생각하시고 구매해 주세요.",
		region: "경기도 화성시 동탄2동",
		cost: "13,000원",
	},
	{
		href: "/articles/345585502",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/45a1c6c6b6bc3f84ce3cf317d3cf92173ce1d5025cb931bbd0223a063c4e0f39.webp?q=82&s=300x300&t=crop",
		title: "식물3종.란타나.장미허브.카랑코에.화분.화초.식물",
		content: "란타나\n장미허브\n카랑코에\n10호연질분입니다.",
		region: "경기도 용인시 수지구 죽전동",
		cost: "5,000원",
	},
	{
		href: "/articles/299656606",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202111/7175878374379d45181ad89f7d33f3e2f91d8814fe87343da37b873c72a2427f.webp?q=82&s=300x300&t=crop",
		title: "화초.식물.화분.다육식물.모닝듀",
		content:
			"거래지 신현동\n크고 튼실하게 잘 자라 이제 가을빛에 물들기만하면 정말 예쁠거예요.\n제가 올린것중 두개이상 사시면 할인해드릴께요",
		region: "인천 서구 신현원창동",
		cost: "5,000원",
	},
	{
		href: "/articles/332888018",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202112/6E5E3DFAD8542FCEFE914279D9D0373D3DC565F4E41241AEADC7528186EC347D.jpg?q=82&s=300x300&t=crop",
		title: "식물지지대, 식물봉, 코코봉, 욕망봉 (사이즈 대중소)",
		content:
			"대 80 원가:10,000 - 당근가:6,000 x 4개\n중 60 원가:7,800 - 당근가:4,000 x 5개\n소 45 원가:4,800 - 당근가:3,000 x 4개 -> 완료\n\n코코봉입니다. 플라스틱도 있고, 나무도 있어요. \n사용했던 거여서 코코봉 묶인게 단단하진 않아요. 그렇지만 오히려 뿌리 더 잘 내릴 수도 있어요. 사용하시는데에는 문제 없어서 저렴하게 판매합니당 :) \n\n위치 : 중일초등학교 근처",
		region: "경기도 용인시 기흥구 중동",
		cost: "3,000원",
	},
	{
		href: "/articles/330180698",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202112/86794dea1cd2100365229cd455be2e3510370aec8d6c667cc3c2e721008ce4d6.webp?q=82&s=300x300&t=crop",
		title: "☆개운죽 아이비식물☆공기정화식물 수경재배식물",
		content:
			"🌱공기 정화식물🌱\n개운죽 2개 길이 33cm\n아이비식물 1개 길이 22cm\n3개 다해서 10,000원",
		region: "광주 동구 산수동",
		cost: "10,000원",
	},
	{
		href: "/articles/324801708",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202112/025729825ea7b8d7c89a5b5f161427963fed9512f2d297dc3e68e008dae197f2.webp?q=82&s=300x300&t=crop",
		title: "반려식물(콤팩타식물 )실내공기정화 미세먼지 재거 탁월  콤팩타의 꽃말'번영;행운;행복 뜻 귀족같은'식물이라는 뜻",
		content:
			"화분지름17치높이23센치 \n크기 너무나 이쁘고 좋아요\n하나밖에  없는  아끼는  내놓아요  \n큰것  콤팩타높이 15센치\n사이즈  꼬옥 확인해 주세요\n\n콤팩타빤뜩빤득 너무싱싱해요   멋진 콤팩타 \n데려가실분 쳇주세요\n받침대  셋트예요\n꼬~옥  구매하실분만 쳇주세요\n식물이나라서  직거래  필수예요 ^^♡",
		region: "서울 금천구 독산제3동",
		cost: "15,000원",
	},
	{
		href: "/articles/330184539",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202112/55038bba68144a0781008ca097e0237b967d3b87e3fcdc12088553883e2fbac5.webp?q=82&s=300x300&t=crop",
		title: "희귀식물 단풍제라늄 화초화분식물",
		content:
			"잎색이 너무 예쁜\n단풍제라늄 벤쿠버제라늄이예요 \n독특한 향으로 천연\n해충퇴치식물이라\n병충해에도 강해요\n빨갛고 예쁜 꽃도\n핀답니다",
		region: "경기도 의정부시 신곡동",
		cost: "8,000원",
	},
	{
		href: "/articles/313509181",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202111/75a7d852a6a1db11be87824805f3599ca08e39f10455eac22e05bc96eefc9b3f.webp?q=82&s=300x300&t=crop",
		title: "원색 한국식물도감&약용식물도감",
		content:
			"한국에서 자생하는 식물과 약용식물에 대해 칼러 사진과 함께 자세한 설명이 들어있어요~\n2권 가격입니다",
		region: "광주 서구 화정3동",
		cost: "13,000원",
	},
	{
		href: "/articles/343759480",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/E1244D58192E30C06CDB7E77971967002E398C30EA57EE5C209E890E6D54A6C7.jpg?q=82&s=300x300&t=crop",
		title: "[미사용] led 식물등 식물생장등 2구짜리",
		content:
			"불량 아닌지 확인하려고 딱 한번 켜보고 그대로 포장해놨습니다.\nusb 연결해서 작동하고 자바라가 있어서 선반이나 책상에 고정 가능합니다.\n색상 빨,파,보 세종류이고 밝기는 10단계, \n타이머 기능 있어요.\n\n약수역 버티고개역 근처에서 직거래 가능합니다 쪽지 주세요~",
		region: "서울 중구 약수동",
		cost: "15,000원",
	},
	{
		href: "/articles/345497298",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/b7128a695ba64ca6a4e9f27b8759f08501825319d66fb737fe3706f89c97d8a9.webp?q=82&s=300x300&t=crop",
		title: "(식물) 수경식물 뿌리 감상해 보세요.",
		content:
			'공기정화, 미세먼지 제거에 탁월한 부자란 수경재배 했어요.\n뿌리도 특이하고 잎 뒷면은 보라색을 띄고 있어 아주 예뻐요.\n유통명처럼 "부자란" 을 키우면 금전운이 상승되고 부부 금슬이 좋아진다는 설로 신혼 집들이,개업 선물로 인기 있다고 합니다.\n그대로 수경재배 하셔도 되고 흙에 식재하셔도 됩니다.\n특이한 색감의 멋진 뿌리 감상은 덤이랍니다.\n(꽃 이미지 사진 8~9번)\n가끔 물 만 갈아주시면 됩니다.\n*전체높이 30 cm\n*유리병 그대로 드립니다.\n*네고×환불 불가함을 알려드립니다.',
		region: "울산 남구 두왕동",
		cost: "5,000원",
	},
	{
		href: "/articles/345511920",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/ADE802204A9EC4DD2842418FD6D34C81BC64505C1BB6DA55A618FCC10C0C2753.jpg?q=82&s=300x300&t=crop",
		title: "세븐틴 앨범 포카 굿즈 비공식굿즈 부채 포스터 공식물품 비공식물품  급히 처분합니다 승관 원우 포토북도있어요",
		content:
			"내일 이사 가기로 해서 급히 처분합니다 \n⭐️비공식, 공식물품들은 다있는게 아닙니다!⭐️\n앨범은 어쩌나,박수 있습니다\n무료나눔이니 언제든지 연락주세요 ˃̣̣̥᷄⌓˂̣̣̥᷅\n내일 이사가는거라 오늘만 가능합니다 5시 전으로 연락주세요 ˃̣̣̥᷄⌓˂̣̣̥᷅ 🙂\n승관 원우 포토북도 있구요 전시회에서 주는 사진도 승관 원우 있습니다 다드릴테니 가져가주세요 제발.. 😭😭😭",
		region: "충남 천안시 동남구 봉명동",
		cost: "나눔",
	},
	{
		href: "/articles/250979919",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/2c0767fc6c1a165fa92797f97fe7ff6126e226713fb4eb180caf148121a4292c.webp?q=82&s=300x300&t=crop",
		title: "무늬 싱고니움  식물 화분 화초 희귀식물",
		content:
			"이탈리아 유로팟  플분 \n공기 정화 식물.\n쪼꼬미여요.\n겨울철이라 광합성이 잘 안돼서인지 지분이 약하네요.\n할인 반품 교환 안됨. 쿨거래 매너 거래 요망\n 능곡초 맞은 편 버정 직거래",
		region: "경기도 시흥시 능곡동",
		cost: "7,000원",
	},
	{
		href: "/articles/224120723",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/46715dbfc86fd3b409f32b4d95e838edfeb00ef0478927afb33a21f26db16e5a.webp?q=82&s=300x300&t=crop",
		title: "황금죽 화분과 받침 공기정화식물 반려식물 예뻐요",
		content:
			"공기정화식물 황금죽 \n원둘레 입구 너비 25cm *높이 35cm \n황금죽 70cm\n총 높이 110cm\n화분 밑받침까지 드립니다\n새로운 싹이 올라오고 있어요\n가정에서 키우기 좋습니다.\n오랫동안 키운 정이 있는 황금죽입니다.\n\n삼성동 직거래 원합니다\n방해금지 시간은 따로 없습니다.\n채팅방에 문의 문자 주시면  \n확인하는데로 답변 드리겠습니다",
		region: "서울 강남구 삼성동",
		cost: "23,000원",
	},
	{
		href: "/articles/341710267",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/2c6a821b2f4d5ae8809fdacde09e20b10e6c95abbdf8e02f980e1fea0f437a96.webp?q=82&s=300x300&t=crop",
		title: "제라늄 카랑코에 화초 꽃식물 베란다식물 칼랑코에",
		content:
			"카랑코에, 제라늄 2종 가격입니다.\n베란다에 지금 꽃이 만발중입니다.\n화분높이는 23cm입니다. 작지않습니다.\n화분가격만 6천원입니다.\n이쁜 꽃봉오리가 가득합니다.\n오랫동안 꽃을 볼 수 있는 식물입니다.",
		region: "대구 동구 신서동",
		cost: "9,000원",
	},
	{
		href: "/articles/317448766",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/b22b7bf9fdbbfad159706455d71b8062cadfd600534d7e7fe668b2953053be38.webp?q=82&s=300x300&t=crop",
		title: "식물 화분 화초 희귀식물 공기정화식물",
		content:
			"공기정화식물 50가지 중에서 가장 일등공신으로 꼽히는\n아레카 야자 식물로 거실이나 사무실 등의 공기정화에 필수적인 식물입니다. \n증산작용으로 습도 조절도 온몸으로 하는 귀여운 아레카야자. \n초보자가 무지 키우기 쉬운 애완식물로 레어템이네요. \n플분.\n비매너 패스합니다.\n반품 교환 할인 안됨.\n능곡초 맞은편 힐스테이트 버정에서 직거래 쿨거래 매너 거래 요망.",
		region: "경기도 시흥시 능곡동",
		cost: "20,000원",
	},
	{
		href: "/articles/341206878",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/ecb606ff3bcbbac18319e975afc89f94809d3b2f9fafebe74b54eab6fbf17e8c.webp?q=82&s=300x300&t=crop",
		title: "[희귀식물] 분홍분홍한 반려식물 소코라코",
		content:
			"분홍색 잎이 매력적인 희귀식물 소코라코입니다.\n아래쪽에서부터 목질화도 잘 되고 있는 건강한 개체입니다~\n빛을 많이 보면 분홍색이 진한 잎을 내서 너무나도 예쁜 식물이에요~\n아쉽게도 자리를 비워야 해서 중복개체 정리 위해 당근합니다~\n토분 포함 52cm가량 되고, 크기 참고 위해 두루마리 휴지와 비교해놓은 사진도 첨부합니다~\n토분 포함한 가격입니다~",
		region: "서울 은평구 갈현제2동",
		cost: "34,000원",
	},
	{
		href: "/articles/246115083",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202112/26dfd7965593ba5a8bd32ae0b13b2a875244a5f2cabb01b4233a96862f1c268f.webp?q=82&s=300x300&t=crop",
		title: "공작 🦚 🦚 🦚 아디안텀 특대품 식물 화분 화초 희귀식물",
		content:
			"약5년정도 동거중인 공작이.\n일반 아디안텀 보다는 잎이 더 아름답고 풍성해 보여요.\n겨울철 실내 창문을 닫고 사는 이 계절에\n공기정화와 습도 조절에 짱이에요.\n저 까만 점들이 포자로 번식도 하고 포기 나누기로 번식이 가능한 제가 아끼고 애정하는 아디안텀입니다.\n소장용으로 귀하게 키우는 중.\n포자가 수천개 매달려 있네요.\n 쪼매 징그럽지만 다른 화분에다 잎사귀 따서 묻어두면 빼꼼이 새싹들이 납니다.\n초보자가 기르기 쉬운 그리너리한 레어템이네요.\n고사리과라 물만주면 자라요.\n플분 반품 교환 할인 안됨.\n능곡초 맞은편 힐스테이트 버정에서 직거래 쿨거래 매너 거래 요망.",
		region: "경기도 시흥시 능곡동",
		cost: "35,000원",
	},
	{
		href: "/articles/11020993",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/429ae49f88587fea6290297e0da1f0f3a5091fdfce708a98df3ba9c0344c8c01.webp?q=82&s=300x300&t=crop",
		title: "(알보 아님)  산반 무늬 몬스테라 토분 공기정화식물 식물 화분 화초 희귀식물",
		content:
			"당근 타이밍 지나가요.\n토분 \n산반무늬가 골고루 퍼져 있어요.\n무늬 몬스테라  보르시지아나  알록달록 잎이 예쁘죠\n공간의 공기를 바꿔 줄 그리너리한 반려 식물 레어템이네요.\n공기정화며 습도조절에 매우 좋은 보기만 해도 이쁜 무늬 몬스테라.\n새로운 잎이 나올 때마다 설레고 기다려지고 정말 이뻐요.\n알보는 아직까지 천정부지로 비싸니 무늬로 만족하며 즐기기.\n소장용으로 이쁘게  키우기.\n아침에 일어나서 보면 정말 잠시 잠깐 거실을 거쳐서 주방 아일랜드 식탁까지 햇살이 비추는데, 너무 이쁘게 무늬가 나오고 있어요.\n하루 중 이런 순간이 참으로 좋아요.\n겨울에 생화같이 꽃처럼 거실에 두면 이쁩니다.\n초보자가 기르기 쉬운 식물입니다.\n물만 주면 자라요.\n토분.\n비매너는 패스합니다. \n반품 교환 할인 안됨.\n능곡초 맞은편 힐스테이트 버정에서 직거래 쿨거래 매너 거래 요망.",
		region: "경기도 시흥시 능곡동",
		cost: "90,000원",
	},
	{
		href: "/articles/338554442",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/ec206dcdc61cb14bb2e6a5de8526e6fce0a417e6d513945b89c731445bf4fbe5.webp?q=82&s=300x300&t=crop",
		title: "식물~화분~식물",
		content: "잘크고있어요^^\n화분해서키가~70정도돼네요",
		region: "경북 영주시 풍기읍",
		cost: "15,000원",
	},
	{
		href: "/articles/344306185",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/E791CBB7F49C71F513BF5DDF05FF8830ADCA25AFC2CAD2610D79E03BD4C307D2.jpg?q=82&s=300x300&t=crop",
		title: "새상품 식물등 식물 전구 에이온 성장등",
		content:
			"식물등 식물 전구 에이온 성장등\n\n개당 가격입니다. \n\n두개 같이 하시면 49000원 드릴게요. \n\n테스트만 해봤습니다. \n\n주말 마다 힐스테이트 일산 104동 앞 직거래 하면 좋겠습니다. 격주 주말마다 일산에 갑니다. 가능하신 시간 제시해 주세요 ~\n\n다른 상품 함께 구매해주시면(두세트도) 씨유 끼리택배(근처 씨유 편의점으로 배송됩니다. 배송 완료 문자가 오시면 찾아가시면 돼요) 로 무료 배송 해드릴게요 ~ (단 1키로 미만만, 그 이상은 천원 추가해주셔야 해요)🤗",
		region: "경기도 고양시 일산서구 대화동",
		cost: "25,000원",
	},
	{
		href: "/articles/344306638",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/B2894456AB4C12D453341EBCC32866C29F74445F9AD4CB07F88BB6CAA373AB66.jpg?q=82&s=300x300&t=crop",
		title: "새상품 식물등 식물 전구 에이온 성장등",
		content:
			"개당 가격입니다. \n\n흰색 입니다. \n\n두개 같이 하시면 49000원 드릴게요. \n\n테스트만 해봤습니다. \n\n주말 마다 힐스테이트 일산 104동 앞 직거래 하면 좋겠습니다. 격주 주말마다 일산에 갑니다. 가능하신 시간 제시해 주세요 ~\n\n다른 상품 함께 구매해주시면(두세트도) 씨유 끼리택배(근처 씨유 편의점으로 배송됩니다. 배송 완료 문자가 오시면 찾아가시면 돼요) 로 무료 배송 해드릴게요 ~ (단 1키로 미만만, 그 이상은 천원 추가해주셔야 해요)🤗",
		region: "서울 종로구 부암동",
		cost: "25,000원",
	},
	{
		href: "/articles/344414349",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/8bb3b37db1466b3c9952a1c48833c27d18ecd741cd6c3f647e2f145eab63138d.webp?q=82&s=300x300&t=crop",
		title: "싱싱한 아가베  식물입니다.식물정리중입니다",
		content: "동천동",
		region: "광주 서구 동천동",
		cost: "65,000원",
	},
	{
		href: "/articles/344418509",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/04c33857eab6cbf2a1c239bd1cf6a42e3aa0a55acb5f0d4639c45888709912e5.webp?q=82&s=300x300&t=crop",
		title: "수경재배식물 개운죽입니다.식물정리중입니다",
		content: "동천동",
		region: "광주 서구 동천동",
		cost: "20,000원",
	},
	{
		href: "/articles/335115234",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/635a520e721b34c5199f42efe0563cbf960d319fca7bbef026722bc21f7adaed.webp?q=82&s=300x300&t=crop",
		title: "방울복랑,다육이,화초,화분,다육식물,식물",
		content:
			"동형 다육ㅡ방울복랑\n포도알이 송알송알 달린  방울이입니다\n🐞제 상품 총 금액이 5천원이상  거래 할게요 ^^~\n🐞 선입금  시ㅡ\n      제 상품중에 있는 화분이랑 같이하시면 \n      심어 드려요(비율ㅡ상토5;마사토5)\n🐞에눌, 환불,  찔러보기ㅡ X\n🐾거래장소는\n     관악농협 문성지점앞에서 \n     하고 있습니다",
		region: "서울 관악구 미성동",
		cost: "3,000원",
	},
	{
		href: "/articles/345400482",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/81983158e7140f1214d8659673832a02421aaa5f6f5093b80a8323018325ac88.webp?q=82&s=300x300&t=crop",
		title: "최강감성식물아스파라거스나누스식물화분",
		content:
			"감성식물\n포트로 키우다 \n식물정리\n화분정리겸 식재\n건강도 안좋아 식물 화분 계속 줄이는 중입니다\n배수잘대게 마사토깔고 흙 3가지 섞어 식재\n구매하실분만 연락 하세여\n비매너 거절",
		region: "서울 강북구 수유동",
		cost: "15,000원",
	},
	{
		href: "/articles/345342857",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/D1B8F9DC46705BA0BDC0F292DFEC4328180B6187796A39AC3717ECB83CC9CBA7.jpg?q=82&s=300x300&t=crop",
		title: "🍀[도서-새책] 플랜테리어 관련 (식물집사 필독서) 식물을 들이다",
		content:
			"[새책-정가 16,800원 / 판매가 9,000원 ]            안녕하세요. 저는 식물덕후 보니타입니다. 플랜테리어 관련 새책입니다. ^^ 식물을 아끼고 좋아하시는 분들 구매바랍니다!",
		region: "세종시  어진동",
		cost: "9,000원",
	},
	{
		href: "/articles/345338628",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/09EB5B3D3C8D29BDA64CA9BF960E24FCC2E3765388D9F944050FE982B11FDB55.jpg?q=82&s=300x300&t=crop",
		title: "🍀[도서-새책] 플랜테리어 관련 (식물집사 필독서){나도 초록식물 잘 키우면 소원이 없겠네",
		content:
			"[새책-정가 15,800원/ 판매가 8,000원 ]            안녕하세요. 저는 식물덕후 보니타입니다. 플랜테리어 관련 새책입니다. ^^ 식물을 아끼고 좋아하시는 분들 구매바랍니다!",
		region: "세종시  어진동",
		cost: "8,000원",
	},
	{
		href: "/articles/345329364",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/9A649F14F94D4795DB61DDF8F25DDEDF95E7EE45F0D6DB18376505A31FE490AE.jpg?q=82&s=300x300&t=crop",
		title: "공기정화식물 인테리어 식물",
		content:
			"물자주안줘도 잘커요\n\n인테리어로 좋구 높이는 대충 성인 무릎정도 옵니다\n\n충무공동입니다",
		region: "경남 진주시 충무공동",
		cost: "25,000원",
	},
	{
		href: "/articles/345306213",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/91122fc5ebc7b45709d4b838c6b32bb033db3f6260665c0e2d2417d54de1aa6f.webp?q=82&s=300x300&t=crop",
		title: "식물 키우기쉬운 실내식물 3종+서비스1종(홍콩야자, 콩란, 룬데리파티타임, 삼색달개비)",
		content:
			"사진에 있는 3가지 식물은 뿌리내린 애들인데\n조금 더 물꽂이한 다음에 식재해주셔도 될 것 같아요:)\n\n1. 홍콩야자\n홍콩야자 미니화분\n지름 12cm\n높이 10cm\n\n2. 콩란\n3. 콜레우스\n4. 서비스 삼색달개비\n->요거는 원하시면 바로 잘라서 같이 드릴게요! 일주일 정도만 물꽂이해서 뿌리내리고 식재하면 됩니다~\n\n2. 콩란은 다육이처럼 물 자주 안줘도 되고\n나머지는 흙 물 마르는지 체크해서 7~10일에 한 번씩 주시면 됩니다!\n콩란 늘어뜨리듯이 사진 참고해서 식재하심 좋을 것 같아요!\n\n4가지 식물 재밌게 키워보세요:) 초보분들 쉽게 가능하세요!\n\n환불 교환 불가합니다👍🏻 \n루원제일풍경채 앞에서 거래합니다!",
		region: "인천 서구 가정동",
		cost: "9,000원",
	},
	{
		href: "/articles/336842003",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/A8231EDCC68D81CC1B8D832E6E5727EFBFEEE320972127261B0AEAF6CBD5BDE2.jpg?q=82&s=300x300&t=crop",
		title: "LED 우산 식물등 식물 조명 전구 생장등 성장 램프",
		content:
			"식물을 잘 키워보고자 구매했지만\n식물키우는 건 저랑 안맞아서 팝니당 ㅠ\n전원만 꽂으면 알아서 16시간\n켜지고 8시간 꺼져요. 길이조절 되어서\n22-70 cm 늘릴수 있습니다.\n지름이 11cm로 대형 식물에겐 안맞고\n소형 식물에게 추천드려용\n\n사용감이 아~~~ 주 없는\n새상품과 같아서 네고 안됩니다\n거래는 서면 밝은 한의원 앞에서\n가능해요!",
		region: "부산 부산진구 부전동",
		cost: "14,000원",
	},
	{
		href: "/articles/345275846",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/45AD58B3AC1C75729AAACDDCC7E408C37506CB8318FCBBAF852A5D5AA00CB595.jpg?q=82&s=300x300&t=crop",
		title: "관엽식물용 앰플영양제 35ml X 10개입 / 식물 영양제 / 미개봉",
		content:
			"한 세트에 35ml X 10개입 입니다. \n2023년 4월 18일 까지 사용 가능합니다. \n제품 정보는 첨부된 이미지를 확인해주세요. \n\n***거래 장소***\n[땅땅치킨 장안점] 서울 동대문구 답십리로64길 22",
		region: "서울 동대문구 장안동",
		cost: "1,000원",
	},
	{
		href: "/articles/338761326",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/5bc7869329954b0548e5e0f8745cf823094ba53e553a3b116c0c16121fa3c562.webp?q=82&s=300x300&t=crop",
		title: "led 식물등 식물램프 판매합니다.",
		content:
			"https://www.i-growled.com/products/led-i-shape-height-adjustable-indoor-garden\n\nled 식물등입니다!\n미개봉상품이고 많이 사시면 가격 조정 가능합니다.\n바닥 트레이 기준 45*19*47.5\n연락주세요~!",
		region: "광주 광산구 첨단1동",
		cost: "20,000원",
	},
	{
		href: "/articles/345250711",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/82940C00D844618A5E7869D46CF63B2690322D92BC722444FB79F992BE07C959.jpg?q=82&s=300x300&t=crop",
		title: "개업선물용 식물, 화분, 대형 식물, 금전수, 녹보수",
		content:
			"녹보수 130cm정도, 금전수 2개 110cm 정도입니다\n녹보수 13만원, 금전수 10만원 정도 하는거에요\n\n녹보수 6만원, 금전수 5만원에 판매합니다\n다 구매하시면 싸게 해드려요\n\n새상품으로 구매한지 2달정도밖에 되지않아서 잎도 상한거 하나 없이 깨끗합니다!",
		region: "서울 마포구 서교동",
		cost: "60,000원",
	},
	{
		href: "/articles/338789808",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/9350C8BD563A78FA5200854C13AC3844B765274D25D7330B0482F6F0B69F7F49.jpg?q=82&s=300x300&t=crop",
		title: "몬스테라 식물 애완식물 화분",
		content:
			"사진과 같이 4잎 자라있구요!\n화분크기 가로 세로 8cm, 높이 23cm\n식물까지 총 길이 70cm 크기입니다.\n\n집이 너무 좁아서 팔아요! \n물만 주1회 주면 쑥쑥 자라고, 줄기 잘라서 수중재배 가능합니다.",
		region: "서울 광진구 화양동",
		cost: "15,000원",
	},
	{
		href: "/articles/344774241",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/B727C38A53CCFA831D0C420DA08B726A0980200460A5D50AD2AEFF55794111A8.jpg?q=82&s=300x300&t=crop",
		title: "특이식물 희귀식물 다육식물 20종",
		content:
			"20종 모듬 마지막 판매입니다!\n키핑다이 밭으로 만들어야해서 자리비움으로 20종 모듬판매합니다! 바위솔 종류 인터넷 식물판매사이트에 판매가격 확인해 보셔요~빨리 자리를 비우려고 저렴히 판매하는 것이니  꼼꼼히  확인해 보시고 채팅주세요! \n개별판매x\n식물특성상 환불 반품 교환 안되요!",
		region: "충남 아산시 탕정면",
		cost: "30,000원",
	},
	{
		href: "/articles/339824301",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/8ea3cb9c7d93a83da15b353659f0787878cd699d3273eb770a796895178f93bd.webp?q=82&s=300x300&t=crop",
		title: "메타30 이나되는  공기 정화 식물 1위 식물",
		content:
			"오늘도 와있습니다\n빨리 저렴하게 정리합니다\n 공기 정화 식물로는 이것만 한 게 없습니다\n플분으로 드리지만 굉장히 크고 튼튼해서 분갈이 걱정 전혀 안하셔도 됩니다",
		region: "전남 나주시 빛가람동",
		cost: "23,000원",
	},
	{
		href: "/articles/273101153",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202108/7bbb676bae683b89e221eaea9fa54844e117d57f27264ff32bb3283a83d5758b.webp?q=82&s=300x300&t=crop",
		title: "희귀식물 예쁜식물",
		content:
			"정확한 이름은 모르겠어요\n예뻐서데려왔어요\n자리부족으로내놓습니다\n토분포함입니다\n분갈이해놔서 이대로예쁘게 키우시면됩니다\n궁금한점 챗주세요\n\n *사진보다 좀더자랐어요 현재사진 원하시면 보여드립니다",
		region: "광주 광산구 비아동",
		cost: "50,000원",
	},
	{
		href: "/articles/345212933",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/0163b49e752f1d8176926b72272fdf2ce44545e1f3e371d16aa7da5e659516d2.webp?q=82&s=300x300&t=crop",
		title: "대형화분 화초 식물 공기정화식물 다육 선인장",
		content:
			"빠른정리위해 저렴히 올렸어요~♡\n공기정화식물로 실내에서 키우는 스노우사파이어^^\n화분길이 60센티   총90센티 이상~\n정리중이며  반품.환불 안됩니다.",
		region: "경기도 안산시 단원구 초지동",
		cost: "45,000원",
	},
	{
		href: "/articles/344680607",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/8F7C67E451F23452DC37CC6742FB2E8906DCA95BCEF03EB350AB1CC3F0676FAD.jpg?q=82&s=300x300&t=crop",
		title: "특이식물 희귀식물 다육식물 20종",
		content:
			"하우스 지으면서 마당 테두리에 심으려고 바위솔 3포트에 1만원씩 30세트를 사놓고 겨울 닥치고 내부공사때문에 심지 못해서 자리만 차지하고 있어서 다양한 다육이들과 모듬 20종으로 저렴히 판매합니다!\n키핑다이를 밭으로 개조하느라 빠른 자리비움으로 저렴히 보내요!\n\n개별판매 x\n식물 특성상 환불 반품 교환 안되요!\n사진 확대하셔서 식물상태 확인하시고 신중히 선택해주세요!\n채팅시 원하는 금액에 맞춰주지 않는다고 상처주는 말씀은 삼가해주세요~",
		region: "충남 아산시 탕정면",
		cost: "30,000원",
	},
	{
		href: "/articles/345152075",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/4105036bd61139860ee2aee7d7d2a8d3dd08344698638d451b324487dc6beda6.webp?q=82&s=300x300&t=crop",
		title: "식물등ㅡ 마켓비 장스텐드+ 필립스식물등",
		content:
			"얼마전에 이사오면서 중고판매하고\n하나 남겨둔거 마저 판매합니다.\n빨리오시는분 우선거래\n비대면 쿨거래 환영",
		region: "경기도 화성시 반송동",
		cost: "15,000원",
	},
	{
		href: "/articles/345133068",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/c64ee1043be872bb4cdbda7d28968f450d31df081b5a11ba4fa87c5b49e1bd47.webp?q=82&s=300x300&t=crop",
		title: "식물ㅡ 나사가 선정한 공기정한 1 위 식물",
		content: "공기 정화 식물로는 이 야래카야자를 따라갈 식물이 없습니다",
		region: "광주 북구 용봉동",
		cost: "9,000원",
	},
	{
		href: "/articles/343682333",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/c483f8fa48c98c583c400c93e0c9acc5c53eb0f9ff33ab36f6631bd0fa8aa6cf.webp?q=82&s=300x300&t=crop",
		title: "반려식물 희귀식물 무늬몬스테라분양",
		content:
			"반려식물 희귀식물 무늬몬스테라분양\n무늬몬스테라\n 18cm슬릿분에 심겨진 찟잎나오기 시작한\n 무늬몬스테라 분양합니다\n순하고 잘자라는 식물이라 반려식물로 키우셔도 좋아요 \n플랜테리어효과 최고인식물입니다 \n식물특성상 환불이나 반품불가합니다 \n참고해주세요",
		region: "경기도 의정부시 금오동",
		cost: "145,000원",
	},
	{
		href: "/articles/339679101",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/8b1e6e69985ff56b6af859aa108e90ae5f230fa0b5652d01b1dc3f10537b30c8.webp?q=82&s=300x300&t=crop",
		title: "몬스테라 (이태리토분포함) 중형식물 공기정화식물",
		content:
			"몬스테라\n이태리토분살구색(받침포함)\n무게는 가볍지도 무겁지도 않아요.\n성인여자혼자충분히들수있어요~\n차있음 편하시구요~가까우심 들고 걸어가실 수있을거예요~\n🎁사은품:식물영양제 그린이1p드립니다😄(마지막사진)🎁\n🥕광안리직거래\n 🥕교환환불불가 🥕선착순:먼저구매하시는분과거래해요😊",
		region: "부산 수영구 광안동",
		cost: "23,000원",
	},
	{
		href: "/articles/345054960",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/AE531242936D9D7CA7044BBB4A851B131697869B57782F444C8D55194E0D6217.jpg?q=82&s=300x300&t=crop",
		title: "🍀[도서-새책] 플렌테리어 관련 (식물집사 필독서){식물이 아프면 찾아오세요}",
		content:
			"[새책-정가 17,500원/ 판매가 9,000원]            안녕하세요. 저는 식물덕후 보니타입니다. 플랜테리어 관련 새책입니다. ^^ 식물을 아끼고 좋아하시는 분들 구매바랍니다!",
		region: "세종시  어진동",
		cost: "9,000원",
	},
	{
		href: "/articles/343862388",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/B2CC6865C4463448589C1BDED732F4B76CC32E449A5C768FC6F1424DFEBE8E1A.jpg?q=82&s=300x300&t=crop",
		title: "모던포인트 식물 무드등 (식물이 없어요 ㅠ )",
		content:
			"네이버에 모던포인트 - 식물무드등 치시면 나옵니다. 확인해보시고 *** 무드등만 사용하실분만 *** 거래해주세요. 식물은 제가 받은채로 오래 놔둬서 뿌리가 상했네요. \n\n\n스킨디아모스나 이오난사 구매해서 사용하셔도 좋을 것 같아요.",
		region: "경기도 용인시 기흥구 청덕동",
		cost: "20,000원",
	},
	{
		href: "/articles/333677263",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202201/2fcca94e9d223971cca197e8caaebbbb13a37224b8f954064534f66f59234dd2.webp?q=82&s=300x300&t=crop",
		title: "식물~알로카시아 식물    공기정화식물중에 최고  5번째 사진처럼큽니다",
		content:
			"중계역 근처 직거래합니다    아침에 물방울이 맺혀요 잎에서~~멋지게 키워보세요. 화분포함 가격입니다 저럼하게내놓습니다",
		region: "서울 노원구 중계2.3동",
		cost: "12,000원",
	},
	{
		href: "/articles/289891655",
		img: "https://dnvefa72aowie.cloudfront.net/origin/article/202109/6eb97b7103d493d100c39d5cb6db235c938c64265ac938e81187d2994d33628f.webp?q=82&s=300x300&t=crop",
		title: "[식물 인테리어] 해피트리 화초 화분 - 공기정화 식물",
		content:
			"<해피트리 꽃말 : 행복, 행운>\n실내 공기정화에 좋은 해피트리 화분입니다.\n집, 사무실 인테리어에도 좋습니다.\n\n잎은 마르지않게 촉촉하게 뿌리는 건조하게 유지하는게 좋습니다. \n\n해피트리는 잎으로 공기 중 수분을 흡수하는 제습 기능을 갖고 있습니다. 너무 건조하면 잎이 마를 수 있으므로 건조한 곳에서는 가끔씩 분무기로 물을 뿌려 주는거 좋습니다. \n실내 유해물질인 휘발성유기화합물을 제거하는 효과도 있어요.\n\n물주기는 흙이 충분히 말랐는지 확인 후, 물을 주는게 좋습니다. 어떤 식물이든 과습은 뿌리를 무르게 하기 때문입니다. 물을 줄 땐 관수를 충분히 해주시면 됩니다.\n\n직사광은 잎을 손상시킬 수 있으니, 직사광을 피해 적당히 차광되어 들어오는 빛에 두시면 좋습니다. 통풍은 필수 입니다.\n\n화분 높이 45cm, 총 높이 95cm 입니다.\n\n직접 와주셔야 합니다. \n식물 거래 특성상 반품/환불 안되니 양해부탁드립니다.\n\n※ 사진 촬영 : 8월 29일\n※ 식물은 살아있는 생물이므로 판매되는 시기에  따라 크기, 잎의 수, 꽃 등이 달라질 수 있습니다.",
		region: "경기도 성남시 분당구 수내동",
		cost: "40,000원",
	},
];
