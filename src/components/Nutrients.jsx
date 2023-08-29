import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { USER_MAIN_DATA } from '../app/data';
import axios from "axios";
import API, { APIMock } from "../api/API";
import Card from '../components/Card'
import Calorie from '../assets/calorie.png'
import Glucides from '../assets/glucides.png'
import Lipides from '../assets/lipides.png'
import Prot from '../assets/prot.png'
import  '../styles/nutriment.css'

export default function Nutriment() {
    const { id } = useParams();
    const [dataNutrient, setDataNutrients] = useState(0) 

    async function getData(){
        const ApiRes = await API(id) 
        setDataNutrients(ApiRes)
        
    }
    useEffect(() =>{
        getData()
    },[])

    //const userData = USER_MAIN_DATA.find((user) => user.id === parseInt(id));

    let user = APIMock(id)
    const ApiMockMode = true

    let calorie 
    let protein 
    let glucides
    let lipides 

    if (ApiMockMode == true) {
        calorie = user.calorie
        protein = user.protein
        glucides = user.glucides
        lipides = user.lipides
        console.log(calorie, lipides, 'api mock');
    }else{
        calorie = dataNutrient.keyData.calorieCount
        protein = dataNutrient.keyData.proteinCount
        glucides = dataNutrient.keyData.carbohydrateCount
        lipides = dataNutrient.keyData.lipidCount
        console.log(calorie, lipides, 'api');
    }
    
    
    /*
    const calorie = userData.keyData.calorieCount
    const protein = userData.keyData.proteinCount
    const glucides = userData.keyData.carbohydrateCount
    const lipides = userData.keyData.lipidCount
    */

    // data via axios


    
/*
dataNutrient.keyData.calorieCount
dataNutrient.keyData.proteinCount
  dataNutrient.keyData.carbohydrateCount
dataNutrient.keyData.lipidCount
    */
    return (
        <section className="nutriment">
                {dataNutrient? <div className="nutriment__content"> 
                <Card img={Calorie} data={calorie} unite="kcal" sub="Calories" />
                <Card img={Prot} data={protein} unite="g" sub="Proteines" />
                <Card img={Glucides} data={glucides} unite="g" sub="Glucides" />
                <Card img={Lipides} data={lipides} unite="g" sub="Lipides" /> </div>:''} 
        </section>
    )
}
