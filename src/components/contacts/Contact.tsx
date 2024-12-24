import { FC } from "react"
import { IUserType } from "../../interface/EntityUser"

interface IProps {
    user: IUserType
}

const Contact: FC<IProps> = ({ user }) => {
    return (
        <div className="w-full bg-currentLine p-4 rounded-md grid grid-cols-3 gap-4 justify-between">
            <div className="grid-cols-4">
                <img src={user.image_path} alt={user.firstName} className="w-full object-fit h-[200px] border-PURPLE border-[1px] rounded-md" />
            </div>
            <div className="grid-cols-7">
                <p>2</p>
            </div>
            <div className="grid-cols-1">
                <p>2</p>

            </div>
        </div>
    )
}
export default Contact