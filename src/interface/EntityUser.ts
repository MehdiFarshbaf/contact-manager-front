import {IResponseApi,ID} from "./publicInterface";


export interface IUser{
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
export interface IUserType extends ID,IUser{}
export interface IUserListApi extends IResponseApi{
    data:IUserType[]
}
export interface ResultAddUser extends IResponseApi{
    data:IUserType
}