/** @format */

import React from "react";
import Lottie from "lottie-react";
import EmptyJson from "../../lottie/empty.json";
const emptyLottie = () => {
	return (
		<div className="  w-full px-52  m-auto flex flex-col justify-center items-center">
			<Lottie className="w-[330px] " animationData={EmptyJson} loop={true} />
			<p className="text-gray-500 text-lg font-medium">There is no list...</p>
		</div>
	);
};

export default emptyLottie;
