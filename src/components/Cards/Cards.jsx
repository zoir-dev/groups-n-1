import { ArrowForwardIos } from "@mui/icons-material";
import Card from "../Card/Card";
import "./cards.scss";

function Cards({ cards_title, cards, cards_all }) {
  return (
    <div className="container cards_div">
      <div className="cards_title_div">
        <h2>{cards_title}</h2>
        <button>
          <p>{cards_all}</p>
          <ArrowForwardIos />
        </button>
      </div>
      <div className="cards">
        {cards.map((c) => (
          <Card c={c} key={c.id} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
