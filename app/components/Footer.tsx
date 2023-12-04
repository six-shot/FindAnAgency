import React from 'react'

export default function Footer() {
  return (
    <div className="bg-[#161616e7] text-white pt-20 pb-5 ">
      <div className=" max-w-[1440px] mx-auto px-4">
        <div className="flex flex-col sm:flex-row ">
          <div className="flex  flex-col sm:gap-6">
            <h5>About us</h5>
            <p className="sm:w-[500px]">
              Find an Agency provides a comprehensive directory listing of
              advertising agencies in Nigeria that provide a variety of
              services.
            </p>
          </div>
          <div className="flex flex-col  gap-6">
            <h5>Contact Us</h5>
            <p className="sm:w-[500px]">E-mail: info@findanagency.com.ng</p>
          </div>
          <div className="flex flex-col gap-6">
            <h5>Agencies</h5>
            <ul>
              <li>Digital Agencies</li>
              <li>Traditional Agencies</li>
            </ul>
          </div>
        </div>
        <div className='pt-20'>
          <ul>© 2023 Find An Agency.</ul>
        </div>
      </div>
    </div>
  );
}
