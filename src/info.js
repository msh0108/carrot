import MainLogo from './main_logo.png';
import './info.css';


function Info() {
    var villageInfo = {
        city: '서울특별시',
        location: '영등포구',
        keyword: '전자기기'
    }

    var storeInfo = {
        name: '회사가는날',
        description: '노량진수산시장 "회사가는날" 가격도 적당하고 회도 싱싱해서 너무 맛있어요!'
    }

    return (
        <div className="informaion">
            <div className='info'>
                <div className='info_title'>
                    <h1>동네정보</h1>
                </div>
                <div className='info_box'>
                    <div className='info_box_area'>
                        <h2>
                            지역
                        </h2>
                        <p>
                            {villageInfo.city} {villageInfo.location}
                        </p>
                    </div>
                    <div className='info_box_keyword'>
                        <h2>
                            키워드
                        </h2>
                        <p>
                            {villageInfo.keyword}
                        </p>
                    </div>
                </div>
            </div>

            <div className='store'>
                <div className='store_title'>
                    <h1>우리동네 가게 소식</h1>
                    <h4>단골,추천 | 먹거리 | 생활 | </h4>
                </div>
                    <div className='store_box'>
                        
                        <div className='store_box_area'>
                            <h2>
                                전체
                            </h2>
                            
                        </div>
                        <div className='store_box_keyword'>
                            <h2>
                                {storeInfo.name}
                            </h2>
                            <p>
                                {storeInfo.description}
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Info;
