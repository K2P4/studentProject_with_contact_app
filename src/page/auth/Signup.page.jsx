/** @format */

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useSignupMutation } from "../../store/services/endpoints/auth.endpoint";
import { Loader2 } from "lucide-react";

const SignupPage = () => {
	const [fun, data] = useSignupMutation();
	const nav = useNavigate();

	

	const initailValue = {
		name: "",
		email: "",
		password: "",
		password_confirmation: "",
	};


	const handleSubmit = async (value) => {
		const response = await fun(value);
		
		if (response.data.success) {
			nav("/");
		}else {
			alert('Try again !')
		}
	};

	const validationSchema = yup.object({
		name: yup
			.string()
			.required("name is required")
			.min(2, "name should be longer than 2"),
		email: yup
			.string()
			.required("email is required")
			.email("invalid email format"),
		password: yup
			.string()
			.min(5, "password must be at least 5 characters")
			.matches(
				/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]/,
				"password must contain at least one letter, one number, and one special character"
			)
			.required("Password is required"),

		password_confirmation: yup
			.string()
			.required("confirm password is required")
			.oneOf(
				[yup.ref("password"), null],

				"password confirm should be match with password"
			),
	});

	return (
		<div className="sm:w-3/5 h-screen   flex flex-col items-center  justify-center m-auto">
			<Card className=" sm:w-3/6 sm:p-4 px-2 py-4">
				<CardHeader className="flex flex-row  items-start   gap-6 sm:gap-0 sm:justify-between sm:items-center ">
					<CardTitle className="sm:text-lg text-md  font-semibold  sm:font-medium font-sans ">
						Sign Up{" "}
					</CardTitle>
					<CardDescription className="sm:text-sm  text-xs tracking-wide text-basic">
						{" "}
						<Link to="/">Already Have An Account</Link>
					</CardDescription>
				</CardHeader>

				<CardContent>
					<Formik
						validateOnChange={false}
						validateOnBlur={false}
						validationSchema={validationSchema}
						initialValues={initailValue}
						onSubmit={handleSubmit}>
						{({ isSubmitting, handleChange, handleBlur, values }) => (
							<>
								<Form className="flex flex-col gap-4 sm:gap-3">
									<div className="">
										<Label className="text-gray-500 text-md " htmlFor="name">
											Username{" "}
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
											name="email"
											className="text-red-500 text-sm font-medium"
										/>
									</div>
									<div className="">
										<Label className="text-gray-500 text-md " htmlFor="email">
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
											className="text-red-500 text-sm font-medium"
										/>
									</div>

									<div className="">
										<Label
											className="text-gray-500 text-md "
											htmlFor="password">
											Password{" "}
										</Label>
										<Input
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.password}
											className="mt-1 focus:border-0"
											name="password"
											type="password"
											id="password"
										/>

										<ErrorMessage
											component={"p"}
											name="password"
											className="text-red-500 text-sm font-medium"
										/>
									</div>

									<div className="">
										<Label
											className="text-gray-500 text-md "
											htmlFor="confirm_password">
											Confirm Password{" "}
										</Label>
										<Input
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.password_confirmation}
											className="mt-1 focus:border-0"
											name="password_confirmation"
											type="password"
											id="password_confirmation"
										/>

										<ErrorMessage
											component={"p"}
											name="confirm_password"
											className="text-red-500 text-sm font-medium"
										/>
									</div>

									<Button
										disabled={isSubmitting}
										type="submit"
										className="text-white w-full active:scale-95 mt-5 bg-basic hover:bg-blue-500 ">
										{isSubmitting ? (
											<Loader2 className=" mr-2 h-4 w-4 animate-spin" />
										) : (
											<> Sign Up</>
										)}
									</Button>
								</Form>
							</>
						)}
					</Formik>
				</CardContent>
			</Card>
		</div>
	);
};

export default SignupPage;
