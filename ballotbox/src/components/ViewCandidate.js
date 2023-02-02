
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
// import { Navigate, useNavigate } from react-router-dom;
// import { useParams } from "react-router-dom";

const ViewCandidate = (props) => {
	const [item, setItem] = useState("");
	const [oneInfo, setOneInfo] = useState("");
	const [twoInfo, setTwoInfo] = useState("");
	const [threeInfo, setThreeInfo] = useState("");

	const navigate = useNavigate();
	const { id } = useParams();

	const secondDivBg={
		minHeight: "60vh",
		width: "75em"
	}

	const imgStyle={
		height: "10em",
		width: "10em"
		// backgroundColor: "grey"
	}

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/candidate/${id}`)
			.then((res) => setItem(res.data.candidate))
			.catch((e) => console.log(e));
	}, []);

	return (
		<div className="bg-div p-5 flex justify-center">
			<div className="transparentDiv p-20 rounded" style={secondDivBg}>
				<div className="title-info flex flex-row p-4 pt-0 items-center">
					{/* <img src="" alt="" /> */}
					{ item.headshot ? <img src={item.headshot} style={imgStyle} className="me-5" alt="candidate headshot" /> : <div style={imgStyle} className="me-5"></div>}
					<p className="text-6xl">{item.name}</p>
				</div>
				<div className="demo-info flex flex-col p-4 text-3xl">
					<p className="card-title">Title: President</p>
					<p className="info">Party: {item.party}</p>
					<p className="info">Stance: {item.stance}</p>
					<p className="info">Experience: {item.experience} </p>
					<p className="info">Current Votes: {item.voteCount} </p>
				</div>
			</div>
		</div>
	);
};

export default ViewCandidate;
