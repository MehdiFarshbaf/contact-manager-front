import {BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {BASE_URL} from "./ApiConfig";

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
        headers.set("Accept", "application/json")
        return headers
    }
})

export const baseQueryWithReAuth: BaseQueryFn<string | FetchArgs,
    unknown,
    FetchBaseQueryError> = async (args, api, extraOptions: any) => {
    let result = await baseQuery(args, api, extraOptions);
    if(result.error){
        console.log("error is : ",result.error)
    }
    return result
}