import "./head-a.scss";

export const LogoAbout = () => {
  return (
    <div className="hAbout_div">
      <div className="left-section-a">
        <h2>О компании</h2>
        <p>
          Мы непрерывно развиваемся и работаем над совершенствованием сервиса,
          заботимся о наших клиентах, стремимся к лучшему будущему.
        </p>
      </div>
      <div className="right-section-a">
        <img src="../../../public/assets/About/Group.png" alt="Group" />
      </div>
    </div>
  );
};
