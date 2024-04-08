/** @format */

import React, { useState } from "react";
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
import Swal from "sweetalert2";
import SweetAlert2 from "react-sweetalert2";
import { SheetTrigger } from "../../../components/ui/sheet";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDeleteMutation } from "../../../store/services/endpoints/contact.endpoint";

const DataTableTool = ({ apiData, handleEdit }) => {
	const [swalProps, setSwalProps] = useState({});
	const [DeleteFun, { data, isError, isLoading }] = useDeleteMutation();

	const handleDelete = (id) => {
		setSwalProps({
			show: true,
			title: "Are you sure?",
			text: "You Want to remove?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#E72929",
			confirmButtonText: "Yes, delete it!",
			showLoaderOnConfirm: true,
			cancelButtonText: "No, cancel!",

			onResolve: () => {
				setSwalProps({
					show: false,
				});
			},

			preConfirm: () => {
				return new Promise((resolve) => {
					setTimeout(() => {
						resolve();
					}, 2000);
				});
			},

			onConfirm: async () => {
				await DeleteFun(id);

				setSwalProps({
					show: false,
				});
			},
		});
	};

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
							<TableHead className="text-left text-white  w-[30px]">
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
							<TableRow
								key={i.id}
								className="bg-[#FCFCFD] border-0 duration-500 group hover:bg-gray-100  ">
								<TableCell>{i.id}</TableCell>
								<TableCell>{i.name}</TableCell>
								<TableCell className="text-gray-400">{i.email}</TableCell>
								<TableCell className="text-left text-gray-400">
									{i.phone}
								</TableCell>
								<TableCell className="text-gray-400 w-[300px] text-wrap ">
									{i.address}
								</TableCell>

								<TableCell className="text-xl space-x-5">
									<SheetTrigger>
										<button onClick={handleEdit.bind(null, i.id)}>
											<MdOutlineModeEdit  className="active:scale-95" />
										</button>
									</SheetTrigger>

									<button onClick={handleDelete.bind(null, i.id)}>
										<FaRegTrashAlt className=" text-red-500  active:scale-95" />
									</button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
		

			<SweetAlert2 {...swalProps} />
		</div>
	);
};

export default DataTableTool;
