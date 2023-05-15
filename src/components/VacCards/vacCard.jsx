import "./vacCard.scss";
import { AiOutlinePhone } from "react-icons/ai";

export const Card = () => {
  return (
    <div className="card-vac">
      <h3>Должность</h3>
      <div className="mail text1-vac">
        <label htmlFor="p">Требования</label>
        <p>
          Текст про требования текст про требования текст про требования текст
          про требования текст про требования
        </p>
      </div>
      <div className="mail text2-vac">
        <label htmlFor="p">Обязанности</label>
        <p>
          Текст про обязаности текст про обязаности текст про обязаности текст
          про обязаности текст про обязаности
        </p>
      </div>
      <div className="mail text3-vac">
        <label htmlFor="p">Условия</label>
        <p>
          Текст про условия текст про условия текст про условия текст про
          условия текст про условия текст про условия
        </p>
      </div>

      <div className="mail phone-vac">
        <label htmlFor="tel">Звоните</label>
        <p>
          <AiOutlinePhone /> +7 904 271 35 90{" "}
        </p>
      </div>
    </div>
  );
};
