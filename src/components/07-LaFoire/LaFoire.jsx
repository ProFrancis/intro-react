import React, { useState, useEffect } from "react";
import axios from "axios";

// CONST
import { URL } from "./ConstUrl";
import { Link } from "react-router";

const LaFoire = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(URL.GET_ALL_ARTICLES);
        setArticles(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const deleteArticle = async (id) => {
    try {
      await axios.delete(`${URL.DELETE_ARTICLE}/${id}`);
      setArticles(articles.filter((article) => article._id !== id));
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };

  if (loading) return <div>Chargement des articles...</div>;

  if (error) return <div>Erreur: {error}</div>;

  return (
    <div>
      <h1>La Foire</h1>

      {articles.length === 0 ? (
        <p>Aucun article disponible</p>
      ) : (
        <section>
          {articles.map((article) => (
            <div key={article._id}>
              <Link to={{ pathname: `/detail/article/${article._id}` }}>
                {article.picture && (
                  <img
                    src={article.picture.img}
                    alt={article.name}
                    width={300}
                  />
                )}
              </Link>
              <h2>{article.name}</h2>
              <Link to={{ pathname: `/update/article/${article._id}` }}>
                Update
              </Link>
              <button onClick={() => deleteArticle(article.id)}>Delete</button>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default LaFoire;
