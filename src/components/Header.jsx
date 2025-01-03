import React from 'react'
import { Link } from 'react-router-dom'
import { HomeIcon, InformationCircleIcon, PhoneIcon, UserIcon, ClipboardCheckIcon, ChevronDownIcon } from '@heroicons/react/outline'
import Slogan from './Slogan'
const Header = () => {
    return (
        <div>
            <Slogan />
            <div className="bg-blue-950 p-4 flex justify-around space-x-40">
                <nav>
                    <ul className="flex space-x-10 font-thin font-quicksand">
                        <li className="flex items-center space-x-1">
                            <HomeIcon className="h-4 w-4 text-white" />
                            <Link className="text-white" to="/">Trang chủ</Link>
                        </li>
                        <li className="flex items-center space-x-1">
                            <Link className="text-white" to="/about">Về chúng tôi</Link>
                            <ChevronDownIcon className="h-4 w-4 text-white" />
                        </li>
                        <li className="flex items-center space-x-1">
                            <Link className="text-white" to="/contact">Liên hệ</Link>
                            <ChevronDownIcon className="h-4 w-4 text-white" />
                        </li>
                        <li className="flex items-center space-x-1">
                            <Link className="text-white" to="/contact">Khách hàng</Link>
                            <ChevronDownIcon className="h-4 w-4 text-white" />
                        </li>
                    </ul>
                </nav>
                <nav>
                    <ul className="flex space-x-10 font-thin font-quicksand">
                        <li className="flex items-center space-x-1">
                            <Link className="text-white" to="/">Đăng nhập</Link>
                            <ChevronDownIcon className="h-4 w-4 text-white" />
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default Header