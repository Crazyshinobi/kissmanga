import React from 'react'
import logo from "../assets/brandLogo.png"

export const Header = () => {
    return (
        <>
            <nav className='bg-black text-white'>
                <div className="flex items-center justify-between">
                    <div className='flex-1 py-4 px-3'>
                        <img src={logo} alt="Brand Logo" />
                    </div>
                    <div className='flex-1'>
                        <ul className='flex justify-center gap-8 items-center'>
                            <li>Home</li>
                            <li>Manga List</li>
                            <li>Bookmarks</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
