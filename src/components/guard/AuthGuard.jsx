/** @format */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetProfileQuery } from "../../store/services/endpoints/auth.endpoint";

const AuthGuard = ({ check, children, token }) => {
	const { data, isError, isLoading } = useGetProfileQuery();

	const nav = useNavigate();
	console.log(data, isError);

	

	useEffect(() => {
		if (check) {
			localStorage.setItem("token", JSON.stringify(token));
		} else if (isError) {
			console.log("error");
			nav("/");
		} else if (data) {
			nav("/home");
		}
	}, [check, data, isError]);

	return (
		<div>
			{isLoading ? (
				<h1 className="w-[50%] h-screen flex items-center justify-center m-auto">
					Loading
				</h1>
			) : (
				<>{children}</>
			)}
		</div>
	);
};

export default AuthGuard;
