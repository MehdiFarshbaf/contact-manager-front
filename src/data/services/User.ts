import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQueryWithReAuth} from "../../config/serviceConfig";
import {USER_PATH} from "../../config/ApiConfig";
import {IUserListApi} from "../../interface/EntityUser";


export const UserApi = createApi({
    reducerPath: 'UserApi',
    baseQuery: baseQueryWithReAuth,
    tagTypes: ["User"],

    endpoints: (builder) => ({
        getUsers: builder.query<IUserListApi, void>({
            query: () => ({
                url: USER_PATH,
                method: 'GET',
            }),
            providesTags: ['User'],
        }),
        // BlogDetail: builder.query<BlogDetail, ID>({
        //     query: (body) => ({
        //         url: BLOG_GET_PATH+"/"+body.id,
        //         method: 'GET',
        //     }),
        //     providesTags: ['Blog'],
        // }),
        // BlogAdd: builder.mutation<any, BlogAddPropsApi>({
        //     query: (body) => ({
        //         url: BLOG_PATH,
        //         method: 'POST',
        //
        //         body: ChangeToFormData(body)
        //     }),
        //     invalidatesTags: ['Blog'],
        // }),
        //
        // BlogEdit: builder.mutation<void, BlogUpdatePropsApi>({
        //     query: ({ id, ...res }) => ({
        //         url: BLOG_PATH + "/" + id,
        //         method: 'POST',
        //         body: ChangeToFormData({...res,...{"_method":"PUT"}})
        //
        //     }),
        //     invalidatesTags: ['Blog'],
        // }),
        //
        // BlogRemove: builder.mutation<void, BlogRemovePropsApi>({
        //     query: (body) => ({
        //         url: BLOG_PATH + "/" + body.id,
        //         method: 'DELETE',
        //
        //     }),
        //     invalidatesTags: ['Blog'],
        // }),
    }),
})
export const {useGetUsersQuery} = UserApi