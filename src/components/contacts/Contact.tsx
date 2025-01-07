import {FC, useEffect} from "react"
import {Link} from "react-router-dom";
import Swal from "sweetalert2"

import {useDeleteUserMutation} from "../../data/services/User";
// types
import {UserType} from "../../interface/EntityUser"

// icons
import {FaTrash} from "react-icons/fa6";
import {FaPen} from "react-icons/fa";
import {FaEye} from "react-icons/fa";

// utils
import {handleShowError} from "../../utils/functions";

interface IProps {
    user: UserType
}


const Contact: FC<IProps> = ({user}) => {

    const [deleteUser, resultDeleteUser] = useDeleteUserMutation()
    const handleDeleteUser = async () => {
        Swal.fire({
            title: "حذف کاربر!",
            text: "آیا از حذف این کاربر اطمینان دارید؟",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "بله",
            cancelButtonText: "خیر"
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    // @ts-ignore
                    deleteUser({_id: user._id})
                } catch (err) {
                    handleShowError(err)
                }
            }
        });
    }

    useEffect(() => {
        if (resultDeleteUser?.data?.success === true) {
            Swal.fire({
                title: "حذف شد!",
                text: resultDeleteUser.data.message,
                confirmButtonText: "متوجه شدم",
                icon: "success"
            });
        }
    }, [resultDeleteUser]);

    return (
        <div
            className="w-full bg-currentLine p-4 rounded-md grid grid-cols-[4fr,7fr,1fr] sm:grid-cols-[4fr,8fr] gap-4 sm:gap-2 sm:p-2 justify-between">
            <div className="">
                <img src={user.image_path} alt={user.firstName}
                     className="w-full object-fill sm:h-full sm:object-fill h-[150px] border-PURPLE border-[1px] rounded-md"/>
            </div>
            {/*info*/}
            <div className="w-full flex flex-col gap-2">
                <div className="bg-white rounded-md text-center flex flex-col justify-evenly h-full">
                    <div className="w-full border-b-[1px] last:border-b-0 border-comment py-2 text-base">نام و نام
                        خانوادگی
                        : <span className="font-bold">{`${user.firstName} ${user.lastName}`}</span></div>
                    <div className="w-full border-b-[1px] last:border-b-0 border-comment py-2 text-base">موبایل : <span
                        className="font-bold">{user.mobile}</span></div>
                    <div className="w-full border-b-[1px] last:border-b-0 border-comment py-2 text-base">آدرس ایمیل
                        : <span
                            className="font-bold">{user.email}</span></div>
                </div>
                <div className="hidden sm:flex flex-row justify-evenly items-center ">
                    <Link to={`/contacts/${user._id}`}
                          className="h-10 w-10 rounded-md flex justify-center items-center cursor-pointer bg-ORANGE"><FaEye/></Link>
                    <Link to={`/contacts/edit/${user._id}`}
                          className="h-10 w-10 rounded-md flex justify-center items-center cursor-pointer bg-CYAN"><FaPen/>
                    </Link>
                    <div className="h-10 w-10 rounded-md flex justify-center items-center cursor-pointer bg-RED"
                         onClick={() => handleDeleteUser()}><FaTrash/></div>

                </div>
            </div>

            {/*actions  hidden in mobile mode  */}
            <div className="flex flex-col justify-evenly items-center sm:hidden ">
                <Link to={`/contacts/${user._id}`}
                      className="h-10 w-10 rounded-md flex justify-center items-center cursor-pointer bg-ORANGE"><FaEye/></Link>
                <Link to={`/contacts/edit/${user._id}`}
                      className="h-10 w-10 rounded-md flex justify-center items-center cursor-pointer bg-CYAN"><FaPen/>
                </Link>
                <div className="h-10 w-10 rounded-md flex justify-center items-center cursor-pointer bg-RED"
                     onClick={() => handleDeleteUser()}><FaTrash/></div>

            </div>
        </div>
    )
}
export default Contact