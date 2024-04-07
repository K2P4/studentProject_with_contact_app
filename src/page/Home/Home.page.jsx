/** @format */

import React, { useEffect } from "react";
import { EmptyLottie, Navcomponent, TableComponent } from "../../components";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import AuthGuard from "../../components/guard/AuthGuard";
import { useGetQuery } from "../../store/services/endpoints/contact.endpoint";
import FormTool from "./tool/Form.tool";
import { FaPlus } from "react-icons/fa6";
import { Button } from "../../components/ui/button";

const HomePage = () => {
	const { data } = useGetQuery();

	console.log(data);

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<AuthGuard>
			<div className="w-screen h-screen bg-[#fcfcfd]">
				<div className="">
					<Navcomponent />
				</div>

				<Sheet>
					<div className="flex  w-full  px-56 justify-end mt-3 mx-auto   ">
						<SheetTrigger>
							<Button className=" hover:bg-blue-600 flex items-center gap-1 text-white bg-basic">
								<FaPlus />
								Create Contact
							</Button>
						</SheetTrigger>
					</div>

					<SheetContent>
						<SheetHeader>
							<SheetTitle className="">Contact Information</SheetTitle>
							<SheetDescription>
								You Can Create Contact Infomation Here ...
							</SheetDescription>
						</SheetHeader>

						<FormTool />
					</SheetContent>
				</Sheet>

				{data?.contacts?.data.length == 0 && (
					<div className="">
						<EmptyLottie />
					</div>
				)}

				{data?.contacts?.data.length > 0 && (
					<div className="">
						<TableComponent />
					</div>
				)}
			</div>
		</AuthGuard>
	);
};

export default HomePage;
