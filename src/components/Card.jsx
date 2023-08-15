import React from "react";

import  '../styles/nutriment.css'


export default function NutrimentCard ({ img, data, unite, sub }) {
  return (
    <div className="nutriment__content__card">
      <div className="nutriment__content__card__icon">
        <img className="nutriment__content__card__icon__content" src={img} alt={sub} />
        <div className={sub.toLowerCase()}></div>
      </div>
      <div className="nutriment__content__card__info">
        <p className="nutriment__content__card__info__type">
          {data}
          {unite}
        </p>
        <p className="nutriment__content__card__info__sub">
          {sub}
        </p>
      </div>
    </div>
  );
}
