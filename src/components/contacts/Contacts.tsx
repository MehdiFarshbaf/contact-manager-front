import {useGetUsersQuery} from "../../data/services/User";
import {useEffect, useState} from "react";
import {IUserType} from "../../interface/EntityUser";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import {FaCirclePlus} from "react-icons/fa6";

const Contacts = () => {

    const {data, isLoading} = useGetUsersQuery()
    const [users, setUsers] = useState<IUserType[]>()

    useEffect(() => {
        if (data?.success == true) {
            toast.success(data.message)
            setUsers(data.data)
        }
    }, [data]);

    return (
        <main className="w-full flex flex-col justify-center items-center">
            <section className="inside w-full mt-2">
                <Link to="/add-contact"
                      className="mb-2 rounded-md bg-PINK px-[6px] py-3 flex items-center justify-center gap-2 w-[191px]">ساخت
                    مخاطب جدید
                    <FaCirclePlus/>
                </Link>
                {users?.map(user => (
                    <p className="text-white">{user.firstName}</p>
                ))}
            </section>

        </main>
    )
}
export default Contacts