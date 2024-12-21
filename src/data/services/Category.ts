import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQueryWithReAuth} from "../../config/serviceConfig";
import {CATEGORY_PATH} from "../../config/ApiConfig";
import {CategoryListApi} from "../../interface/EntityCategory";


export const CategoryApi = createApi({
    reducerPath: 'CategoryApi',
    baseQuery: baseQueryWithReAuth,
    tagTypes: ["Category"],

    endpoints: (builder) => ({
        getCategories: builder.query<CategoryListApi, void>({
            query: () => ({
                url: CATEGORY_PATH,
                method: 'GET',
            }),
            providesTags: ['Category'],
        }),
    }),
})
export const {useGetCategoriesQuery} = CategoryApi