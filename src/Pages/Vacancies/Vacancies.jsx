import "./style.scss";
import { Card } from "../../components/VacCards/vacCard";

const Vacancies = () => {
  return (
    <div className="container vacanci_div">
      <div className="logo-vac">
        <h2>Вакансии</h2>
      </div>
      <div className="content-vac">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Vacancies;
