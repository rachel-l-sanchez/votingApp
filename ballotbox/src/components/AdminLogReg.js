import React from "react";
import { NavLink } from "react-router-dom";

const AdminLogReg = () => {
	return (
		<div className="bg-div p-20 flex flex-col items-center">
			<button className="navButton m-1 w-40">
				<NavLink to="/login">ADMIN LOGIN</NavLink>
			</button>
			<br />
			<button className="navButton m-1 w-40">
				<NavLink to="/register">ADMIN REGISTER</NavLink>
			</button>
		</div>
	);
};

export default AdminLogReg;
