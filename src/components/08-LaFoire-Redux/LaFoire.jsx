import React, { useState, useEffect } from "react";
import axios from "axios";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import * as ACTIONS from './Redux/reducers/ArticleSlice'

// CONST
import { URL } from "./ConstUrl";
import { Link } from "react-router";

const LaFoire = () => {
  // utilisation du hook useDispatch pour lgérer les actions de Redux
  const dispatch = useDispatch()

  const store = useSelector(state => state.articles.data);

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      // DISPATCH l'action de demarrage
      dispatch(ACTIONS.FETCH_ARTICLES_START())
      try {
        setLoading(true);
        const { data } = await axios.get(URL.GET_ALL_ARTICLES);
        dispatch(ACTIONS.FETCH_ARTICLES_SUCCES(data))
        // setArticles(data);
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

      {store.length === 0 ? (
        <p>Aucun article disponible</p>
      ) : (
        <section>
          {store.map((article) => (
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
