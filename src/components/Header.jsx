import {cart, kratos, logo, menu} from '../assets/index'
import { Link } from 'react-router-dom';

export default function Header() {
    const navContent = [{id: 1, text: "Home"}, {id: 2, text: "Pages"}, {id: 3, text: "Shop"}, {id: 4, text: "Element"}, {id: 5, text: "Blog"}]

    const displayNav = navContent.map(nav => <li key={nav.id} className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-8 decoration-[3px] cursor-pointer duration-300'>{nav.text}</li>)
    return(
        <div className="w-full h-[68px] sm:h-20 bg-white border-b border-b-gray-800 font-titleFont sticky top-0 z-50">
            <div className="sm:max-w-screen-xl h-full mx-auto flex items-center justify-between p-4 sm:p-0">
                <Link to='/'> 
                    <div>
                        <img src={logo} alt="logo" className='sm:w-16 sm:h-16 w-12 h-12 rounded-full' />
                    </div>
                </Link>
                <div className='hidden sm:block'>
                    <ul className='flex items-center gap-8'>
                       {displayNav}
                    </ul>
                </div>
                <div className='flex gap-5 sm:gap-8  items-center justify-center'>
                    <div className='relative'> 
                        <img src={cart} alt="" />
                        <span className='absolute top-[-20%] right-[-3px] bg-blue-900 text-white p-2 rounded-full w-3 h-3 flex items-center text-xs justify-center'>0</span>
                    </div>
                    <img src={kratos} alt="user-image"  className='w-8 h-8 sm:w-10 sm:h-10'/>
                    <div>
                        <img src={menu} alt="hamburger-menu" className='sm:hidden'/>
                    </div>
                </div>
            </div>
        </div>
    );
}