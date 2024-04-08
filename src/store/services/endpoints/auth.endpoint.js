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
			invalidatesTags: ["auth"],
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
				url: "/user-profile",
				method: "GET",
			}),
			providesTags: ["contact"],
		}),

		Signout: builder.mutation({
			query: (arg) => ({
				url: "user-logout",
				method: "POST",
				body: arg,
			}),
			invalidatesTags: ["auth"],
		}),
	}),
});

export const { useSigninMutation, useSignupMutation, useGetProfileQuery ,useSignoutMutation} =
	authEndpoints;
