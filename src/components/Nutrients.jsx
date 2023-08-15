import React from "react";
import { useParams } from "react-router-dom";
import { USER_MAIN_DATA } from '../app/data';

import Card from '../components/Card'

import Calorie from '../assets/calorie.png'
import Glucides from '../assets/glucides.png'
import Lipides from '../assets/lipides.png'
import Prot from '../assets/prot.png'

import  '../styles/nutriment.css'



export default function Nutriment() {
    const { id } = useParams();
    const userData = USER_MAIN_DATA.find((user) => user.id === parseInt(id));

    const calorie = userData.keyData.calorieCount
    const protein = userData.keyData.proteinCount
    const glucides = userData.keyData.carbohydrateCount
    const lipides = userData.keyData.lipidCount
    

    return (
        <section className="nutriment">
            <div className="nutriment__content">
                <Card img={Calorie} data={calorie} unite="kCal" sub="Calories" />
                <Card img={Prot} data={protein} unite="g" sub="Proteines" />
                <Card img={Glucides} data={glucides} unite="g" sub="Glucides" />
                <Card img={Lipides} data={lipides} unite="g" sub="Lipides" />
            </div>
             
        </section>
    )
}

//#FF0000
