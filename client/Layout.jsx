import { Outlet } from 'react-router-dom'
import { NavbarCustom } from "./src/components/NavbarCustom";

export const Layout = () => {
    return (
        <div className="flex flex-col">
            <div className='flex flex-row justify-center'>
                <NavbarCustom />
            </div>
            <Outlet />
        </div>
    )
}
