import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/error.css';

export default function Error500() {
	return (
		<section className="error">
			<div className="error__content">
				<span className="error__content__header">500</span>
				<p className="error__content__text">
					<span> OUPS! Cette page ne fonctionne pas</span>
					Impossible de traiter cette demande. HTTP ERROR 500
				</p>
				<Link className="error__content__link" to="/">
					<span className="error__content__button">
						Aller à la page d'accueil
					</span>
				</Link>
			</div>
		</section>
	);
}
