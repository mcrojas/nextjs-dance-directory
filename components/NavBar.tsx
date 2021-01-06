import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <menu className="flex items-center justify-between flex-wrap bg-white px-0 py-4 my-0 lg:px-12 shadow border-solid border-t-2 border-blue-700">
        <div class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
            <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
                <Link href="/"><a className="font-semibold text-xl tracking-tight">Dance Directory</a></Link>
            </div>
        </div>
        <div className="w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
            <div className="text-md font-bold text-blue-700 lg:flex-grow">
                <Link href="/">
                    <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">Home</a>
                </Link>
                <Link href="/about">
                    <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">About</a>
                </Link>
            </div>
            <div className="relative mx-auto text-gray-600 lg:block hidden">
                <input
                    className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                    type="search" 
                    name="search"
                    placeholder="Search" 
                />
            </div>
        </div>
      </menu>
    </nav>
  );
};

export default Navbar;