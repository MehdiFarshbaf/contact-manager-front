import {IResponseApi, ID} from "./publicInterface";


export interface ICategory {
    name: string,
    createdAt: string,
    updatedAt: string,
}

export interface ICategoryType extends ID, ICategory {
}

export interface CategoryListApi extends IResponseApi {
    data: ICategoryType[]
}