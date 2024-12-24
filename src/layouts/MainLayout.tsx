import {FC, ReactNode} from "react";
import Header from "../components/Header";

interface IProps {
    children: ReactNode
}

const MainLayout: FC<IProps> = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            {/* <footer>footer</footer> */}
        </>
    )
}
export default MainLayout