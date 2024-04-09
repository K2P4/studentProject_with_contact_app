/** @format */

import React, { useEffect, useState } from "react";
import { EmptyLottie, Navcomponent } from "../../components";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetClose,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../../components/ui/sheet";
import AuthGuard from "../../components/guard/AuthGuard";
import { useGetQuery } from "../../store/services/endpoints/contact.endpoint";
import FormTool from "./tool/Form.tool";
import { FaPlus } from "react-icons/fa6";
import { Button } from "../../components/ui/button";
import DataTableTool from "./tool/DataTable.tool";

const HomePage = () => {
	const { data } = useGetQuery();
	const [editData, setEditData] = useState({ edit: false, data: null });

	const handleEdit = (id) => {
		const finder = data?.contacts?.data.find((item) => item.id == id);
		setEditData({ edit: true, data: finder });
	};

	const handleClose = () => {
		setEditData({ edit: false, data: null });
	};

	

	return (
		<AuthGuard>
			<Sheet>
				<div className="w-screen h-screen bg-[#fcfcfd]">
					<div className="">
						<Navcomponent />
					</div>

					<div className="flex  w-full    mt-5 justify-center  sm:px-40 sm:justify-end sm:mt-3 mx-auto   ">
						<SheetTrigger>
							<Button className=" hover:bg-blue-600  sm:px-3   px-20 text-center flex items-center  active:scale-95 gap-3 sm:gap-1 text-white bg-basic">
								<FaPlus />
								Create Contact
							</Button>
						</SheetTrigger>
					</div>

					<SheetContent
						onClick={handleClose}
						onMouseOut={handleClose}
						onClose={handleClose}>
						<SheetHeader>
							<SheetTitle className="text-sm text-left sm:text-base">
								Contact Information
							</SheetTitle>
							<SheetDescription className="text-xs text-left sm:text-1xl">
								{editData?.data
									? "You Can Update Contact Infomation Here ..."
									: "You Can Create Contact Infomation Here ..."}
							</SheetDescription>
							
						</SheetHeader>

						<FormTool handleClose={handleClose} editData={editData} />
					</SheetContent>

					{data?.contacts?.data.length == 0 && (
						<div className="">
							<EmptyLottie />
						</div>
					)}

					{data?.contacts?.data.length > 0 && (
						<div className="sm:w-[80%] w-[95%] mx-auto mt-16 sm:mt-10">
							<DataTableTool
								handleEdit={handleEdit}
								apiData={data?.contacts?.data}
							/>
						</div>
					)}
				</div>
			</Sheet>
		</AuthGuard>
	);
};

export default HomePage;
