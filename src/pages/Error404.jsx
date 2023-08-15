import React from "react";
import { Link } from "react-router-dom"

import '../styles/error.css'

export default function Error404(){
    return(

        <section className="error">
            <div className="error__content">
                <span className="error__content__header">
                    404
                </span>
                <p className="error__content__text">
                    <span> OUPS! Nous ne trouvons pas la page recherchée</span>
                    Vérifiez que l'URL saisie ne contient pas d'erreur.
                </p>
                <Link className="error__content__link" to='/'>
                    <span className="error__content__button">
                        Aller à la page d'accueil
                    </span>
                </Link>
                
            </div>
        </section>
    )
}