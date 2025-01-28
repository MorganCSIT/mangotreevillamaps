import React from "react";
import { Link } from "react-router-dom";

const Article = ({ article }) => {
  if (!article) return null;

  return (
    <div className="article">
      <p>
        <em>
          Looking to book a taxi?{" "}
          <Link to="/taxi-service" className="taxi-link">
            Click to Inquire Taxi with Mr.A
          </Link>
        </em>
      </p>

      <div>{article.content}</div>

      <p>
        <em>Updated on: {article.dateUpdated}</em>
      </p>
    </div>
  );
};

export default Article;
