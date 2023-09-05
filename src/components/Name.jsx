import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import API from "../api/API"

export default  function UserProfile() {
    
    const { id } = useParams();
    const [firstName, setFirstName] = useState('')

    async function getData(){
        const ApiRes = await API(id) 
        //console.log(ApiRes);
        setFirstName(ApiRes.main.userInfos.firstName)
    }

    useEffect(() =>{
        getData()
    },[])

    return (
        <div className="name">
            Bonjour <span className="name__user">{firstName}</span>
            <p className="name__text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}