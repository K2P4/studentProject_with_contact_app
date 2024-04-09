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
			invalidatesTags: ["contact"],
		}),

		Signup: builder.mutation({
			query: (arg) => ({
				url: "/register",
				method: "POST",
				body: arg,
			}),
			invalidatesTags: ["contact"],
		}),

		getProfile: builder.query({
			query: () => ({
				url: "/user-profile",
				method: "GET",
			}),
		}),

		logout: builder.mutation({
			query: () => ({
				url: "/user-logout",
				method: "POST",
			}),
			invalidatesTags: ["contact"],
		}),
	}),
});

export const {
	useSigninMutation,
	useSignupMutation,
	useGetProfileQuery,
	useLogoutMutation,
} = authEndpoints;
