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
import { useSignoutMutation } from "../../store/services/endpoints/auth.endpoint";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const navComponent = () => {
	const [RemoveFun, { data, isError }] = useSignoutMutation();
	const nav = useNavigate();

	const handleSignOut = async () => {
		localStorage.removeItem("token");
		await RemoveFun();
		nav("/");
		toast.success("Logout Successfully");
	};

	return (
		<div className="">
			<div className=" w-full border-b     h-20   bg-white     px-36 ">
				<div className="flex  pt-4   justify-between items-center ">
					<h1 className="   text-xl tracking-wide  font-semibold ">FNB</h1>
					<div className="flex items-center">
						<button className="hover:border-b hover:border-b-gray-100 select-none active:scale-50 ">
							Logout
						</button>
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</div>
				</div>
			</div>
		</div>
	);
};

export default navComponent;
