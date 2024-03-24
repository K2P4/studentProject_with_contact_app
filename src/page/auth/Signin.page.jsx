/** @format */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import { useSigninMutation } from "../../store/services/endpoints/auth.endpoint";
import { Loader2 } from "lucide-react";
import AuthGuard from "../../components/guard/AuthGuard";

const SigninPage = () => {
	const [fun, data] = useSigninMutation();

	const nav = useNavigate();

	console.log(data, data?.data?.token);

	const initailValue = {
		email: "",
		password: "",
	};

	const handleSignUp = () => {
		nav("/signup");
	};

	useEffect(() => {
		if (data?.data?.success) {
			nav("/home");
		}
	}, [data]);

	const handleSubmit = async (value, action) => {
		console.log(value);

		await fun(value);
		action.reset();
	};

	const validationSchema = yup.object({
		email: yup
			.string()
			.required("email is required")
			.email("invalid email format"),
		password: yup
			.string()
			.required("password is required")
			.min(8, "password shold be 8 letters"),
	});

	return (
		<AuthGuard check={data?.data?.success} token={data?.data?.token}>
			<div className="w-3/5 h-screen   flex flex-col items-center  justify-center m-auto">
				<Card className=" w-3/6 p-4">
					<CardHeader className="flex flex-row  justify-between items-center ">
						<CardTitle className="text-lg  font-medium font-sans ">
							Sign In{" "}
						</CardTitle>
						<CardDescription
							onClick={handleSignUp}
							className="text-sm   active:scale-90 text-basic">
							{" "}
							Don't Have An Account{" "}
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
									<Form className="flex flex-col gap-3">
										<div className="">
											<Label className="text-gray-500 text-md " htmlFor="email">
												Email{" "}
											</Label>
											<Input
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.email}
												className="mt-1 focus:border-0 text-sm text-gray-700"
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
												className="mt-1 focus:border-0 text-gray-700 text-sm"
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

										<Button
											disabled={isSubmitting}
											type="submit"
											className="text-white w-full active:scale-95 mt-5 bg-basic hover:bg-blue-500 ">
											{isSubmitting ? (
												<Loader2 className=" mr-2 h-4 w-4 animate-spin" />
											) : (
												<> Sign In</>
											)}
										</Button>
									</Form>
								</>
							)}
						</Formik>
					</CardContent>
				</Card>
			</div>
		</AuthGuard>
	);
};

export default SigninPage;
