import { Slider } from "@mui/material";
import IosSwitch from "../IosSwitch/IosSwitch";
import { Remove } from "@mui/icons-material";
import { useState } from "react";
import "./style.scss";

const LIkedsFilter = ({
  val,
  setVal,
  likeds,
  setFilter_sum,
  setFiltered,
  setOpen,
}) => {
  const [cash, setCash] = useState(true);
  const handleChangeMin = (e) => {
    setVal((val) => [e.target.value, val[1]]);
  };

  const handleChangeMax = (e) => {
    setVal((val) => [val[0], e.target.value]);
  };

  const handleFilter = () => {
    setFilter_sum(val);
    setFiltered(
      likeds
        .filter((s) => {
          if (cash && !s.cost_card) return s;
          if (!cash) return s;
        })
        .filter((l) => {
          if (val[0] <= l.cost_cash && l.cost_cash <= val[1]) return l;
        })
    );
    setOpen(false);
  };

  return (
    <div className="filtereds_div">
      <div className="inputs_div">
        <input
          type="text"
          value={val[0]}
          onChange={(e) => handleChangeMin(e)}
        />
        <Remove />
        <input
          type="text"
          value={val[1]}
          onChange={(e) => handleChangeMax(e)}
        />
      </div>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        valueLabelDisplay="auto"
        className="likeds_slider_input"
        // getAriaValueText={valuetext}
      />
      <div className="filter_words">
        <p>Moloko</p>
        <p>Сливки</p>
        <p>Яйцо</p>
      </div>
      <IosSwitch value={cash} setValue={setCash} />
      <button className="filter_main_button" onClick={handleFilter}>
        Применить
      </button>
    </div>
  );
};

export default LIkedsFilter;
