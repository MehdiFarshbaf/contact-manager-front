import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useGetUserQuery} from "../data/services/User";
import { UserTypeWithCategory} from "../interface/EntityUser";

const DetailsContact = () => {

    const {contactId} = useParams()
    const {
        data,
        isLoading
    } = useGetUserQuery({_id: contactId ?? ""}, {skip: contactId == null || contactId == "" || contactId == undefined})
    const [user, setUser] = useState<UserTypeWithCategory | undefined>()


    useEffect(() => {
        if (data?.success === true) {
            setUser(data.data)
        }
    }, [data]);

    return (
        <main className="w-full flex flex-col justify-center items-center">
            <section className="inside w-full mt-2 my-2 text-center p-3">
                <h3 className="text-CYAN font-bold">اطلاعات مخاطب</h3>
            </section>
            <hr className="bg-CYAN w-full"/>
            {!isLoading && <section className="inside w-full mt-2 my-2 text-center p-3 bg-currentLine rounded-md">
                <div className="w-full grid grid-cols-[3fr,9fr] sm:grid-cols-[5fr,7fr] gap-4 sm:gap-2 sm:max-h-[200px]">
                    <div className="">
                        <img src={user?.image_path} alt={user?.firstName}
                             className="border-[1px] border-PURPLE rounded-md sm:h-[210px]"/>
                    </div>
                    <div className="bg-white rounded-md text-center flex flex-col justify-evenly">
                        <div className="w-full border-b-[1px] last:border-b-0 border-comment py-2 text-base sm:text-sm">نام
                            : <span className="font-bold">{`${user?.firstName} ${user?.lastName}`}</span></div>
                        <div className="w-full border-b-[1px] last:border-b-0 border-comment py-2 text-base sm:text-sm">موبایل
                            : <span
                                className="font-bold">{user?.mobile}</span></div>
                        <div className="w-full border-b-[1px] last:border-b-0 border-comment py-2 text-base sm:text-sm"> ایمیل
                            : <span
                                className="font-bold">{user?.email}</span></div>
                        <div className="w-full border-b-[1px] last:border-b-0 border-comment py-2 text-base sm:text-sm">شغل
                            : <span
                                className="font-bold">{user?.job}</span></div>
                        <div className="w-full border-b-[1px] last:border-b-0 border-comment py-2 text-base sm:text-sm">گروه
                            : <span
                                className="font-bold">{user?.category.name}</span></div>
                    </div>

                </div>
                <div className="w-full my-2 sm:my-6 flex justify-center">
                    <Link to="/contacts" className="btn bg-PURPLE text-white w-[300px]">برگشت به صفحه ی اصلی</Link>
                </div>

            </section>}
        </main>
    )
}
export default DetailsContact