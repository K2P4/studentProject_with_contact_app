/** @format */

import { Apiservice } from "../Apiservice";

const authEndpoints = Apiservice.injectEndpoints({
	endpoints: (builder) => ({
		Signin: builder.query({
			query: () => ({
				url: "/user",
				method: "GET",
			}),
		}),

		Signup: builder.mutation({
			query: (arg) => ({
				url: "/register",
				method: "POST",
				body: arg,
			}),
			invalidatesTags: ["auth"],
		}),

		getProfile: builder.query({
			query: () => ({
				url: "/user",
				method: "GET",
			}),
		}),

		logout: builder.mutation({
			query: () => ({
				url: "/user",
				method: "POST",
			}),
			invalidatesTags: ["auth"],
		}),
	}),
});

export const {
	useSigninQuery,
	useSignupMutation,
	useGetProfileQuery,
	useLogoutMutation,
} = authEndpoints;
