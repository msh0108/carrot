import styled from "styled-components";
import React from "react";

import TownInfoCard from "./TownInfoCard";

function TownInfo() {
  return (
    <TownInfoContainer>
      <h1>동네정보</h1>
      {test.map((card, index) => (
        <TownInfoCard card={card} />
      ))}
    </TownInfoContainer>
  );
}

export default TownInfo;

const TownInfoContainer = styled.div`
  height: 45rem;
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(4, minmax(20%, auto));
  grid-template-rows: 1fr 6fr 6fr;
  background-color: rgb(250, 228, 202);
  padding: 4rem 10rem;
  h1 {
    font-size: 3rem;
    width: 100vw;
    grid-column: span 4;
    text-align: left;
    margin: 0px;
  }
`;

const test = [
  {
    nickname: "퐁이",
    region: "안양시 만안구 안양9동",
    content:
      "아는 사람이 아이폰 6s를 준다고 하는데\n전 지금 A31을 쓰고 있거든요?\n유심이동이 가능할까요?\n아님 새로 유심을 사서 써야 하나요?\n계정도 따로 필요한걸로 아는데 새로 해야되는거겟죠?\n정보 좀 알려주세요.",
    views: 16,
    time: "6시간 전",
  },
  {
    nickname: "제로",
    region: "나구 월산4동",
    content:
      "일상이 넘 무료해요 ㅜ^ㅜ ..\n취미생활도 딱히 없고 방콕좋아하는 집수니에요 ☁️\n아아 사러 나가는거 말구 하는게 없는데 동네에 뭐 할게 있을까요 ? 😢 여러분들은 뭐하고 하루 보내시나융..\n한살 더 먹은것도 서러운데 새해부터 꿀꿀하네요..😿아는 사람이 아이폰 6s를 준다고 하는데\n전 지금 A31을 쓰고 있거든요?\n유심이동이 가능할까요?\n아님 새로 유심을 사서 써야 하나요?\n계정도 따로 필요한걸로 아는데 새로 해야되는거겟죠?\n정보 좀 알려주세요",
    views: 253,
    time: "6시간 전",
  },
  {
    nickname: "퐁이",
    region: "안양시 만안구 안양9동",
    content:
      "아는 사람이 아이폰 6s를 준다고 하는데\n전 지금 A31을 쓰고 있거든요?\n유심이동이 가능할까요?\n아님 새로 유심을 사서 써야 하나요?\n계정도 따로 필요한걸로 아는데 새로 해야되는거겟죠?\n정보 좀 알려주세요",
    views: 16,
    time: "6시간 전",
  },
  {
    nickname: "제로",
    region: "나구 월산4동",
    content:
      "일상이 넘 무료해요 ㅜ^ㅜ ..\n취미생활도 딱히 없고 방콕좋아하는 집수니에요 ☁️\n아아 사러 나가는거 말구 하는게 없는데 동네에 뭐 할게 있을까요 ? 😢 여러분들은 뭐하고 하루 보내시나융..\n한살 더 먹은것도 서러운데 새해부터 꿀꿀하네요..😿",
    views: 253,
    time: "6시간 전",
  },
  {
    nickname: "퐁이",
    region: "안양시 만안구 안양9동",
    content:
      "아는 사람이 아이폰 6s를 준다고 하는데\n전 지금 A31을 쓰고 있거든요?\n유심이동이 가능할까요?\n아님 새로 유심을 사서 써야 하나요?\n계정도 따로 필요한걸로 아는데 새로 해야되는거겟죠?\n정보 좀 알려주세요",
    views: 16,
    time: "6시간 전",
  },
  {
    nickname: "제로",
    region: "나구 월산4동",
    content:
      "일상이 넘 무료해요 ㅜ^ㅜ ..\n취미생활도 딱히 없고 방콕좋아하는 집수니에요 ☁️\n아아 사러 나가는거 말구 하는게 없는데 동네에 뭐 할게 있을까요 ? 😢 여러분들은 뭐하고 하루 보내시나융..\n한살 더 먹은것도 서러운데 새해부터 꿀꿀하네요..😿",
    views: 253,
    time: "6시간 전",
  },
  {
    nickname: "퐁이",
    region: "안양시 만안구 안양9동",
    content:
      "아는 사람이 아이폰 6s를 준다고 하는데\n전 지금 A31을 쓰고 있거든요?\n유심이동이 가능할까요?\n아님 새로 유심을 사서 써야 하나요?\n계정도 따로 필요한걸로 아는데 새로 해야되는거겟죠?\n정보 좀 알려주세요",
    views: 16,
    time: "6시간 전",
  },
  {
    nickname: "제로",
    region: "나구 월산4동",
    content:
      "일상이 넘 무료해요 ㅜ^ㅜ ..\n취미생활도 딱히 없고 방콕좋아하는 집수니에요 ☁️\n아아 사러 나가는거 말구 하는게 없는데 동네에 뭐 할게 있을까요 ? 😢 여러분들은 뭐하고 하루 보내시나융..\n한살 더 먹은것도 서러운데 새해부터 꿀꿀하네요..😿",
    views: 253,
    time: "6시간 전",
  },
];

const testCase = [{}];
