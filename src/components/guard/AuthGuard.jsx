/** @format */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetProfileQuery } from "../../store/services/endpoints/auth.endpoint";

const AuthGuard = ({ check, children, token }) => {
	const { data, isError, isLoading } = useGetProfileQuery();

	const nav = useNavigate();
	console.log(data, isError, isLoading);
	useEffect(() => {
		if (check) {
			localStorage.setItem("token", JSON.stringify(token));
		} else if (isError) {
			console.log("error");
			nav("/");
		} else if (data) {
			nav("/home");
		} else if (token) {
			av("/");
		}
	}, [check, data, isError]);

	return <div>{isLoading ? <h1>Loading</h1> : <>{children}</>}</div>;
};

export default AuthGuard;
