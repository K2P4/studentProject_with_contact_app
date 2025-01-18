/** @format */

import { Apiservice } from "../Apiservice";

const contactEndPoint = Apiservice.injectEndpoints({
	endpoints: (builder) => ({
		create: builder.mutation({
			query: (arg) => ({
				url: "contacts",
				method: "POST",
				body: arg,
			}),
			invalidatesTags: ["contacts"],
		}),
		get: builder.query({
			query: () => "contacts",
			providesTags: ["contacts"],
		}),
		delete: builder.mutation({
			query: (arg) => ({
				url: `contacts/${arg}`,
				method: "DELETE",
			}),
			invalidatesTags: ["contacts"],
		}),
		update: builder.mutation({
			query: (arg) => ({
				url: `contacts/${arg.id}`,
				method: "PUT",
				body: arg,
			}),
			invalidatesTags: ["contacts"],
		}),
	}),
});

export const { useCreateMutation, useGetQuery, useDeleteMutation ,useUpdateMutation} =
	contactEndPoint;
