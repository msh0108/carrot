import React, { useState } from "react";
import styled from 'styled-components';

function PostPruductPage() {
    return (
        <fieldset><legend><b>중고거래 글쓰기</b></legend>
            <form action="#">
                <p id="camera" ><label for="input-file" class="camera" ><img src="camera.svg" ></label></p>
                <p><input type="file" id="input-file" style="display:none"></input></p>
                <hr>
                <p><input type="text" class="title" placeholder="글제목"></input></p>
                <hr>
                <p>
                <select>
                    <option value="">카테고리 설정</option>
                    <option value="디지털기기">디지털기기</option>
                    <option value="생활가전">생활가전</option>
                    <option value="가구/인테리어">가구/인테리어</option>
                    <option value="유아동">유아동</option>
                    <option value="생활/가공식품">생활/가공식품</option>
                    <option value="유아도서">유아도서</option>
                    <option value="스포츠/레저">스포츠/레저</option>
                    <option value="여성잡화">여성잡화</option>
                    <option value="여성의류">여성의류</option>
                    <option value="남성패션/잡화">남성패션/잡화</option>
                    <option value="게임/취미">게임/취미</option>
                    <option value="뷰티/미용">뷰티/미용</option>
                    <option value="반려동물용품">반려동물용품</option>
                    <option value="도서/티켓/음반">도서/티켓/음반</option>
                    <option value="식물">식물</option>
                    <option value="기타 중고물품">기타 중고물품</option>
                    <option value="삽니다">삽니다</option>
                </select>
                </p>
                <hr>
                <p><input placeholder="가격(선택사항)" class="price"></input><label>가격제안받기</label><input type="checkbox"></input></p>
                <hr>
                <p><input class="text" type="text" placeholder="게시글 내용을 작성해주세요(가품 및 판매금지품목은 게시가 제한될 수 있어요.)"></p>
                <hr>  
                <p id="post-img"><label for="input_button"><img src="plus.svg">&nbsp;자주 쓰는 문구</label></p>
                <p><input type="button" id="input_button" onclick="javascript:goDetail('테스트');" style="display:none"></input></p>
                <div style="height: 1000px"></div>
                <!-- 팝업뜰때 배경 -->
                <div id="PopupMask">
                    <!--Popup Start -->
                    <div id="Popup" class="LayerPopup" style="width: 700px; height: 350px">
                    <article class="layerpop">
                        <div class="PopupTitle">게시글에 쓰고 싶은 문구를 선택해주세요.</div>
                            <a href="javascript:popupClose();" class="layerpop_close"></a><br />
                    <div class="PopupContent">
                        <p>자주 쓰는 문구를 저장해보세요<br />예) 직거래는 강화문 앞에서 가능해요!</p>
        
                    </div>
                    <hr>
                    <div class="PopupText">
                    <p>
                    <input type="text" placeholder="문구를 입력해주세요">
                    <input type="submit" value="추가">
                    </p>
                    </div>
                    </article>
                    </div>
                </div>
                    <!--Popup End -->
                <hr>
                <p id="post"><input class="post" type="submit" value="등록"></input></p>
                </form>
    
        </fieldset>

        );

}

export default PostPruductPage;