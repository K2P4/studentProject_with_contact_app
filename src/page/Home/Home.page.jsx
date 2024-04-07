/** @format */

import React, { useEffect } from "react";
import { EmptyLottie, Navcomponent } from "../../components";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetClose,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import AuthGuard from "../../components/guard/AuthGuard";
import { useGetQuery } from "../../store/services/endpoints/contact.endpoint";
import FormTool from "./tool/Form.tool";
import { FaPlus } from "react-icons/fa6";
import { Button } from "../../components/ui/button";
import DataTableTool from "./tool/DataTable.tool";

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
					<div className="flex  w-full  px-40 justify-end mt-3 mx-auto   ">
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
					<div className="w-[80%] mx-auto mt-10">
						<DataTableTool apiData={data?.contacts?.data} />
					</div>
				)}
			</div>
		</AuthGuard>
	);
};

export default HomePage;
