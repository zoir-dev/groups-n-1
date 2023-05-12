import "./style.scss";

const Articles = () => {
  return (
    <div className="container apps_div">
      <div className="title-apps">
        <h2>Специальные предложения</h2>
      </div>
      <div className="cards-apps">
        <div className="cards first-card">
          <div className="text-card">
            <h3>Оформите карту «Северяночка»</h3>
            <p>И получайте бонусы при покупке в магазинах и на сайте</p>
          </div>
          <div className="img-card">
            <img src="../public/assets/Home/karta.png" alt="Карта" />
          </div>
        </div>
        <div className="cards second-card">
          <div className="text-card">
            <h3>Покупайте акционные товары</h3>
            <p>И получайте вдвое больше бонусов</p>
          </div>
          <img src="../public/assets/Home/savat.png" alt="Карта" />
        </div>
      </div>
    </div>
  );
};

export default Articles;
