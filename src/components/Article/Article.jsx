import "./style.scss";
function Article({ data }) {
  return (
    <div className="article">
      <img src={data.img} alt="" />
      <div className="article_body">
        <span>{data.date}</span>
        <h3>{data.title}</h3>
        <p>{data.body}</p>
      </div>
      <button>Подробнее</button>
    </div>
  );
}

export default Article;
