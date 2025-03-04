"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Inter } from "next/font/google"
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { useCart } from './cartcontext';
import Cart from './cart';

const inter = Inter({ subsets: ['latin'] });

const Navbar1 = () => {
    const [showNav, setShowNav] = useState(false);
    const { cart } = useCart();  // Get cart directly
    const cartCount = cart.reduce((total, item) => total + item.qty, 0);  // Calculate total items


    const navItems = [
        { name: "Sneakers", link: "/products" },
        { name: "Formal", link: "/products" },
        { name: "Sports", link: "/products" },
        { name: "Casual", link: "/products" },
    ];

    return (
        <div className='h-[60px] bg-white text-[#22202E] flex flex-col justify-end'>
            <div className='h-[50px] border-b border-gray-300 justify-center items-center mt-3'>
                <div className='flex justify-between items-center'>

                    <h1 className='ml-[28px] font-medium text-[24px] text-[#22202E]'>Shoose</h1>

                    <div className='hidden md:h-[40px] md:p-[4px] md:flex md:justify-center'>
                        <ul className={`${inter.className} flex flex-row item-center justify-center font-medium text-[16px] text-[#22202E] space-x-8`}>
                            {navItems.map((item, i) => (
                                <li key={i}>
                                    <Link href={item.link}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex '>
                        <Link href={''}><CiSearch className="mr-[28px] w-[25px] h-[25px] text-black font-extrabold" /></Link>
                        
                        {/* Cart Icon */}
                        <button className="relative group" onClick={() => setShowNav(!showNav)}>
                            <IoCartOutline className='mr-[28px] w-[25px] h-[25px] text-black font-extralight hover:cursor-pointer ' />
                            <span className="absolute top-[-10px] right-[20px] h-[22px] w-[22px] bg-amber-600 group-hover:bg-black
                            hover:cursor-pointer text-white text-xs font-bold px-2 py-1 rounded-full">
                                {cartCount}
                            </span>
                        </button>

                        <Link href={''}><FaRegUserCircle className='mr-[28px] w-[25px] h-[25px] text-black font-extralight ' /></Link>
                    </div>
                </div>
            </div>

            {/* Pass setShowNav to Cart */}
            <Cart show={showNav} setShow={setShowNav} />
        </div>
    );
}

export default Navbar1;
