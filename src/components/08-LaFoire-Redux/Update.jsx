import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { FORM_ARTICLE } from "./ConfigForm";
import { URL } from "./ConstUrl";

const Update = () => {
  const { id } = useParams();

  const [dataArticle, setDataArticle] = useState({
    name: "",
    content: "",
    categorie: "",
    brand: "",
    price: "",
    img: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    status: true,
    stock: "",
  });
  
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
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
      restructureState(data)
    } catch (err) {
      setError(err.message);
      console.error("Erreur:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDataArticle({
      ...dataArticle,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const restructureState = (data) => {
       setDataArticle({
          name: data.name,
          content: data.content,
          categorie: data.categorie,
          brand: data.brand,
          price: data.price,
          img: data.picture?.img || "",
          img1: data.picture?.img1 || "",
          img2: data.picture?.img2 || "",
          img3: data.picture?.img3 || "",
          img4: data.picture?.img4 || "",
          status: data.status,
          stock: data.stock,
        });
  }

  const initialiseObject = () => {
    const articleData = {
      name: dataArticle.name,
      content: dataArticle.content,
      categorie: dataArticle.categorie,
      brand: dataArticle.brand,
      price: Number(dataArticle.price),
      picture: {
        img: dataArticle.img,
        img1: dataArticle.img1,
        img2: dataArticle.img2,
        img3: dataArticle.img3,
        img4: dataArticle.img4,
      },
      status: dataArticle.status,
      stock: Number(dataArticle.stock),
    };
    return articleData;
  };

  const handleUpdate = async () => {
    setError(null);
    setSuccess(false);
    try {
      const articleData = initialiseObject();
      await axios.put(`${URL.UPDATE_ARTICLE}/${id}`, articleData);
      setSuccess(true);
    } catch (err) {
      setError(err.message);
      console.error("Erreur:", err);
    }
  };

  return (
    <div>
      <h1>Modifier un article</h1>

      {loading && <div>Chargement... ⏳</div>}
      {error && <div>Erreur: {error} 😭</div>}
      {success && <div>Article modifié avec succès! 😉</div>}

      <form onSubmit={handleUpdate}>
        {FORM_ARTICLE.map((field) => (
          <div key={field.name}>
            <label>{field.label}</label>
            <br />
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                value={dataArticle[field.name] || ""}
                onChange={handleChange}
              />
            ) : field.type === "checkbox" ? (
              <input
                type="checkbox"
                name={field.name}
                checked={dataArticle[field.name]}
                onChange={handleChange}
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={dataArticle[field.name] || ""}
                onChange={handleChange}
              />
            )}
            <br />
          </div>
        ))}
        <button>Update</button>
      </form>
    </div>
  );
};

export default Update;