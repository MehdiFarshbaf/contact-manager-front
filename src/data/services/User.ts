import {createApi} from '@reduxjs/toolkit/query/react'
import {baseQueryWithReAuth} from '../../config/serviceConfig'
import {USER_PATH} from '../../config/ApiConfig'
import {IUserListApi, ResultAddUser, ResultDeleteUser, ResultEditUser, ResultGetUser} from '../../interface/EntityUser'
import {changeToFormData} from '../../utils/functions'
import {ID} from "../../interface/publicInterface";

export const UserApi = createApi({
    reducerPath: 'UserApi',
    baseQuery: baseQueryWithReAuth,
    tagTypes: ['User'],

    endpoints: builder => ({
        getUsers: builder.query<IUserListApi, void>({
            query: () => ({
                url: USER_PATH,
                method: 'GET'
            }),
            providesTags: ['User']
        }),
        getUser: builder.query<ResultGetUser, ID>({
            query: (body) => ({
                url: USER_PATH + "/" + body._id,
                method: 'GET',
            }),
            providesTags: ['User'],
        }),
        addUser: builder.mutation<ResultAddUser, any>({
            query: body => ({
                url: USER_PATH,
                method: 'POST',
                body: changeToFormData(body)
            }),
            invalidatesTags: ['User']
        }),
        editUser: builder.mutation<ResultEditUser, any>({
            query: (body) => ({
                url: USER_PATH + "/" + body._id,
                method: 'PUT',
                body: changeToFormData(body)

            }),
            invalidatesTags: ['User'],
        }),
        deleteUser: builder.mutation<ResultDeleteUser, ID>({
            query: (body) => ({
                url: USER_PATH + "/" + body._id,
                method: 'DELETE',
            }),
            invalidatesTags: ['User'],
        }),
    })
})
export const {useGetUsersQuery, useAddUserMutation, useGetUserQuery,useDeleteUserMutation,useEditUserMutation} = UserApi
