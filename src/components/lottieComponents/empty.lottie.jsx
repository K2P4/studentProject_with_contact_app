/** @format */

import React from "react";
import Lottie from "lottie-react";
import EmptyJson from "../../lottie/empty.json";
const emptyLottie = () => {
	return (
		<div className="  w-full sm:px-52  py-20 sm:py-0  m-auto flex flex-col justify-center items-center">
			<Lottie className="sm:w-[350px] w-full " animationData={EmptyJson} loop={true} />
			<p className="text-gray-500 text-lg font-medium">There is no list...</p>
		</div>
	);
};

export default emptyLottie;
