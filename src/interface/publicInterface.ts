import {HTMLProps} from "react";

export interface IResponseApi {
    success: boolean,
    message: string
}

export interface ID {
    _id: string
}

export interface IFormComponentProps {
    control?: any
    errors?: any,
    setValue?: Function,
    getValues?: any
}

export interface ClassName {
    className: HTMLProps<HTMLElement>["className"]
}

export interface FormComponentProps {
    control?: any
    errors?: any,
    setValue?: Function,
    getValues?: any
}

export type OptionSelect = { value: string, label: string }