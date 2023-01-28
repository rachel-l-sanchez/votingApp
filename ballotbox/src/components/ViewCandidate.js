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

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/candidate/${id}`)
			.then((res) => setItem(res.data))
			.catch((e) => console.log(e));
	}, []);

	return (
		<div>
			<div className="container">
				<div className="title-info">
					<h1>View Candidate </h1>
					{/* <img src="" alt="" /> */}
				</div>
				<div className="demo-info">
					<h5 className="card-title">Title: </h5>
					<p className="info">Info1: </p>
					<p className="info">Info2: </p>
					<p className="info">Info3: </p>
				</div>
			</div>
		</div>
	);
};

export default ViewCandidate;
