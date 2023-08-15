import React from "react";

import Header from "../components/Header";
import Aside from "../components/Aside";
import Name from '../components/Name'
import Activity from "../components/Activity";
import Objectifs from "../components/Objectifs"
import Radar from "../components/Radar"
import Score from '../components/Score'
import Nutriment from "../components/Nutrients";

import { useParams } from "react-router-dom";
import { USER_MAIN_DATA } from '../app/data';
import Error404 from "../pages/Error404";

import '../styles/dashboard.css'

export default function Home(){
    const { id } = useParams();
    const userData = USER_MAIN_DATA.find((user) => user.id === parseInt(id));

    if(!userData){
        return <Error404 />
    }

    return(
        <>
            <Header />
            <section className="dashboard">
                <Aside />
                <div className="dashboard__c">
                    <div className="dashboard__header">
                        <Name />
                    </div>
                    <div className="dashboard__content">
                    <div className="dashboard__graphic">
                        <Activity />
                        <div className="dashboard__graphic__low">
                            <Objectifs />
                            <Radar />
                            <Score />
                        </div>  
                    </div>
                        <div className="dashboard__content__nutriment">
                            <Nutriment />
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}