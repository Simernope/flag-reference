import {Outlet} from "react-router-dom";
import Header from "./Header";

const Layout = () => {
    return (
        <div className=' bg-gray-50 w-full dark:bg-slate-800 dark:text-white'>
            <Header/>
            <main className='container mx-auto min-h-[90vh] lg:px-24 sm:px-8 p-8 '>
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout