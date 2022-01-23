import MainLogo from './main_logo.png';
import './info.css';


function Info() {
  return (
    <div className="main">
      <img src={MainLogo} className="main-logo" />
      <div className="main-text">informaiton</div>
    </div>
  );
}

export default Info;
