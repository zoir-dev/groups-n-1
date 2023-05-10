import logo2 from "../../../public/assets/Header/logo2.svg";
import insta from "../../../public/assets/Fotter/instagram.png";
import face from "../../../public/assets/Fotter/facebook.png";
import wk from "../../../public/assets/Fotter/vk.png";
import odno from "../../../public/assets/Fotter/odnoklassniki.png";
import phone from "../../../public/assets/Fotter/telephone.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="container Footer">
      <div className="first_row">
        <div className="left-foot">
          <img src={logo2} alt="logo" />
          <h3>О компании</h3>
          <h3>Контакты</h3>
          <h3>Вакансии</h3>
          <h3>Статьи</h3>
          <h3>Политика обработки персональных данных</h3>
        </div>
        <div className="right-foot">
          <div className="lr-foot">
            <img src={insta} alt="" />
            <img src={wk} alt="" />
            <img src={face} alt="" />
            <img src={odno} alt="" />
          </div>
          <div className="rr-foot">
            <img src={phone} alt="" />
            <h4>8 800 777 33 33</h4>
          </div>
        </div>
      </div>
      <div className="second_row">
        <p>Дизайн</p>
        <img src="../../../public/assets/Fotter/logo_zagovskiy.png" alt="" />
      </div>
    </div>
  );
};
export default Footer;
