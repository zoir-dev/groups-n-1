import { Close } from "@mui/icons-material";
import { Modal } from "@mui/material";
import "./style.scss";
import LIkedsFilter from "../LikedsFilter/LIkedsFilter";

const LikedsModal = ({
  open,
  setOpen,
  val,
  setVal,
  likeds,
  setFilter_sum,
  setFiltered,
  cash,
  setCash,
}) => {
  return (
    <Modal open={open}>
      <div className="modal_div">
        <div className="modal_divv">
          <div className="modal_title">
            <h2>Фильтр</h2>
            <Close onClick={() => setOpen(false)} />
          </div>
          <LIkedsFilter
            val={val}
            setVal={setVal}
            likeds={likeds}
            setFilter_sum={setFilter_sum}
            setFiltered={setFiltered}
            setOpen={setOpen}
            cash={cash}
            setCash={setCash}
          />
        </div>
      </div>
    </Modal>
  );
};

export default LikedsModal;
