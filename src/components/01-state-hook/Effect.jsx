import { useState, useEffect } from "react";

const Price = () => {
// 1 Créer un state prix et un state total avec une valeur initiale définie.
const [prix, setPrix] = useState(10);
const [total, setTotal] = useState(50);

useEffect(() => {
  alert(`Le total est : ${total}`);
},[total])

// 2 Générer deux boutons : un pour incrémenter la valeur de prix et un autre pour incrémenter la valeur de total. 

  const incrementePrix = () => {
    setPrix(prix + 5)
  }

  return(
    <>
      <h1>Price</h1>
      <p>Prix : {prix}</p>
      <p>Total : {total}</p>
      <button onClick={incrementePrix}>Incremente Prix</button>
      <button onClick={() => setTotal(total + 10)} >Incremente Total</button>
    </>
  )
}

export default Price;