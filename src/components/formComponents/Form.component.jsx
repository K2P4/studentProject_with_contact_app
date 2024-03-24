/** @format */

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import AuthGuard from "../guard/AuthGuard";
import { useCreateContactMutation } from "../../store/services/endpoints/contact.endpoint";

const FormComponent = () => {
	const nav = useNavigate();

	const [fun, data] = useCreateContactMutation();

	console.log(data);

	const initialValue = {
		name: "",
		email: "",
		phone: "",
		address: "",
	};

	const handleCancel = () => {
		nav(-1);
	};

	const validationSchema = yup.object({
		name: yup
			.string()
			.required("need to fill name")
			.min(2, "name should be longer than 4 length"),

		email: yup
			.string()
			.required("need to fill email")
			.email("invalid email format"),

		phone: yup
			.string()
			.required("need to fill phone")
			.min(9, "that should be valid phone number")
			.max(11, "that should be valid phone number"),
		password: yup
			.string()
			.required("need to fill password")
			.min(8, "password shold be 8 letters"),

		address: yup.string().required("need to fill address"),
	});

	const handleSubmit = async (value, action) => {
		console.log(value);
		await fun(value);
		action.reset();
	};

	return (
		<div>
			<AuthGuard>
				<div className="h-full">
					<Formik
						validateOnChange={false}
						validateOnBlur={false}
						validationSchema={validationSchema}
						initialValues={initialValue}
						onSubmit={handleSubmit}>
						{({ isSubmitting, handleChange, handleBlur, values }) => (
							<>
								<Form className="flex flex-col mt-3 justify-between      gap-24 ">
									<div className="flex flex-col h-full gap-2">
										<div className="">
											<Label className="text-gray-500 text-sm " htmlFor="name">
												Name
											</Label>
											<Input
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.name}
												className="mt-1 focus:border-0 "
												name="name"
												type="text"
												id="name"
											/>

											<ErrorMessage
												component={"p"}
												name="name"
												className="text-red-400 text-xs font-medium"
											/>
										</div>

										<div className="">
											<Label className="text-gray-500 text-sm " htmlFor="email">
												Email{" "}
											</Label>
											<Input
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.email}
												className="mt-1 focus:border-0"
												name="email"
												type="email"
												id="email"
											/>

											<ErrorMessage
												component={"p"}
												name="email"
												className="text-red-400 text-xs font-medium"
											/>
										</div>

										<div className="">
											<Label className="text-gray-500 text-sm " htmlFor="phone">
												Phone{" "}
											</Label>
											<Input
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.phone}
												className="mt-1 focus:border-0"
												name="phone"
												type="phone"
												id="phone"
											/>

											<ErrorMessage
												component={"p"}
												name="phone"
												className="text-red-400 text-xs font-medium"
											/>
										</div>

										<div className="">
											<Label
												className="text-gray-500 text-sm "
												htmlFor="address">
												Address
											</Label>
											<Input
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.address}
												className="mt-1 focus:border-0"
												name="address"
												type="text"
												id="address"
											/>

											<ErrorMessage
												component={"p"}
												name="address"
												className="text-red-400 text-xs font-medium"
											/>
										</div>
									</div>

									<div className="flex items-center gap-2 w-full ">
										
											<Button
												variant="outline"
												className="  w-full text-basic hover:text-white  hover:bg-blue-400 ">
												Cancel
											</Button>
										
										<Button
											disabled={isSubmitting}
											type="submit"
											className="text-white  w-full active:scale-95  bg-basic hover:bg-blue-500 ">
											{isSubmitting ? (
												<Loader2 className=" mr-2 h-4 w-4 animate-spin" />
											) : (
												<> Create</>
											)}
										</Button>
									</div>
								</Form>
							</>
						)}
					</Formik>
				</div>
			</AuthGuard>
		</div>
	);
};

export default FormComponent;
