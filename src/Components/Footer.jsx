import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (

    <div>

   
    <div className='flex flex-row pt-16 pb-40 border-t '>
      
      <div className='ml-20 text-xs'>
        <p className='text-gray-800'>RESOURCES</p>
        <br/>
        <ul className='text-gray-600 flex flex-col gap-2'>
            <li>Terms of sevice</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
        </ul>
      </div>

      <div className='ml-80 text-xs text-gray-600'>
        <p className='text-black'>CONNECT WITH US</p>

   
        <br/>
        <p>Explore our social media channels to read about our<br/>
            latest insights
        </p>

          <div className='flex gap-6 mt-6 text-gray-600'>
           <FaFacebook/>
           <FaTwitterSquare/>
           <FaInstagram/>
           </div>
      </div>
      <div>

      </div>

      
      
    </div>
    <div>
      <p className='flex  mr-80 ml-20 pb-20 text-[10px] text-gray-600 gap-x-2'><FaRegCopyright className='mt-1'/> THE FLOWER COMPANY</p>
        </div>
    </div>
  )
}
