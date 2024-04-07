/** @format */

import React from "react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Loader2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaPlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const navComponent = () => {
	

	return (
		<div className="">
			<div className=" w-full border-b     h-20   bg-white  px-52 ">
				<div className="flex  pt-4   justify-between items-center ">
					<h1 className="   text-xl tracking-wide  font-semibold ">FNB</h1>
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</div>
			</div>

		
		</div>
	);
};

export default navComponent;
