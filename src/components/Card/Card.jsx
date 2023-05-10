import { Favorite, FavoriteBorder } from "@mui/icons-material";
import "./card.scss";
import { Rated } from "../../UseFull/Rated";
import { useDispatch, useSelector } from "react-redux";
import { addLikedCard, removeLikedCard } from "../../Redux/redux/liked";
import { addProductToBasket } from "../../Redux/redux/basket";
import { useMemo, useState } from "react";
import DirectionSnackbar from "../Alert/Alert";

function Card({ data }) {
  const stars = Rated(data.rated);
  const dispatch = useDispatch();
  const liked = useSelector((state) => state.likedCards);
  const basket = useSelector((state) => state.basket.basket);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const LikeButton = () => {
    if (liked.find((l) => l.id === data.id)) {
      dispatch(removeLikedCard(data));
    } else {
      dispatch(addLikedCard(data));
    }
  };

  const AddtoBasket = () => {
    if (!basket.find((l) => l.id === data.id)) {
      dispatch(addProductToBasket(data));
      setOpen(true);
    } else {
      setError(true);
      setOpen(true);
    }
  };

  const isLiked = useMemo(() => {
    return liked?.find((l) => l.id === data.id);
  }, [liked, data.id]);

  return (
    <>
      <div className="card_div">
        <div className="img_div">
          <img src={data.img} alt="" />
          <div className="card_like_button" onClick={LikeButton}>
            {isLiked ? (
              <Favorite className="liked_button" />
            ) : (
              <FavoriteBorder />
            )}
          </div>
          {data.discount && <p>{data.discount}</p>}
        </div>
        <div className="card_body">
          <div className="cost_type">
            {data.cost_card && (
              <div>
                <h4>{data.cost_card} ₽</h4>
                <span>С картой</span>
              </div>
            )}
            <div>
              <p className={!data.cost_card ? "h4" : ""}>{data.cost_cash} ₽</p>
              {data.cost_card && <span>Обычная</span>}
            </div>
          </div>
          <div className="card_body_main">
            <p>{data.name}</p>
            <div className="card_footer">
              <div className="rated_div">
                {stars.map((s, index) => (
                  <img key={index} src={`/assets/Card/${s}.png`} />
                ))}
              </div>
              <button onClick={AddtoBasket}>В корзину</button>
            </div>
          </div>
        </div>
      </div>
      <DirectionSnackbar
        open={open}
        setOpen={setOpen}
        message="Added to Basket"
        error={error}
      />
    </>
  );
}

export default Card;
