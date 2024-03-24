/** @format */

import React from "react";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa6";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import FormComponent from "../formComponents/Form.component";

const navComponent = () => {
	return (
		<div className="">
			<Sheet>
				<div className=" w-full border-b     h-20   bg-white  px-52 ">
					<div className="flex  pt-4   justify-between items-center ">
						<h1 className="   text-xl tracking-wide  ">FNB</h1>
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</div>
				</div>

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

					<FormComponent />
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default navComponent;
