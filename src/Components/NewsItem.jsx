import "../App.css";
import image from "../Assets/news.png";
function NewsItem({ title, description, urlToImage, url }) {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2">
      <img
        src={urlToImage ? urlToImage : image}
        style={{ height: "200px", width: "330px" }}
        className="card-img-top"
        alt="Missing Image"
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "Placeholder for description"}
        </p>
        <a href={url} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
