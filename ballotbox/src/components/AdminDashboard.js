import { NavLink } from "react-router-dom";
import React, { useState, Link, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
	const [errors, setErrors] = useState({});
	const [name, setName] = useState("");
	const [pastTermStartDate, setPastTermStartDate] = useState("");
	const [pastTermEndDate, setPastTermEndDate] = useState("");
	const [party, setParty] = useState("");
	const [stance, setStance] = useState("");
	const [experience, setExperience] = useState("");
	const [voteCount, setVoteCount] = useState("");
	const navigate = useNavigate();

	const [candidateList, setCandidateList] = useState([]);

	const submitHandler = (e) => {
		e.preventDefault(); //prevents default action of page refresh and state clear, once button is clicked

		axios
			.post("http://localhost:8000/api/candidate", {
				name,
				pastTermStartDate,
				pastTermEndDate,
				party,
				stance,
				experience,
				voteCount,
			})
			.then((res) => {
				console.log(res);
				console.log(res.data);
				setCandidateList([...candidateList, res.data.candidate]);
				navigate("/admin");
			})
			.catch((err) => {
				console.log(err);
				console.log(err.response);
				console.log(err.response.data);
				setErrors(err.response.data.errors);
			});
	};

	//useEffect to get All Candidates
	useEffect(() => {
		axios
			.get("http://localhost:8000/api/candidates")

			.then((res) => {
				console.log(res);
				setCandidateList(res.data);
				navigate("");
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="bg-div">
			{/* NEW CREATE CANDIDATE FORM  STARTS  */}
			<div className="font-sans flex min-h-full p-3 pt-5">
				<form
					className="m-auto bg-white drop-shadow-lg rounded-lg overflow-hidden w-96 accent-gray-800"
					onSubmit={submitHandler}
				>
					<div className="p-6">
						<p className="text-3xl pl-3">New Candidate</p>
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
							/>
							{errors.name ? (
								<p className="text-danger">{errors.name.message}</p>
							) : null}
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
								/>
								{errors.pastTermStartDate ? (
									<p className="text-danger">
										{errors.pastTermStartDate.message}
									</p>
								) : null}
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
								/>
								{errors.pastTermEndDate ? (
									<p className="text-danger">
										{errors.pastTermEndDate.message}
									</p>
								) : null}
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
								>
									<option>Select a Party</option>
									<option value="Democrat">Democrat</option>
									<option value="Republican">Republican</option>
									<option value="Libertarian">Libertarian</option>
									<option value="Green">Green</option>
									<option value="Constitution">Constitution</option>
									<option value="Independent">Independent</option>
								</select>
								{errors.party ? (
									<p className="text-danger">{errors.party.message}</p>
								) : null}
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
								/>
								{errors.stance ? (
									<p className="text-danger">{errors.stance.message}</p>
								) : null}
							</div>
							{/* STANCE END  */}
						</div>
						{/* EXPERIENCE START  */}
						<div className="mt-4 relative">
							<div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
								<i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
							</div>
							<input
								className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
								placeholder="Experience"
								type="text"
								onChange={(e) => setExperience(e.target.value)}
							/>
							{errors.experience ? (
								<p className="text-danger">{errors.experience.message}</p>
							) : null}
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
							/>
							{errors.voteCount ? (
								<p className="text-danger">{errors.voteCount.message}</p>
							) : null}
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
			{/* Display All Candidates section*/}
			<div className="all-candidates">
				<p className="text-3xl pt-2 pb-2 pl-3">Candidates</p>
			</div>
			<table className="table table-bordered">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Party</th>
						<th scope="col">Actions</th>
					</tr>
				</thead>
				<tbody>
					{candidateList.map((candidate, index) => (
						<tr key={index}>
							{/* Display candidate name and Link to view page */}
							<td>
								<div className="">{candidate.name}</div>
								{/* <div>
                  <Link
                    to={`/view/${candidate._id}`}
                    className="d-flex justify-content-around m-5">
                    <>
                      <td className="">
                        <div className="">{candidate.name}</div>
                      </td>
                    </>
                  </Link>
                </div> */}
							</td>

							{/* <td>
                  <div className="d-flex justify-content-around mx-auto m-3">
                    <img src={candidate.photo} className="col col-4" />
                  </div>
                </td> */}

							<td>
								<div className="d-flex justify-content-around">
									{candidate.party}
								</div>
							</td>
							<td>
								<button className="navButton">
									<NavLink to={`/edit/${candidate._id}`}>
										Edit Candidate
									</NavLink>
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AdminDashboard;
