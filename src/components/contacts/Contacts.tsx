import { useGetUsersQuery } from "../../data/services/User";
import { useEffect, useState } from "react";
import { UserType } from "../../interface/EntityUser";
import { Link } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
import Contact from "./Contact";

const Contacts = () => {

    const { data, isLoading } = useGetUsersQuery()
    const [users, setUsers] = useState<UserType[]>()

    useEffect(() => {
        if (data?.success == true) {
            setUsers(data.data)
        }
    }, [data]);

    return (
        <main className="w-full flex flex-col justify-center items-center mb-10">
            <section className="inside w-full mt-2">
                <Link to="/add-contact"
                    className="mb-2 rounded-md bg-PINK px-[6px] py-3 flex items-center justify-center gap-2 w-[191px]">ساخت
                    مخاطب جدید
                    <FaCirclePlus />
                </Link>
                <div className="w-full grid sm:grid-cols-1 grid-cols-2 gap-4">
                    {users?.map(user => (
                        <Contact key={user._id} user={user} />
                    ))}
                </div>

            </section>

        </main>
    )
}
export default Contacts