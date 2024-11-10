import React from 'react'
import Image from 'next/image'
import { FaSquareInstagram } from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => {
  return (
     <div>
       <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src={require("../../../public/logo.png")} alt="AR" width={100} height={100}
       className='w-21 h-21'
      />
      <span className="ml-3 text-xl"></span>AR Qureshi
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 AR Qureshi  —
     
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link href="https://www.instagram.com/110razaqureshi/" className="text-gray-500">
      <FaSquareInstagram className='text-3xl hover:text-[#fe448b]' />
      </Link>
    </span>
  </div>
</footer>

 
 
    </div>
  )
}

export default Footer