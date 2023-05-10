import Cards from "../../components/Cards/Cards";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import { cards_discount, cards_new, cards_popular } from "../../Data/index";
import "./home.scss";
function Home() {
  return (
    <div className="home_div">
      <HomeSlider />
      <Cards cards_title="Акции" cards_all="Все акции" cards={cards_discount} />
      <Cards cards_title="Новинки" cards_all="Все новинки" cards={cards_new} />
      <Cards
        cards_title="Покупали раньше"
        cards_all="Все покупки"
        cards={cards_popular}
      />
    </div>
  );
}

export default Home;
