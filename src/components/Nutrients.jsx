import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { USER_MAIN_DATA } from '../app/data';
import axios from "axios";
import API from "../api/API";

import Card from '../components/Card'

import Calorie from '../assets/calorie.png'
import Glucides from '../assets/glucides.png'
import Lipides from '../assets/lipides.png'
import Prot from '../assets/prot.png'

import  '../styles/nutriment.css'



export default function Nutriment() {
    const { id } = useParams();
    const userData = USER_MAIN_DATA.find((user) => user.id === parseInt(id));

    const [dataNutrient, setDataNutrients] = useState(null) 

    async function getData(){
        const ApiRes = await API() 
        setDataNutrients(ApiRes)
    }
    useEffect(() =>{
        getData()
    },[])

    console.log("nutrie", dataNutrient);


    const calorie = userData.keyData.calorieCount
    const protein = userData.keyData.proteinCount
    const glucides = userData.keyData.carbohydrateCount
    const lipides = userData.keyData.lipidCount

    // data via axios
    
    

    return (
        <section className="nutriment">
            <div className="nutriment__content">
                <Card img={Prot} data={protein} unite="g" sub="Proteines" />
                <Card img={Glucides} data={glucides} unite="g" sub="Glucides" />
                <Card img={Lipides} data={lipides} unite="g" sub="Lipides" />
            </div>
             
        </section>
    )
}

//#FF0000

/*


const [dataProfile, setDataProfile] = useState(null) 

    async function getData(){
        const ApiRes = await API() 
        setDataProfile(ApiRes)
    }
    useEffect(() =>{
        getData()
    },[])
    const userData = USER_MAIN_DATA.find((user) => user.id === parseInt(id));

    if(!userData){
        return <Error404 />
    }

    if(!dataProfile){
        return <Error404 />
    }
    const firstName = userData.userInfos.firstName
    const APIuserName = dataProfile.userInfos.firstName

console.log(id);

    return (
        <div className="name">
            Bonjour<span className="name__user"> {firstName} {APIuserName}</span>
            <p className="name__text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}


*/