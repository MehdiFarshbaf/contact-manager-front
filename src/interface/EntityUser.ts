import {ResponseApi,ID} from "./publicInterface";
import {CategoryType} from "./EntityCategory";


export interface User{
    category_id:string,
    createdAt:string,
    email:string,
    firstName:string,
    fullname:string,
    id:string,
    image:string,
    image_path:string,
    job:string,
    lastName:string
    mobile:string,
    updatedAt:string,
}
export interface UserType extends ID,User{}
export interface UserTypeWithCategory extends ID,UserType{
    category:CategoryType
}
export interface IUserListApi extends ResponseApi{
    data:UserType[]
}
export interface ResultAddUser extends ResponseApi{
    data:UserType
}

export interface ResultGetUser extends ResponseApi{
    data:UserTypeWithCategory
}
export interface ResultDeleteUser extends ResponseApi{
}