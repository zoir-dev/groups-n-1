import { ArrowForwardIos } from "@mui/icons-material";
import "./styles.scss";

const Pagination = ({ setCur_p, cur_p, totalPages }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      <div
        className="prev_div"
        onClick={() => {
          cur_p !== 1 && setCur_p(1);
        }}
      >
        <ArrowForwardIos className="prev_icon" />
        <ArrowForwardIos className="prev_icon" />
      </div>
      <ArrowForwardIos
        className="prev_icon"
        onClick={() => {
          cur_p !== 1 && setCur_p(cur_p - 1);
        }}
      />
      {pageNumbers.map((e) => (
        <button
          key={e}
          onClick={() => setCur_p(e)}
          className={`pagination_button ${
            e === cur_p && "active_pagination_button"
          }`}
        >
          {e}
        </button>
      ))}
      <ArrowForwardIos
        className="next_icon"
        onClick={() => {
          cur_p !== totalPages && setCur_p(cur_p + 1);
        }}
      />
      <div
        className="next_div"
        onClick={() => {
          cur_p !== totalPages && setCur_p(totalPages);
        }}
      >
        <ArrowForwardIos className="next_icon" />
        <ArrowForwardIos className="next_icon" />
      </div>
    </div>
  );
};

export default Pagination;
