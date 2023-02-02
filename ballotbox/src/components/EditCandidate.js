import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditCandidate = (props) => {
	//const [errors, setErrors] = useState({});
	const [name, setName] = useState("");
	const [pastTermStartDate, setPastTermStartDate] = useState("");
	const [pastTermEndDate, setPastTermEndDate] = useState("");
	const [party, setParty] = useState("");
	const [stance, setStance] = useState("");
	const [experience, setExperience] = useState("");
	const [voteCount, setVoteCount] = useState("");
	const [candidate, setCandidate] = useState({});

	const { id } = useParams();

	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/editcandidate/${id}`, {
				withCredentials: true,
				credentials: "include",
			})
			.then((res) => {
				console.log(res);
				setName(res.data.candidate.name);
				setPastTermStartDate(res.data.candidate.pastTermStartDate);
				setPastTermEndDate(res.data.candidate.pastTermEndDate);
				setParty(res.data.candidate.party);
				setStance(res.data.candidate.stance);
				setExperience(res.data.candidate.experience);
				setVoteCount(res.data.candidate.voteCount);
				setCandidate(res.data.candidate);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const submitHandler = (e) => {
		e.preventDefault();
		axios
			.put(
				`http://localhost:8000/api/edit/candidate/${id}`,
				{
					name,
					pastTermStartDate,
					pastTermEndDate,
					party,
					stance,
					experience,
					voteCount,
				},
				{ withCredentials: true, credentials: "include" }
			)
			.then((res) => {
				console.log(res);
				navigate("/admin");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const deleteCandidate = () => {
		axios.delete(`http://localhost:8000/api/${id}`).then((res) => {
			console.log("Candidate deleted", res.data);
			alert(`Are you sure you want to delete ${candidate.name}?`);
			navigate("/admin");
		});
	};

	return (
		<div className="candidate-form bg-div">
			{/* <span>Edit {candidate.name}</span> */}
			{/* NEW UPDATE CANDIDATE FORM START  */}
			<div className="font-sans flex min-h-full p-3 pt-5">
				<form
					className="m-auto bg-white drop-shadow-lg rounded-lg overflow-hidden w-96 accent-gray-800"
					onSubmit={submitHandler}
				>
					<div className="p-6">
						<p className="text-3xl pl-3">Edit {candidate.name}</p>
						{/* FULL NAME START  */}
						<div className="mt-4 relative">
							<div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
								<i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
							</div>
							<input
								className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
								placeholder="Full Name"
								type="text"
								onChange={(e) => setName(e.target.value)}
								value={name}
							/>
							{/* {errors.name ? (
								<p className="text-danger">{errors.name.message}</p>
							) : null} */}
						</div>
						{/* FULL NAME END  */}
						{/* PAST TERM START DATE START */}
						<div className="flex max-xs:flex-col gap-4 mt-4">
							<div className="flex-1 relative">
								<div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
									<i className="text-sm text-gray-400 fa-regular fa-calendar"></i>
								</div>
								<label className="form-label text-sm">
									Past Term Start Date:
								</label>
								<input
									className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
									placeholder="Past Term Start Date"
									type="date"
									onChange={(e) => setPastTermStartDate(e.target.value)}
									value={pastTermStartDate}
								/>
								{/* {errors.pastTermStartDate ? (
									<p className="text-danger">
										{errors.pastTermStartDate.message}
									</p>
								) : null} */}
							</div>
							{/* PAST TERM START DATE END  */}
							{/* PAST TERM END DATE START  */}
							<div className="flex-1 relative">
								<div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
									<i className="text-sm text-gray-400 fa-regular fa-calendar"></i>
								</div>
								<label className="form-label text-sm">
									Past Term End Date:
								</label>
								<input
									className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
									placeholder="Past Term End Date"
									type="date"
									onChange={(e) => setPastTermEndDate(e.target.value)}
									value={pastTermEndDate}
								/>
								{/* {errors.pastTermEndDate ? (
									<p className="text-danger">
										{errors.pastTermEndDate.message}
									</p>
								) : null} */}
							</div>
						</div>
						{/* PAST TERM END DATE END  */}
						<div className="flex max-xs:flex-col gap-4 mt-4">
							{/* PARTY START  */}
							<div className="flex-1 relative">
								<div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
									<i className="text-sm text-gray-400 fa-regular fa-user"></i>
								</div>
								<select
									className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
									onChange={(e) => setParty(e.target.value)}
									type="text"
									value={party}
								>
									<option>Select a Party</option>
									<option value="Democrat">Democrat</option>
									<option value="Republican">Republican</option>
									<option value="Libertarian">Libertarian</option>
									<option value="Green">Green</option>
									<option value="Constitution">Constitution</option>
									<option value="Independent">Independent</option>
								</select>
								{/* {errors.party ? (
									<p className="text-danger">{errors.party.message}</p>
								) : null} */}
							</div>
							{/* PARTY END  */}
							{/* STANCE START  */}
							<div className="flex-1 relative">
								<div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
									<i className="text-sm text-gray-400 fa-regular fa-seat-airline"></i>
								</div>
								<input
									className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
									placeholder="Stance"
									type="text"
									onChange={(e) => setStance(e.target.value)}
									value={stance}
								/>
								{/* {errors.stance ? (
									<p className="text-danger">{errors.stance.message}</p>
								) : null} */}
							</div>
							{/* STANCE END  */}
							{/* EXPERIENCE START  */}
						</div>
						<div className="mt-4 relative">
							<div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
								<i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
							</div>
							<input
								className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
								placeholder="Experience"
								type="text"
								onChange={(e) => setExperience(e.target.value)}
								value={experience}
							/>
							{/* {errors.experience ? (
								<p className="text-danger">{errors.experience.message}</p>
							) : null} */}
						</div>
						{/* EXPERIENCE END  */}
						{/* VOTE START  */}
						<div className="mt-4 relative">
							<div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
								<i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
							</div>
							{/* <label className="form-label">Vote Count:</label> */}
							<input
								className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
								placeholder="Vote Count"
								type="number"
								onChange={(e) => setVoteCount(e.target.value)}
								value={voteCount}
							/>
							{/* {errors.voteCount ? (
								<p className="text-danger">{errors.voteCount.message}</p>
							) : null} */}
						</div>
						{/* VOTE END  */}
					</div>
					<div>
						<button className="bg-[#c03e3c] uppercase py-4 w-full text-white text-xs tracking-widest">
							Submit
						</button>
					</div>
				</form>
			</div>
			<div className="pl-4">
				<button onClick={deleteCandidate} className="navButton ">
					Delete
				</button>

				<button className="navButton m-1">
					<NavLink to="/admin">Back to Admin Dashboard</NavLink>
				</button>
			</div>
		</div>
	);
};

export default EditCandidate;
