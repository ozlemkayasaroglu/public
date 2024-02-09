import React from 'react'
import Link from "next/link";
import Form from './form';

const Banner = () => {
  return (

      <div className="relative isolate overflow-hidden pt-14">
        <img
          src="https://www.estegenchair.com/wp-content/uploads/2022/10/sac-ekimi-yontemleri-nelerdir-esra-gencer-clinic-2022-blog-831x550-1.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-green-900 bg-opacity-60"
          aria-hidden="true"
        ></div>
        <div className="max-w-2xl py-32 sm:py-46 lg:py-54 relative z-50 px-10">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-[#2dd5c9]">
              Hair Transplantation with Healer Turkey
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Do you want to change the look of your hair, feel better, and regain your self-confidence? Achieving the hair of your dreams is noew possible thanks to Healer Turkey.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Healer Turkey performs the most suitable and natral-looking hair tansplantation with specialist doctor staff and experience. 
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="#"
                className="bg-[#2dd5c9] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                WHATSAPP
              </Link>
              <Link
                href="#"
                className="text-sm font-semibold text-white border border-[#2dd5c9] py-2.5 px-3.5"
              >
                FORM
              </Link>
            </div>
          </div>
        </div>
        <Form />
      </div>

  )
}

export default Banner;
