import { Favorite, FavoriteBorder } from "@mui/icons-material";
import "./card.scss";
import { Rated } from "../../UseFull/Rated";
import { useDispatch, useSelector } from "react-redux";
import { addLikedCard, removeLikedCard } from "../../Redux/redux/liked";
function Card(c) {
  const stars = Rated(c.c.rated);
  const dispatch = useDispatch();
  const liked = useSelector((state) => state.likedCards);
  const LikeButton = () => {
    if (liked.find((l) => l === c.c.id)) {
      dispatch(removeLikedCard(c.c.id));
    } else {
      dispatch(addLikedCard(c.c.id));
    }
  };
  return (
    <div className="card_div">
      <div className="img_div">
        <img src={c.c.img} alt="" />
        <div className="card_like_button" onClick={LikeButton}>
          {liked?.find((l) => l === c.c.id) ? (
            <Favorite className="liked_button" />
          ) : (
            <FavoriteBorder />
          )}
        </div>
        {c.c.discount && <p>{c.c.discount}</p>}
      </div>
      <div className="card_body">
        <div className="cost_type">
          {c.c.cost_card && (
            <div>
              <h4>{c.c.cost_card} ₽</h4>
              <span>С картой</span>
            </div>
          )}
          <div>
            <p className={!c.c.cost_card ? "h4" : ""}>{c.c.cost_cash} ₽</p>
            {c.c.cost_card && <span>Обычная</span>}
          </div>
        </div>
        <div className="card_body_main">
          <p>{c.c.name}</p>
          <div className="card_footer">
            <div className="rated_div">
              {stars.map((s, index) => (
                <img key={index} src={`../../../public/assets/${s}.png`} />
              ))}
            </div>
            <button>В корзину</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
