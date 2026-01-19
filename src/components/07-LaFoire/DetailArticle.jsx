import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { URL } from "./ConstUrl";

const DetailArticle = () => {
  const { id } = useParams();

  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    fetchArticle();
  }, [id]);

  const fetchArticle = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(`${URL.GET_BY_ID}/${id}`);
      setArticle(data);
    } catch (err) {
      setError(err.message);
      console.error("Erreur:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Chargement... ⏳</div>;
  }

  if (error) {
    return <div>Erreur: {error} 😭</div>;
  }

  if (!article) {
    return <div>Article non trouvé</div>;
  }

  return (
    <div>
      <h1>{article.name}</h1>
      
      <div>
        <h2>Description</h2>
        <p>{article.content}</p>
      </div>

      <div>
        <p><strong>Catégorie:</strong> {article.categorie}</p>
        <p><strong>Marque:</strong> {article.brand}</p>
        <p><strong>Prix:</strong> {article.price} €</p>
        <p><strong>Stock:</strong> {article.stock}</p>
        <p><strong>Statut:</strong> {article.status ? "En ligne" : "Hors Ligne"}</p>
      </div>

      <div>
        <h2>Images</h2>
        {article.picture?.img && <img src={article.picture.img} alt={article.name} />}
        {article.picture?.img1 && <img src={article.picture.img1} alt={article.name} />}
        {article.picture?.img2 && <img src={article.picture.img2} alt={article.name} />}
        {article.picture?.img3 && <img src={article.picture.img3} alt={article.name} />}
        {article.picture?.img4 && <img src={article.picture.img4} alt={article.name} />}
      </div>
    </div>
  );
};

export default DetailArticle;