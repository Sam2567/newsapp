import { useEffect } from "react";
import { useState } from "react";
import NewsItem from "./NewsItem";

function NewsBoard() {
  const [articales, setArticles] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + apiKey;
    fetch(url)
      .then((Response) => response.json())
      .then((data) => setArticles(data.articales))
      .catch((error) => console.error("Error fetching data:", error));
  });
  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
        {articales.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })}
      </h2>
    </div>
  );
}

export default NewsBoard;
