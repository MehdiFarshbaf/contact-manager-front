import {ResponseApi, ID} from "./publicInterface";


export interface Category {
    name: string,
    createdAt: string,
    updatedAt: string,
}

export interface CategoryType extends ID, Category {
}

export interface CategoryListApi extends ResponseApi {
    data: CategoryType[]
}