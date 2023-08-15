import React from "react";

import Yoga from '../assets/yoga.png'
import Swim from '../assets/swim.png'
import Bike from '../assets/bike.png'
import Musculation from '../assets/musculation.png'

import '../styles/aside.css'

export default function Aside(){
    return(
        <div className="aside">
            <div className="aside__content">
                <div className="aside__content__logo">
                    <img src={Yoga} alt="" />
                </div>
                <div className="aside__content__logo">
                    <img src={Swim} alt="" />
                </div>
                <div className="aside__content__logo">
                    <img src={Bike} alt="" />
                </div>
                <div className="aside__content__logo">
                    <img src={Musculation} alt="" />
                </div>
                <p className="aside__content__text">
                    Copiryght, SportSee 2020
                </p>
            </div>
        </div>
    )
}