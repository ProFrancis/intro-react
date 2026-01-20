import React, { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [idArticle, setIdArticle] = useState(12);

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/exemple">Exemple</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/price">Price</Link>
        <Link to="/counter-tp">Counter Tp</Link>
        <Link to="/form">Form</Link>
        <Link to="/parent">Parent</Link>
        <Link to={{ pathname: `/article/${idArticle}` }}> Article</Link>
        <Link to="/lafoire">La Foire</Link>
        <Link to="/post/article">Add Article</Link>
        <Link to="/lafoire-redux">La foire Redux</Link>
      </nav>
    </header>
  );
};

export default Header;
