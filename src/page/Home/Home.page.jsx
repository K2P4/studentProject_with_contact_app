/** @format */

import React from "react";
import { EmptyLottie, Navcomponent } from "../../components";
import AuthGuard from "../../components/guard/AuthGuard";

const HomePage = () => {
	return (
		<AuthGuard>
			<div className="w-screen h-screen bg-[#fcfcfd]">
				<div className="">
					<Navcomponent />
				</div>

				<div className="">
					<EmptyLottie />
				</div>
			</div>
		</AuthGuard>
	);
};

export default HomePage;
