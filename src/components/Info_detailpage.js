import logo from './main_logo.png';
import './Info_detailpage.css';

function Detailpage() {
  return (
    <div className="Detailpage">
        <div className="detail">
          <div className='detail-img'>
            <img src="main_logo.png" />
          </div>
          <div className='detail-first'>
            <div className='detail-first-round'><br /><br /><br />
            프로필사진!
            </div>
            <div className='detail-first-title'>
            <ul>
              <li>
                <h3>그림그려드립니다~</h3>
                <h6>지역</h6>
              </li>
            </ul>

            </div>
            <div className='detail-first-button'>
              <button>+단골맺기</button>
            </div>
          </div>
          

        </div>
    </div>
  );
}

export default Detailpage;