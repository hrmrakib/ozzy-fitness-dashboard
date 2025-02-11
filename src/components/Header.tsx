"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  if (pathname == "/login" || pathname == "/register") return null;

  return (
    <header className='sticky top-0 z-40 bg p-4 text-white  lg:ml-64'>
      <div className='flex items-center justify-between bg-[#01336F] py-5 px-3'>
        <div className='flex items-center space-x-4'>
          {/* <Image src="/logo.png" alt="OEG" width={40} height={40} className="h-8 w-auto lg:hidden" /> */}
          <div>
            <h1 className='text-base font-medium lg:text-2xl'>
              Welcome, Sharon
            </h1>
            <p className='text-base opacity-75 lg:text-base'>Have a nice day</p>
          </div>
        </div>

        <div className='flex items-center space-x-2'>
          <div className='relative'>
            <span className='absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs'>
              2
            </span>
            <button className='rounded-full bg-blue-900 p-1.5 lg:p-2'>
              <svg
                className='h-4 w-4 lg:h-5 lg:w-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                />
              </svg>
            </button>
          </div>

          <button className='flex items-center space-x-2 rounded-full bg-blue-900 px-2 py-2.5 lg:px-3'>
            <Image
              src='/dashboard/sharon.png'
              width={500}
              height={600}
              alt='Sharon'
              className='h-5 w-5 rounded-full lg:h-6 lg:w-6'
            />
            <span className='text-sm lg:text-base'>Sharon</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
