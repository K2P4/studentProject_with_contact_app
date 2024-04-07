/** @format */

import { Apiservice } from "../Apiservice";

const contactEndPoint = Apiservice.injectEndpoints({
	endpoints: (builder) => ({
		create: builder.mutation({
			query: (arg) => ({
				url: "contact",
				method: "POST",
				body: arg,
			}),
			invalidatesTags: ["contact"],
		}),
		get: builder.query({
			query: () => "contact",
			providesTags: ["contact"],
		}),
		delete: builder.mutation({
			query: (arg) => ({
				url: `contact/${arg}`,
				method: "DELETE",
			}),
			invalidatesTags: ["contact"],
		}),
	}),
});

export const { useCreateMutation, useGetQuery,useDeleteMutation} = contactEndPoint;
