import * as Yup from "yup"
import { useEffect, useState} from "react";
import { useForm} from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup";
import {Link, useNavigate} from "react-router-dom";
import TextInput from "../inputs/TextInput";
import {useGetCategoriesQuery} from "../../data/services/Category";
import {OptionSelect} from "../../interface/publicInterface";
import SelectInput from "../inputs/SelectInput";
import {useAddUserMutation} from "../../data/services/User";
import {toast} from "react-toastify";
import ImageUploader from "../inputs/ImageUploader";

// interface FormInputs {
//     firstName: string,
//     lastName: string,
//     mobile: string,
//     email: string,
//     job: string,
//     category_id: string,
//     image: File
// }

const AddContacts = () => {

    const {data, isLoading} = useGetCategoriesQuery()
    const [categoryList, setCategoryList] = useState<OptionSelect[]>([])
    const [addUser, resultAddUser] = useAddUserMutation()
    const navigate = useNavigate()

    const schema = Yup.object().shape({
        firstName: Yup.string().required(("نام الزامی است.")).min(3),
        lastName: Yup.string().required(("نام خانوادگی الزامی است.")),
        mobile: Yup.string().required(("موبایل الزامی است.")),
        job: Yup.string().required(("شغل الزامی است.")),
        category_id: Yup.string().required(("انتخاب دسته بندی الزامی است.")),
        email: Yup.string().email("ایمیل وارد شده معتبر نمی باشد.").required(("ایمیل الزامی است.")),
    });
    const {handleSubmit, control, formState: {errors}, getValues, setValue, reset} = useForm<any>({
        resolver: yupResolver(schema),
        defaultValues: {}
    })
    const onSubmit = (data: any) => {
        const newUser = {...data}
        addUser(newUser)
    }

    useEffect(() => {
        if (data?.success == true) {
            const newList = data.data.map(item => {
                return {
                    label: item.name,
                    value: item._id
                }
            })
            setCategoryList(newList)
        }
    }, [data]);

    useEffect(() => {
        if (resultAddUser.data?.success == true) {
            toast.success(resultAddUser.data.message)
            navigate("/contacts")
        }
    }, [resultAddUser])

    return (
        <main className="w-full flex justify-center items-center flex-col">
            <section className="w-full inside">
                <h2 className="font-normal text-center text-GREEN border-b-[1px] border-GREEN py-4">ساخت مخاطب جدید</h2>
            </section>
            <img src={require("../../assets/images/man-taking-note.png")}
                 className="h-[400px] absolute z-[-1] top-[130px] left-[100px] opacity-50 sm:hidden" alt=""/>
            <section className="mt-5 w-full inside">
                <div className="w-1/3 sm:w-full">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                        <TextInput name="firstName" control={control} errors={errors} placeholder="نام"/>
                        <TextInput name="lastName" control={control} errors={errors} placeholder="نام خانوادگی"/>
                        <TextInput name="mobile" control={control} errors={errors} placeholder="موبایل"/>
                        <TextInput name="email" control={control} errors={errors} type="email" placeholder="ایمیل"/>
                        <TextInput name="job" control={control} errors={errors} placeholder="شغل"/>
                        <SelectInput list={categoryList} name="category_id" control={control} errors={errors}
                                     isLoading={isLoading} placeholder="انتخاب دسته بندی"/>
                        <ImageUploader name="image" control={control} errors={errors}  text="یک تصویر انتخاب کنید" />
                        <div className="w-full flex justify-center items-center gap-2 mb-10">
                            <button type="submit" className="btn bg-PURPLE sm:w-full">ساخت مخاطب</button>
                            <Link className="btn bg-comment sm:w-full" to="/contacts">انصراف</Link>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}
export default AddContacts