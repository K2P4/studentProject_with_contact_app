/** @format */

import React from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "../../../components/ui/table";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

const DataTableTool = ({ apiData }) => {
	return (
		<div>
			<Table>
				<TableHeader>
					<TableRow className="bg-basic hover:bg-blue-500 font-bold w-full">
						<TableHead className="  rounded-s-lg    text-white w-[70px]">
							No
						</TableHead>
						<TableHead className="text-white w-[150px]">Name</TableHead>
						<TableHead className="text-white">Email</TableHead>
						<TableHead className="text-right text-white  w-[30px]">
							Phone
						</TableHead>
						<TableHead className="text-left text-white ">Address</TableHead>
						<TableHead className="text-left rounded-e-lg  w-[100px] text-white ">
							Action
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{apiData.map((i) => (
						<TableRow key={i.id} className="bg-[#FCFCFD] duration-500 group hover:bg-slate-100 ">
							<TableCell>{i.id}</TableCell>
							<TableCell>{i.name}</TableCell>
							<TableCell className="text-gray-400">{i.email}</TableCell>
							<TableCell className="text-end text-gray-400">
								{i.phone}
							</TableCell>
							<TableCell className="text-gray-400 w-[300px] text-wrap ">
								{i.address}
							</TableCell>

							<TableCell className="text-xl space-x-5">
								<button>
									<MdOutlineModeEdit />
								</button>

								<button>
									<FaRegTrashAlt className=" text-red-500 " />
								</button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
				
			</Table>
		</div>
	);
};

export default DataTableTool;
