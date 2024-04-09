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
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useLogoutMutation } from "../../store/services/endpoints/auth.endpoint";

const navComponent = () => {
	const [logoutFun] = useLogoutMutation();

	const nav = useNavigate();

	const handleSignOut = async () => {
		localStorage.removeItem("token");
		await logoutFun();
		nav("/");

		toast.success("Logout Successfully");
	};

	return (
		<div className="">
			<div className=" w-full border-b    h-16   sm:h-20   bg-white   px-4   sm:px-36 ">
				<div className="flex  pt-4   justify-between items-center ">
					<h1 className=" text-xl tracking-wide  font-semibold ">FNB</h1>

					
					<DropdownMenu>
						<DropdownMenuTrigger>
							<Avatar className="select-none">
								<AvatarImage
									src="https://github.com/shadcn.png"
									alt="@shadcn"
								/>
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</DropdownMenuTrigger>

						<DropdownMenuContent>
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem className="hover:bg-gray-100 duration-500">
								Profile
							</DropdownMenuItem>
							<DropdownMenuItem className="hover:bg-gray-100 duration-500">
								Setting
							</DropdownMenuItem>
							<DropdownMenuItem
								className="hover:bg-gray-100 flex items-center justify-between duration-500"
								onClick={handleSignOut}>
								Sign Out{" "}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-5 h-5">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
									/>
								</svg>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</div>
	);
};

export default navComponent;
