import React from 'react'
import logo from '../assets/logo.png' // Ensure this path is correct

const Slogan = () => {
    return (
        <div className='flex flex-col md:flex-row bg-slate-200 justify-between p-4 w-full h-auto md:h-20'>
            <div className='flex items-center space-x-4'>
                <img className='w-24 h-20 ml-4' src={logo} alt="logo" /> {/* Đã thay đổi kích thước logo */}
                <div>
                    <h1 className='text-black font-quicksand text-xl md:text-2xl'>Công ty TNHH OrgaVina</h1>
                    <p className='text-black font-quicksand text-sm'>Công ty chuyên nhập khẩu và phân phối các sản phẩm thực phẩm hữu cơ chất lượng cao</p>
                </div>
            </div>
            <div className='hidden md:flex items-center mt-4 md:mt-0 mr-10'>
                <input
                    type='text'
                    placeholder='Search...'
                    className='px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none'
                />
                <button className='px-4 py-2 bg-blue-900 text-white rounded-r-full hover:bg-blue-700'>
                    Search
                </button>
            </div>
        </div>
    )
}

export default Slogan
