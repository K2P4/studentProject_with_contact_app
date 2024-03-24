/** @format */

import { Apiservice } from "../Apiservice";

const authEndpoints = Apiservice.injectEndpoints({
	endpoints: (builder) => ({
		Signin: builder.mutation({
			query: (arg) => ({
				url: "/login",
				method: "POST",
				body: arg,
			}),
		}),

		Signup: builder.mutation({
			query: (arg) => ({
				url: "/register",
				method: "POST",
				body: arg,
			}),
		}),

		getProfile: builder.query({
			query: () => ({
				url: "/user-profile",
				method: "GET",
			}),
		}),
	}),
});

export const { useSigninMutation, useSignupMutation, useGetProfileQuery } =
	authEndpoints;
