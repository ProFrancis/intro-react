import React, { useState } from "react";
import axios from "axios";
import { FORM_ARTICLE } from "./ConfigForm";
import { URL } from "./ConstUrl";

const Post = () => {
  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setError(null);
  setSuccess(false);
  try {
    const articleData = initialiseObject();
    await axios.post(URL.POST_ARTICLE, articleData);
    setSuccess(true);
    refreshState();
  } catch (err) {
    setError(err.message);
    console.error("Erreur: ", err);
  }
};

  const initialiseObject = () => {
    const articleData = {
      name: formData.name,
      content: formData.content,
      categorie: formData.categorie,
      brand: formData.brand,
      price: Number(formData.price),
      picture: {
        img: formData.img,
        img1: formData.img1,
        img2: formData.img2,
        img3: formData.img3,
        img4: formData.img4,
      },
      status: formData.status,
      stock: Number(formData.stock),
    };
    return articleData
  };

  const refreshState = () => {
    setFormData({
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
  }

  return (
    <div>
      <h1>Ajouter un article</h1>

      {error && <div>Erreur: {error} 😭</div>}
      {success && (<div>Article ajouté avec succès! 😉</div>)}

      <form onSubmit={handleSubmit}>
        {FORM_ARTICLE.map(field => (
          <div key={field.name}>
            <label>{field.label}</label>
            <br />
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
              />
            ) : field.type === "checkbox" ? (
              <input
                type="checkbox"
                checked={formData[field.name]}
                onChange={handleChange}
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
              />
            )}
            <br />
          </div>
        ))}
        <button>Add</button>
      </form>
    </div>
  );
};

export default Post;
