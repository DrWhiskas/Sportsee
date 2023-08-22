import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { USER_MAIN_DATA } from '../app/data';
import Error404 from "../pages/Error404";
import axios from "axios";

import API from "../api/API"
/**
 * 
 * @returns 
 */
export default  function UserProfile() {
    
    const { id } = useParams();
    const [dataProfile, setDataProfile] = useState(0) 
    
    async function getData(){
        const ApiRes = await API(id) 
        setDataProfile(ApiRes)
    }
    useEffect(() =>{
        getData()
    },[])
    const userData = USER_MAIN_DATA.find((user) => user.id === parseInt(id));

    let firstName
    let APIuserName

    if(userData){
         firstName = userData.userInfos.firstName
    }

    if(dataProfile){
         APIuserName = dataProfile.userInfos.firstName
    }
   
    

console.log(id);

    return (
        <div className="name">
            Bonjour<span className="name__user"> {firstName} {APIuserName}</span>
            <p className="name__text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}