import { useDispatch } from "react-redux";
import Card from "../../Card/Card";
import "./style.scss";
import { useEffect, useState } from "react";
import Pagination from "../../Pagination/Pagination";
import { Close } from "@mui/icons-material";
import { removeAllLikedCards } from "../../../Redux/redux/liked";
import LikedsModal from "../LikedsModal/LikedsModal";

const Liked = ({
  filter_sum,
  setFilter_sum,
  filtered,
  likeds,
  setFiltered,
  val,
  setVal,
  cash,
  setCash,
}) => {
  const [cur_p, setCur_p] = useState(1);
  const [per_p, setPer_p] = useState(8);
  const [open, setOpen] = useState(false);

  const totalPages = Math.ceil(filtered.length / per_p);
  const dispatch = useDispatch();

  useEffect(() => {
    setFiltered(likeds);
  }, [likeds]);

  const changeSizeArray = () => {
    if (per_p > 8) {
      setPer_p(per_p - 4);
    } else {
      setPer_p(per_p + 4);
    }
  };

  const cancelFilter = () => {
    setFilter_sum([0, 0]);
    setFiltered(likeds);
  };

  const removeLikeds = () => {
    dispatch(removeAllLikedCards());
  };

  return (
    <div className="liked_div">
      <div className="filter_buttons">
        <div onClick={() => setOpen(true)}>Фильтр</div>
        {filter_sum[1] !== 0 && (
          <div onClick={cancelFilter}>
            <p>
              Цена от {filter_sum[0]} до {filter_sum[1]}
            </p>
            <Close />
          </div>
        )}
        {filtered.length !== 0 && (
          <div onClick={removeLikeds}>
            <p>Очистить</p>
            <Close />
          </div>
        )}
      </div>
      <div className="liked_divs">
        {filtered.length === 0 && <h2>No Избраное</h2>}
        {filtered?.slice(cur_p * per_p - per_p, cur_p * per_p).map((l) => (
          <Card data={l} key={l.id} />
        ))}
      </div>
      <div className="pagination_div">
        {filtered.length !== 0 && filtered.length > 8 && (
          <button className="watch_all" onClick={changeSizeArray}>
            Показать {per_p !== 8 ? "меньше" : "ещё"}
          </button>
        )}
        {filtered.length !== 0 && totalPages !== 1 && (
          <Pagination
            setCur_p={setCur_p}
            cur_p={cur_p}
            totalPages={totalPages}
          />
        )}
      </div>
      <LikedsModal
        open={open}
        setOpen={setOpen}
        val={val}
        setVal={setVal}
        likeds={likeds}
        setFilter_sum={setFilter_sum}
        setFiltered={setFiltered}
        cash={cash}
        setCash={setCash}
      />
    </div>
  );
};

export default Liked;
