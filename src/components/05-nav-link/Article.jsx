import React from 'react'
import { useParams } from 'react-router'

const Article = () => {
  // Récupérer le paramètre qui est dans l'url (idArticle)
  // Et Affiche le sur la page 

 // useParams
 const { idArticle } = useParams()

 return (
    <div>
      Article
      ID : {idArticle}
    </div>
  )
}

export default Article