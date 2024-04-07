/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, SignupPage, SinginPage } from "./page";
const App = () => {
	return (
		<div className="w-full  bg-slate-100 h-screen mx-auto ">
			<Routes>
				<Route path="/" element={<SinginPage />} />
				<Route path="/signup" element={<SignupPage />} />
				<Route path="/home" element={<HomePage />} />
			</Routes>
		</div>
	);
};

export default App;
