import { useEffect } from "react";
import { useState } from "react";
import NewsItem from "./NewsItem";

function NewsBoard({ category }) {
  const [articles, setArticles] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=ef9370f4fa8b47adab02b7d50ea2f292";
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=" +
      category +
      "&apiKey=" +
      apiKey;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error("Error fetching data:", error));
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles && articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            urlToImage={news.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        <p>Loading or no articles available...</p> // Display a fallback if articles are not yet loaded
      )}
    </div>
  );
}

export default NewsBoard;
