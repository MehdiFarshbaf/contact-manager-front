import {Control, Controller} from "react-hook-form";
import {FC, HTMLProps} from "react";
import {FormComponentProps} from "../../interface/publicInterface";


interface IProps extends FormComponentProps {
    name: string,
    label?: string,
    placeholder?: string,
    type?: "text"|"email",
    classNames?: {
        classContainer?: HTMLProps<HTMLElement>["className"],
        classInput?: HTMLProps<HTMLElement>["className"],
        classError?: HTMLProps<HTMLElement>["className"],
    }
}

const TextInput: FC<IProps> = ({name, control, errors,placeholder, label,type="text", classNames,}) => {
    return (
        <div className={`${classNames?.classContainer}`}>
            <Controller
                render={({field: {onChange, onBlur, value, name, ref}}) => (
                    <input
                        type={type}
                        placeholder={placeholder}
                        className={`inputClass ${classNames?.classInput}`}
                        value={value}
                        onChange={onChange} // send value to hook form
                        onBlur={onBlur} // notify when input is touched
                    />
                )}
                name={name}
                control={control}
            />
            {errors[name] && <p className={`text-red-700 ${classNames?.classError}`}>{errors.firstName?.message}</p>}
        </div>
    )
}
export default TextInput