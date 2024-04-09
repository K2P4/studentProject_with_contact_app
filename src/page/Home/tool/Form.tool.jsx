/** @format */

import React, { useEffect, useRef } from "react";
import * as yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";

import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";

import { Loader2 } from "lucide-react";
import { SheetClose } from "../../../components/ui/sheet";
import {
	useCreateMutation,
	useUpdateMutation,
} from "../../../store/services/endpoints/contact.endpoint";

const FormTool = ({ editData, handleClose }) => {
	const CloseRef = useRef();

	const [fun, { data, isError, isLoading }] = useCreateMutation();
	const [editFun, updateData] = useUpdateMutation();

	const initialValue = {
		name: editData?.data?.name || "",
		email: editData?.data?.email || "",
		phone: editData?.data?.phone || "",
		address: editData?.data?.address || "",
	};

	const validationSchema = yup.object({
		name: yup
			.string()
			.required("name field is required")
			.min(3, "name must be 3 length"),
		email: yup
			.string()
			.email("that should be email format")
			.required("email field is required"),
		phone: yup
			.string()
			.min(9, "that should be valid phone number")
			.max(11, "that should be valid phone number")
			.required("phone field is required"),
		address: yup.string().required("address is required"),
	});

	const handleSubmit = async (value, action) => {
		if (editData?.data) {
			await editFun({ id: editData.data?.id, ...value });
		} else {
			await fun(value);
		}

		CloseRef.current.click();
	};

	return (
		<div className="header-font  h-full">
			<Formik
				validateOnBlur={false}
				validateOnChange={false}
				validationSchema={validationSchema}
				initialValues={initialValue}
				onSubmit={handleSubmit}>
				{({ handleBlur, handleChange, values, isSubmitting }) => (
					<>
						<Form className="flex flex-col gap-4 h-full justify-between pb-10">
							<div className=" space-y-6 mt-5">
								<div className=" ">
									<Label htmlFor="name">Name</Label>
									<Input
										onBlur={handleBlur}
										value={values.name}
										onChange={handleChange}
										type="text"
										name="name"
										id="name"
									/>
									<ErrorMessage
										className="text-red-500 text-sm"
										component={"p"}
										name="name"
									/>
								</div>
								<div>
									<Label htmlFor="email">Email</Label>
									<Input
										onBlur={handleBlur}
										value={values.email}
										onChange={handleChange}
										type="email"
										name="email"
										id="email"
									/>
									<ErrorMessage
										className="text-red-500 text-sm"
										component={"p"}
										name="email"
									/>
								</div>
								<div>
									<Label htmlFor="phone">Phone</Label>
									<Input
										onBlur={handleBlur}
										value={values.phone}
										onChange={handleChange}
										type="phone"
										name="phone"
										id="phone"
									/>
									<ErrorMessage
										className="text-red-500 text-sm"
										component={"p"}
										name="phone"
									/>
								</div>
								<div>
									<Label htmlFor="address">Address</Label>
									<Input
										onBlur={handleBlur}
										value={values.address}
										onChange={handleChange}
										type="address"
										name="address"
										id="address"
									/>
									<ErrorMessage
										className="text-red-500 text-sm"
										component={"p"}
										name="address"
									/>
								</div>
							</div>
							<div className="flex items-center  gap-2 sm:gap-3">
								<SheetClose ref={CloseRef} className="w-full">
									<Button
										variant="outline"
										disabled={isSubmitting}
										type="button"
										onClick={handleClose}
										className="w-full text-basic hover:text-blue-500 border-basic">
										Cancel
									</Button>
								</SheetClose>

								<Button
									disabled={isSubmitting}
									type="submit"
									className="text-white  w-full active:scale-95  bg-basic hover:bg-blue-500 ">
									{isSubmitting ? (
										<Loader2 className=" mr-2 h-4 w-4 animate-spin" />
									) : (
										<> {editData?.data ? "Update" : "Create"}</>
									)}
								</Button>
							</div>
						</Form>
					</>
				)}
			</Formik>
		</div>
	);
};

export default FormTool;
