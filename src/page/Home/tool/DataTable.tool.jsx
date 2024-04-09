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
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../../../components/ui/accordion";
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
			<Table className="hidden   sm:inline-table ">
				<TableHeader>
					<TableRow className="bg-basic  text-xs sm:text-base hover:bg-blue-500 font-bold w-full">
						<TableHead className="  rounded-s-lg  w-[5px]   text-white sm:w-[70px]">
							No
						</TableHead>
						<TableHead className="text-white w-[10px] sm:w-[150px]">
							Name
						</TableHead>
						<TableHead className="text-white   ">Email</TableHead>
						<TableHead className="text-left w-[10px] text-white  sm:w-[30px]">
							Phone
						</TableHead>
						<TableHead className="text-left w-[10px] text-white ">
							Address
						</TableHead>
						<TableHead className="text-left rounded-e-lg w-[10px]  sm:w-[100px] text-white ">
							Action
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{apiData.map((i) => (
						<TableRow
							key={i.id}
							className="bg-[#FCFCFD] border-0 duration-500 group  hover:bg-slate-50  ">
							<TableCell className="text-xs sm:text-base">{i.id}</TableCell>
							<TableCell className="text-xs sm:text-base">{i.name}</TableCell>
							<TableCell className="text-gray-400 text-xs sm:text-base">
								{i.email}
							</TableCell>
							<TableCell className="text-left text-gray-400 text-xs sm:text-base">
								{i.phone}
							</TableCell>
							<TableCell className="text-gray-400 text-xs sm:text-base sm:w-[300px] text-wrap ">
								{i.address}
							</TableCell>

							<TableCell className="text-xs hidden sm:flex sm:text-xl space-x-5">
								<SheetTrigger>
									<button onClick={handleEdit.bind(null, i.id)}>
										<MdOutlineModeEdit className="active:scale-95" />
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

			{apiData.map((i) => (
				<Accordion type="single" collapsible className="w-full sm:hidden">
					<AccordionItem key={i.id} className="mb-1" value="item-1">
						<AccordionTrigger className="text-lg font-semibold">
							{i.name}
						</AccordionTrigger>
						<AccordionContent className="">
							<ul className="flex flex-col  w-full  group    gap-4">
								<li className="flex   text-left  justify-between  px-3  hover:bg-slate-50 duration-500 font-bold  tracking-wide y ">
									Name{" "}
									<p className="text-gray-500 font-medium text-right ">
										{i.name}
									</p>
								</li>

								<li className="flex   text-left  justify-between  px-3  hover:bg-slate-50 duration-500 font-bold  tracking-wide y">
									Email{" "}
									<p className="text-gray-500 font-medium text-right">
										{i.email}
									</p>
								</li>
								<li className="flex   text-left  justify-between  px-3  hover:bg-slate-50 duration-500 font-bold  tracking-wide y ">
									Phone{" "}
									<p className="text-gray-500 text-right font-medium">
										{i.phone}
									</p>
								</li>
								<li className="flex   text-left  justify-between  px-3  hover:bg-slate-50 duration-500 font-bold  tracking-wide y ">
									Address{" "}
									<p className="text-gray-500 font-medium text-right text-wrap">
										{i.address}
									</p>
								</li>

								<li className="flex   text-left  justify-between   px-3  hover:bg-slate-50 duration-500 font-bold  tracking-wide y ">
									Action{" "}
									<div className="flex text-right items-center duration-200 transition-all animate__animated animate__slideInRight gap-2">
										<SheetTrigger>
											<svg
												onClick={handleEdit.bind(null, i.id)}
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-6 active:scale-90 h-6">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
												/>
											</svg>
										</SheetTrigger>

										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											onClick={handleDelete.bind(null, i.id)}
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 text-red-500 active:scale-90 h-6">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
											/>
										</svg>
									</div>
								</li>
							</ul>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			))}

			<SweetAlert2 {...swalProps} />
		</div>
	);
};

export default DataTableTool;
