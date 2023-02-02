import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = ({ setAdmin }) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("register form");
		const newUser = { firstName, lastName, email, password };
		console.log(newUser);

		axios
			.post(
				"http://localhost:8000/api/admin/register",
				{
					firstName,
					lastName,
					email,
					password,
				},
				{ withCredentials: true, credentials: "include" }
			)
			.then((res) => {
				console.log("logged in admin" + res.data);
				setAdmin(res.data);
				navigate("/admin");
			})
			.catch((err) => {
				setErrors(err.response.data.errors);
			});
	};

	return (
		<div className="bg-div">
			{/* NEW FORM ########### */}
			<div className="rotate">
				<div className="font-sans flex min-h-full p-3 pt-5">
					<form
						className="m-auto bg-white drop-shadow-lg rounded-lg overflow-hidden w-96 accent-gray-800"
						onSubmit={handleSubmit}
					>
						<div className="p-6">
							<p className="text-3xl pl-3">Register New Admin</p>
							{/* FIRST NAME START  */}
							<div className="mt-4 relative">
								<div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
									<i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
								</div>
								<input
									className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
									placeholder="First Name"
									type="text"
									onChange={(e) => setFirstName(e.target.value)}
								/>
								{errors.firstName ? (
									<span className="accent">{errors.firstName.message} </span>
								) : null}
							</div>
							{/* FIRST NAME END */}

							{/* LAST NAME START  */}
							<div className="mt-4 relative">
								<div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
									<i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
								</div>
								<input
									className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
									placeholder="Last Name"
									type="text"
									onChange={(e) => setLastName(e.target.value)}
								/>
								{errors.lastName ? (
									<span className="accent">{errors.lastName.message} </span>
								) : null}
							</div>

							{/* LAST NAME END  */}

							{/* EMAIL START  */}
							<div className="mt-4 relative">
								<div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
									<i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
								</div>
								<input
									className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
									placeholder="Email"
									type="text"
									onChange={(e) => setEmail(e.target.value)}
								/>
								{errors.email ? (
									<span className="accent">{errors.email.message} </span>
								) : null}
							</div>
							{/* EMAIL END  */}

							{/* PASSWORD START  */}
							<div className="mt-4 relative">
								<div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
									<i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
								</div>
								<input
									className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
									placeholder="Password"
									type="password"
									onChange={(e) => setPassword(e.target.value)}
								/>
								{errors.password ? (
									<span className="accent">{errors.password.message} </span>
								) : null}
							</div>
							{/* PASSWORD END  */}
							{/* CONFIRM PASSWORD START  */}
							<div className="mt-4 relative">
								<div className="absolute top-0 left-0 w-8 h-8 flex justify-center items-center">
									<i className="text-sm text-gray-400 fa-regular fa-location-dot"></i>
								</div>
								<input
									className="w-full bg-gray-100 text-xs font-bold border-none py-2 pl-8 pr-4 rounded placeholder:text-gray-800"
									placeholder="Confirm Password"
									type="password"
									onChange={(e) => setConfirmPassword(e.target.value)}
								/>
								{errors.confirmPassword ? (
									<span className="accent">
										{errors.confirmPassword.message}{" "}
									</span>
								) : null}
							</div>
							{/* CONFIRM PASSWORD END  */}
						</div>
						<div>
							<button className="bg-[#c03e3c] uppercase py-4 w-full text-white text-xs tracking-widest">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
