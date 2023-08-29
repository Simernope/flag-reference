import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Header = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    const handleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    return (
        <header
            className='w-full bg-white dark:bg-slate-700 py-8 shadow-lg dark:text-white dark:shadow-slate-600 md:px-16 p-8'>
            <nav className='container mx-auto'>
                <div className='flex items-center justify-between md:flex-row flex-col'>
                    <Link to='/'>
                        <div className='font-bold text-lg'>
                            Where is the world?
                        </div>
                    </Link>
                    <div onClick={handleTheme} className='flex items-center justify-center cursor-pointer'>
                        <span className="material-symbols-outlined pr-2">
                            dark_mode
                        </span>
                        Switch Theme
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header