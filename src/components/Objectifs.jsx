import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, Label } from 'recharts';
import { USER_AVERAGE_SESSIONS } from '../app/data';
import axios from 'axios';
import API from '../api/API';
import Model from '../app/model.js'



export default function Objectifs() {
  const { id } = useParams();
  const [dataObjectif, setDataObjectif] = useState([])

  async function getData(){
    const ApiRes = await API(id)
    let model = new Model()
    const data = model.modelData(ApiRes)
    setDataObjectif(data)
  }

  useEffect(() =>{
    getData()
  }, [])

  if (!dataObjectif) return <div>No data available for this user.</div>;

  // valeur minimal et maximal
  const minSessionLength = Math.min(
		...dataObjectif.map((item) => item.sessionLength)
	);
  const maxSessionLength = Math.max(
		...dataObjectif.map((item) => item.sessionLength)
	);

  return (
		<div className="objectifs">
			<LineChart
				width={258}
				height={263}
				data={dataObjectif}
				style={{ background: '#FF0000' }}
			>
				<XAxis dataKey="day">
					<Label value="Jours" offset={0} position="insideBottom" />
				</XAxis>
				<YAxis yAxisId="left" tick={false} />
				<Tooltip />
				<Legend
					className="activity-chart-legend"
					verticalAlign="top"
					align="right"
				/>
				<Line
					yAxisId="left"
					type="monotone"
					dataKey="sessionLength"
					stroke="#FFFFFF"
					name="Durée moyenne des sessions"
				/>
			</LineChart>
		</div>
	);
}