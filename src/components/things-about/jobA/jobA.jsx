import { FaCheck } from "react-icons/fa";
import "./job.scss";

export const JobA = () => {
  return (
    <div className="job_div">
      <div className="tip type1">
        <div className="text-tip">
          <h3>
            <span className="span">
              <FaCheck />
            </span>{" "}
            Мы занимаемся розничной торговлей
          </h3>
          <h2>Более 20 лет.</h2>
        </div>
      </div>
      <div className="tip type2">
        <div className="text-tip">
          <h3>
            <span className="span">
              <FaCheck />
            </span>{" "}
            Основная миссия компании
          </h3>
          <h2>Максимальное качество товаров и услуг по доступной цене.</h2>
        </div>
      </div>
      <div className="tip type3">
        <div className="text-tip">
          <h3>
            <span className="span">
              <FaCheck />
            </span>{" "}
            Отличительная черта нашей сети
          </h3>
          <h2>
            Здоровая и полезная продукция местного производства внаших
            магазинах.
          </h2>
        </div>
      </div>
    </div>
  );
};
