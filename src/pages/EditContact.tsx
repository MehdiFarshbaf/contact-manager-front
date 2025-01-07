import {Link, useNavigate, useParams} from "react-router-dom";
import { useEffect, useState} from "react";
import {useEditUserMutation, useGetUserQuery} from "../data/services/User";
import * as Yup from "yup";
import { useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useGetCategoriesQuery} from "../data/services/Category";
import {OptionSelect} from "../interface/publicInterface";
import TextInput from "../components/inputs/TextInput";
import SelectInput from "../components/inputs/SelectInput";
import {toast} from "react-toastify";
import ImageUploader from "../components/inputs/ImageUploader";

const EditContact = () => {

    const {contactId} = useParams()
    const {
        data,
        isLoading
    } = useGetUserQuery({_id: contactId ?? ""}, {skip: contactId == null || contactId == "" || contactId == undefined})
    const {data: dataCategory, isLoading: isLoadingCategory} = useGetCategoriesQuery()
    const [categoryList, setCategoryList] = useState<OptionSelect[]>([])
    const [editUser, resultEditUser] = useEditUserMutation()
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

    const onSubmit = (newUser: any) => {
        editUser(newUser)
    }
    useEffect(() => {
        if (data?.success === true) {
            reset({
                _id: data.data._id,
                firstName: data.data.firstName,
                lastName: data.data.lastName,
                mobile: data.data.mobile,
                job: data.data.job,
                category_id: data.data.category_id,
                email: data.data.email,
            })
        }
    }, [data]);
    useEffect(() => {
        if (dataCategory?.success == true) {
            const newList = dataCategory.data.map(item => {
                return {
                    label: item.name,
                    value: item._id
                }
            })
            setCategoryList(newList)
        }
    }, [dataCategory]);

    useEffect(() => {
        if (resultEditUser?.data?.success === true) {
            toast.success(resultEditUser.data.message)
            navigate("/contacts")
        }
    }, [resultEditUser])

    return (
        <main className="w-full flex flex-col justify-center items-center">
            <section className="inside w-full mt-2 my-2 text-center p-3">
                <h3 className="text-CYAN font-bold">ویرایش مخاطب</h3>
            </section>
            <hr className="bg-CYAN w-full"/>
            {!isLoading && <section className="inside w-full mt-2 my-2 text-center p-3 bg-currentLine rounded-md">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full grid grid-cols-[9fr,3fr] gap-4">
                    <div className=" flex flex-col justify-center gap-2">
                        <TextInput name="firstName" control={control} errors={errors} placeholder="نام"/>
                        <TextInput name="lastName" control={control} errors={errors} placeholder="نام خانوادگی"/>
                        <TextInput name="mobile" control={control} errors={errors} placeholder="موبایل"/>
                        <TextInput name="email" control={control} errors={errors} type="email" placeholder="ایمیل"/>
                        <TextInput name="job" control={control} errors={errors} placeholder="شغل"/>
                        <SelectInput list={categoryList} name="category_id" control={control} errors={errors}
                                     isLoading={isLoadingCategory} placeholder="انتخاب دسته بندی"/>
                    </div>
                    <div className="">
                        <ImageUploader name="image" control={control} errors={errors} srcImage={data?.data?.image_path} />
                    </div>
                </form>
                <div className="w-full flex justify-center items-center gap-2 mt-4">
                    <button onClick={() => onSubmit(getValues())} className="btn bg-PURPLE">ویرایش مخاطب</button>
                    <Link className="btn bg-comment" to="/contacts">انصراف</Link>
                </div>
            </section>}
        </main>
    )
}
export default EditContact