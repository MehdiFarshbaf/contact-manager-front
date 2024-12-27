import {FC, useEffect} from "react"
import {Link} from "react-router-dom";
import Swal from "sweetalert2"
// types
import {UserType} from "../../interface/EntityUser"

// icons
import {FaTrash} from "react-icons/fa6";
import {FaPen} from "react-icons/fa";
import {FaEye} from "react-icons/fa";
import {useDeleteUserMutation} from "../../data/services/User";
import {handleShowError} from "../../utils/functions";

interface IProps {
    user: UserType
}


const Contact: FC<IProps> = ({user}) => {


    console.log("user is : ", user)
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
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
            }
        });
    }

    useEffect(() => {
        if(resultDeleteUser?.data?.success === true){
            Swal.fire({
                title: "حذف شد!",
                text: resultDeleteUser.data.message,
                confirmButtonText:"متوجه شدم",
                icon: "success"
            });
        }
    }, [resultDeleteUser]);

    return (
        <div className="w-full bg-currentLine p-4 rounded-md grid grid-cols-[4fr,7fr,1fr] gap-4 justify-between">
            <div className="">
                <img src={user.image_path} alt={user.firstName}
                     className="w-full object-fit h-[150px] border-PURPLE border-[1px] rounded-md"/>
            </div>
            <div className="bg-white rounded-md text-center flex flex-col justify-evenly">
                <div className="w-full border-b-[1px] last:border-b-0 border-comment py-2 text-base">نام و نام خانوادگی
                    : <span className="font-bold">{`${user.firstName} ${user.lastName}`}</span></div>
                <div className="w-full border-b-[1px] last:border-b-0 border-comment py-2 text-base">موبایل : <span
                    className="font-bold">{user.mobile}</span></div>
                <div className="w-full border-b-[1px] last:border-b-0 border-comment py-2 text-base">آدرس ایمیل : <span
                    className="font-bold">{user.email}</span></div>
            </div>
            <div className="flex flex-col justify-evenly items-center">
                <Link to={`/contacts/${user._id}`}
                      className="h-10 w-10 rounded-md flex justify-center items-center cursor-pointer bg-ORANGE"><FaEye/></Link>
                <div className="h-10 w-10 rounded-md flex justify-center items-center cursor-pointer bg-CYAN"><FaPen/>
                </div>
                <div className="h-10 w-10 rounded-md flex justify-center items-center cursor-pointer bg-RED"
                     onClick={() => handleDeleteUser()}><FaTrash/></div>

            </div>
        </div>
    )
}
export default Contact