import * as Yup from "yup"
import { useEffect, useState } from "react";
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import TextInput from "../inputs/TextInput";
import { useGetCategoriesQuery } from "../../data/services/Category";
import { OptionSelect } from "../../interface/publicInterface";
import Select, { SingleValue } from "react-select";
import SelectInput from "../inputs/SelectInput";

interface FormInputs {
    firstName: string,
    lastName: string,
    mobile: string,
    email: string,
    job: string,
    category_id: string
}

const AddContacts = () => {

    const { data, isLoading } = useGetCategoriesQuery()

    const [categoryList, setCategoryList] = useState<OptionSelect[]>([])

    const schema = Yup.object().shape({
        firstName: Yup.string().required(("نام الزامی است.")).min(3),
        lastName: Yup.string().required(("نام خانوادگی الزامی است.")),
        mobile: Yup.string().required(("موبایل الزامی است.")),
        job: Yup.string().required(("شغل الزامی است.")),
        category_id: Yup.string().required(("انتخاب دسته بندی الزامی است.")),
        email: Yup.string().email("ایمیل وارد شده معتبر نمی باشد.").required(("ایمیل الزامی است.")),
    });
    const { handleSubmit, control, formState: { errors }, getValues, setValue, reset } = useForm<FormInputs>({
        resolver: yupResolver(schema),
        defaultValues: {}
    })
    const onSubmit = (data: FormInputs) => console.log(data)

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


    return (
        <main className="w-full flex justify-center items-center flex-col">
            <section className="w-full inside">
                <h2 className="font-normal text-center text-GREEN border-b-[1px] border-GREEN py-4">ساخت مخاطب جدید</h2>
            </section>
            <img src={require("../../assets/images/man-taking-note.png")}
                className="h-[400px] absolute z-[-1] top-[130px] left-[100px] opacity-50" alt="" />
            <p className="text-primary opacity-100">hellooo</p>
            <section className="mt-5 w-full inside">
                <div className="w-1/3 ">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                        <TextInput name="firstName" control={control} errors={errors} placeholder="نام" />
                        <TextInput name="lastName" control={control} errors={errors} placeholder="نام خانوادگی" />
                        <TextInput name="mobile" control={control} errors={errors} placeholder="موبایل" />
                        <TextInput name="email" control={control} errors={errors} type="email" placeholder="ایمیل" />
                        <TextInput name="job" control={control} errors={errors} placeholder="شغل" />
                        <SelectInput list={categoryList} name="category_id" control={control} errors={errors} isLoading={isLoading} placeholder="انتخاب دسته بندی" />
                        {/* <Controller render={({ field: { value, onChange } }) => (
                            <Select options={categoryList} classNamePrefix="select"
                                components={{
                                    IndicatorSeparator: null
                                }}
                                onChange={(value: SingleValue<OptionSelect>) => onChange(value?.value)}
                                value={categoryList.find(ele => ele.value === value)}
                                placeholder="انتخاب دسته بندی"
                                classNames={{
                                    control: ({ isFocused }) => isFocused ? '!h-[38px] !w-full !text-white !bg-currentLine !border-[1px] !border-PURPLE !rounded-md outline-none text-white' : '!h-[38px] !w-full !bg-currentLine !text-white !border-[1px] !border-PURPLE !rounded-md outline-none text-white',
                                    placeholder: () => "!text-white",
                                    // input: () => "!text-white",
                                    // valueContainer: () => "!text-white",
                                    singleValue: () => "!text-white",
                                    indicatorsContainer: () => "!text-white"
                                }}
                                isLoading={isLoading}
                            />
                        )} name="category_id" control={control} />
                        {errors.category_id && <p className={`text-red-700 `}>{errors.category_id?.message}</p>} */}


                        <div className="w-full flex justify-center items-center gap-2">
                            <button type="submit" className="btn bg-PURPLE">ساخت مخاطب</button>
                            <Link className="btn bg-comment" to="/contacts">انصراف</Link>
                        </div>
                    </form>
                </div>

            </section>
        </main>
    )
}
export default AddContacts