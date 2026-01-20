import { Route, Routes } from "react-router";

import "./App.css";

import Exemple from "./components/00-jsx";
import Counter from "./components/01-state-hook/state";
import Price from "./components/01-state-hook/Effect";
import Counter_TP from "./components/02-tp_counter/counter";
import Form from "./components/03-form/Form";
import Parent from "./components/04-props/Parent";
import Template from "./components/05-nav-link/Template";
import Article from "./components/05-nav-link/Article";
import Home from "./components/06-Requete/Home";
import Detail from "./components/06-Requete/Detail";
import Nothing from "./components/06-Requete/Nothing";
import Post from "./components/07-LaFoire/Post";
import Update from "./components/07-LaFoire/Update";
import DetailArticle from "./components/07-LaFoire/DetailArticle";
import LaFoire from "./components/07-LaFoire/LaFoire";
import LaFoireRedux from "./components/08-LaFoire-Redux/LaFoire";
import Register from "./components/09-Context/Register";
import Sign from "./components/09-Context/Sign";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route path="/exemple" element={<Exemple />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/price" element={<Price />} />
        <Route path="/counter-tp" element={<Counter_TP />} />
        <Route path="/form" element={<Form />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/article/:idArticle" element={<Article />} />
        <Route index element={<Home />} />
        <Route path="/requete/detail/:id" element={<Detail />} />
        <Route path="/detail/article/:id" element={<DetailArticle />} />
        <Route path="/update/article/:id" element={<Update />} />
        <Route path="/post/article" element={<Post />} />
        <Route path="/lafoire" element={<LaFoire />} />
        <Route path="/lafoire-redux" element={<LaFoireRedux />} />
      </Route>
      <Route path="*" element={<Nothing />} />
    </Routes>
  );
}

export default App;
