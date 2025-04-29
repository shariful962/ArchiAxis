import React from "react";
import footerLogo from "../../assets/navLogo.png";
import { FiPhoneCall } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router";
import bgRIght from '../../assets/footer-right.png'
import bgLeft from '../../assets/footer-left.png'

const Footer = () => {
  return (
    <div>
      <footer className="bg-main  w-full font-Inter py-10 relative z-20">
        <div className="footerContainer wrapper px-4 sm:px-6">
          {/* footer top  */}
          <div className="flex flex-col md:flex-row gap-8  justify-between">
            {/* get touch  */}
            <div className="text-white">
              <h1 className="mb-4 text-2xl underline">Get Touch</h1>
              <div className="flex gap-x-3 items-center">
                <div>
                  <FiPhoneCall size={24} />
                </div>
                <div className="space-y-2">
                  <p>+8801710221044</p>
                  <p>+8801710221044</p>
                </div>
              </div>
              <div className="mt-6 flex gap-x-3 items-center">
                <div>
                  <BiMessageDetail size={24} />
                </div>
                <div className="space-y-2">
                  <p>mail@archiaxisbd.com</p>
                  <p>archiaxis03@gmail.com</p>
                </div>
              </div>
              <div className="mt-6 flex gap-x-3 items-center">
                <div>
                  <IoLocationOutline size={24} />
                </div>
                <div className="space-y-2">
                  <p>+8801710221044</p>
                  <p>+8801710221044</p>
                </div>
              </div>
            </div>

            {/* services  */}
            <div className="text-white">
              <h1 className="mb-4 text-2xl underline">Services</h1>
              <div className="flex flex-col space-y-6">
                <Link to={"/"}>Architecture Design</Link>
                <Link to={"/"}>Interior Design</Link>
                <Link to={"/"}>Landscape Design</Link>
                <Link to={"/"}>Exhibition Booth Design</Link>
              </div>
            </div>
            {/* follow us  */}
            <div>
              <h1 className="mb-4 text-2xl underline text-white">Follow Us </h1>
              <div className="flex ">
                <div className="flex gap-x-12">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <div className="text-main">
                      <FaFacebookF size={24} />
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <div className="text-main">
                      <FaXTwitter size={24} />
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <div className="text-main">
                      <FaInstagram size={24} />
                    </div>
                  </div>
                </div>
               
              </div>
              <div className="text-left md:text-center mt-7">
              <img src={footerLogo} alt="footer logo" className="inline-block" />
              </div>
            </div>
          </div>
          {/* footer-bottom  */}
          <div className="h-[1px] w-[90%] md:w-2/3 mx-auto bg-[#66A85780] my-12"></div>
          <div>
          <p className="text-base leading-[.5px] text-white text-center">ArchiAxis &copy; {new Date().getFullYear()} All rights reserved</p>
          </div>
          
        </div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-no-repeat bg-contain bg-right z-0 pointer-events-none" style={{ backgroundImage: `url(${bgRIght})` }}></div> 
        <div className="absolute bottom-0 left-0 w-[350px] h-full bg-no-repeat bg-cover bg-left z-0 pointer-events-none" style={{ backgroundImage: `url(${bgLeft})` }}></div> 

      </footer>
    </div>
  );
};

export default Footer;
