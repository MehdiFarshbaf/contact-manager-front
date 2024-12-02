import {useLocation} from "react-router-dom";
import { BiSolidUserBadge } from "react-icons/bi";
import SearchBox from "./SearchBox";

const Header = ()=>{

    const location = useLocation()


    return(
        <header className="w-full flex justify-center items-center bg-background py-2">
            <div className="inside w-full flex justify-between items-center">
                <div className="flex items-center text-PURPLE">
                    <BiSolidUserBadge size={30} />
                    <p className="text-white text-sm font-bold">وب اپلیکیشن مدیریت <span className="text-PURPLE">مخاطبین</span></p>
                </div>
                {location.pathname === "/contacts" && <SearchBox/>}
            </div>
        </header>
    )
}
export default Header