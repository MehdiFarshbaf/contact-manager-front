import { IoMdSearch } from "react-icons/io";

const SearchBox = () => {
    return (
        <div className="w-[400px] h-[38px] border-[1px] border-PURPLE rounded flex items-center overflow-hidden">
            <input type="text" className="h-full w-full outline-none border-none bg-transparent px-2 text-base text-white placeholder:text-white"
                   placeholder="جستجوی مخاطب"/>
            <div className="w-[42px] bg-PURPLE h-full flex justify-center items-center">
             <IoMdSearch size={25}/>
            </div>
        </div>
    )
}
export default SearchBox