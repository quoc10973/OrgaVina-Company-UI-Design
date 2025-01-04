import React from 'react'
import logo from '../assets/logo.png' // Ensure this path is correct

const Slogan = () => {
    return (
        <div className='flex bg-slate-200 justify-around space-x-10 p-4 w-full h-20'>
            <div className='flex items-center space-x-4'>
                <img className='w-15 h-10 ml-4' src={logo} alt="logo" />
                <div>
                    <h1 className='text-black font-quicksand text-2xl'>Công ty TNHH OrgaVina</h1>
                    <p className='text-black font-quicksand text-sm'>Công ty chuyên nhập khẩu và phân phối các sản phẩm thực phẩm hữu cơ chất lượng cao</p>
                </div>
            </div>
            <div className='flex items-center mr-10'>
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