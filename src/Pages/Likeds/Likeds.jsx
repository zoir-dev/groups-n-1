import Liked from "../../components/Likeds/Liked/Liked";
import "./style.scss";

import { useState } from "react";
import { useSelector } from "react-redux";
import LIkedsFilter from "../../components/Likeds/LikedsFilter/LIkedsFilter";

const Likeds = () => {
  const [val, setVal] = useState([0, 100]);

  const [filter_sum, setFilter_sum] = useState([0, 0]);
  const [filtered, setFiltered] = useState([]);
  const [cash, setCash] = useState(true);

  const likeds = useSelector((state) => state.likedCards);

  const clearFilter = () => {
    setVal([0, 100]);
  };
  return (
    <div className="container Liked_div">
      <h1>Избраное</h1>
      <div className="likeds_div">
        <div className="filter_div">
          <h4>Фильтр</h4>
          <div className="filter_title">
            <h5>Цена</h5>
            <button onClick={clearFilter}>Очистить</button>
          </div>
          <LIkedsFilter
            val={val}
            setVal={setVal}
            likeds={likeds}
            setFilter_sum={setFilter_sum}
            setFiltered={setFiltered}
            cash={cash}
            setCash={setCash}
          />
        </div>
        <Liked
          filter_sum={filter_sum}
          setFilter_sum={setFilter_sum}
          filtered={filtered}
          setFiltered={setFiltered}
          likeds={likeds}
          val={val}
          setVal={setVal}
          cash={cash}
          setCash={setCash}
        />
      </div>
    </div>
  );
};

export default Likeds;
