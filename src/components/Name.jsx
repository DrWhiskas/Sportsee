import React from "react";
import { useParams } from "react-router-dom";
import { USER_MAIN_DATA } from '../app/data';
import Error404 from "../pages/Error404";


export default function UserProfile() {
    const { id } = useParams();
    const userData = USER_MAIN_DATA.find((user) => user.id === parseInt(id));

    if(!userData){
        return <Error404 />
    }

    const firstName = userData.userInfos.firstName



    return (
        <div className="name">
            Bonjour<span className="name__user"> {firstName}</span>
            <p className="name__text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}