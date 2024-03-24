/** @format */

import { Apiservice } from "../Apiservice";

const contactendPoints = Apiservice.injectEndpoints({
	endpoints: (builder) => ({
		createContact: builder.mutation({
			query: (arg) => ({
				url: "/contact",
				method: "POST",
				body: arg,
			}),
		}),
		getContact: builder.query({
			query: () => ({
				url: "/contact",
				method: "GET",
			}),
		}),
	}),
});

export const { useCreateContactMutation, useGetContactQuery } =
	contactendPoints;
