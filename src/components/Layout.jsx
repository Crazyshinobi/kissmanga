import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className='flex-1'>
                <main className='max-w-[1280px] mx-auto'>{children}</main>
            </div>
            <Footer />
        </div>
    )
}
