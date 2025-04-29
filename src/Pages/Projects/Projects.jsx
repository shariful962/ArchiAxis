import React from "react";
import { Link } from "react-router";
import img1 from "../../assets/projects/img1.png";
import img2 from "../../assets/projects/img2.png";
import img3 from "../../assets/projects/img3.png";
import img4 from "../../assets/projects/img4.png";
import img5 from "../../assets/projects/img5.png";
import img6 from "../../assets/projects/img6.png";
import bgImage from "../../assets/bg.png";

const Projects = () => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-[#F5FFF2] to-[#E5FFE9] py-20 relative">
      
      <h1 class="text-center bg-gradient-to-r from-[#003917] to-[#4DC16F] bg-clip-text text-3xl md:text-5xl text-transparent  font-bold   mb-4">
        Projects
      </h1>
      <div className="hidden  lg:flex items-center justify-center">
        <div className="bg-white border border-main rounded-full px-7 py-4 flex   gap-x-2">
          <Link
            className="px-7 py-3 rounded-full hover:bg-gradient-to-r from-[#003917] to-[#4DC16F] hover:text-white transition-all duration-500"
            to={"/"}
          >
            All
          </Link>
          <Link
            className="px-7 py-3 rounded-full hover:bg-gradient-to-r from-[#003917] to-[#4DC16F] hover:text-white transition-all duration-500"
            to={"/"}
          >
            Interior
          </Link>
          <Link
            className="px-7 py-3 rounded-full hover:bg-gradient-to-r from-[#003917] to-[#4DC16F] hover:text-white transition-all duration-500"
            to={"/"}
          >
            Architecture
          </Link>
          <Link
            className="px-7 py-3 rounded-full hover:bg-gradient-to-r from-[#003917] to-[#4DC16F] hover:text-white transition-all duration-500"
            to={"/"}
          >
            Landscape
          </Link>
          <Link
            className="px-7 py-3 rounded-full hover:bg-gradient-to-r from-[#003917] to-[#4DC16F] hover:text-white transition-all duration-500"
            to={"/"}
          >
            Exibition Booths
          </Link>
        </div>
      </div>

      <div className="imgContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 wrapper px-4 sm:px-6 mt-12">
        <div className="flex flex-col gap-y-1 group relative p-2 border border-black/40 rounded-md">
          <img className="rounded-2xl" src={img1} alt="" />
          <div className="mt-3 flex justify-between items-center">
            <div>
              <p>Aman Mosque</p>
            </div>
            <div>
              <button className="cursor-pointer px-7 py-3  rounded-full bg-gradient-to-r from-[#003917] to-[#4DC16F]  text-white  opacity-0 group-hover:opacity-100  transition duration-300">
                VIEW DETAILS
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-1 group relative p-2  border border-black/40 rounded-md">
          <img className="rounded-2xl" src={img2} alt="" />
          <div className="mt-3 flex justify-between items-center">
            <div>
              <p>Rohima Monjil</p>
            </div>
            <div>
              <button className="cursor-pointer px-7 py-3  rounded-full bg-gradient-to-r from-[#003917] to-[#4DC16F]  text-white  opacity-0 group-hover:opacity-100  transition duration-300">
                VIEW DETAILS
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-1 group relative p-2 border border-black/40 rounded-md">
          <img className="rounded-2xl" src={img3} alt="" />
          <div className="mt-3 flex justify-between items-center">
            <div>
              <p>Star Palles</p>
            </div>
            <div>
              <button className="cursor-pointer px-7 py-3  rounded-full bg-gradient-to-r from-[#003917] to-[#4DC16F]  text-white  opacity-0 group-hover:opacity-100  transition duration-300">
                VIEW DETAILS
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-1 group relative p-2 border border-black/40 rounded-md">
          <img className="rounded-2xl" src={img4} alt="" />
          <div className=" mt-3 flex justify-between items-center">
            <div>
              <p>Taskin Villa</p>
            </div>
            <div>
              <button className="cursor-pointer px-7 py-3  rounded-full bg-gradient-to-r from-[#003917] to-[#4DC16F]  text-white  opacity-0 group-hover:opacity-100  transition duration-300">
                VIEW DETAILS
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-1 group relative p-2 border border-black/40 rounded-md">
          <img className="rounded-2xl" src={img5} alt="" />
          <div className="mt-3 flex justify-between items-center">
            <div>
              <p>RRP Restaurent</p>
            </div>
            <div>
              <button className="cursor-pointer px-7 py-3  rounded-full bg-gradient-to-r from-[#003917] to-[#4DC16F]  text-white  opacity-0 group-hover:opacity-100  transition duration-300">
                VIEW DETAILS
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-1 group relative p-2 border border-black/40 rounded-md">
          <img className="rounded-2xl" src={img6} alt="" />
          <div className="mt-3 flex justify-between items-center">
            <div>
              <p>RRP Restaurent</p>
            </div>
            <div>
              <button className="cursor-pointer px-7 py-3  rounded-full bg-gradient-to-r from-[#003917] to-[#4DC16F]  text-white  opacity-0 group-hover:opacity-100  transition duration-300">
                VIEW DETAILS
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-12 flex justify-center items-center">
        <button className="cursor-pointer px-7 py-3 border border-main rounded-full hover:bg-gradient-to-r from-[#003917] to-[#4DC16F] hover:border-none hover:text-white transition-all duration-500 text-main">
          Show All Projects{" "}
        </button>
      </div>

      <div
        className="absolute bottom-0 left-0 w-[500px] h-[250px] bg-no-repeat bg-cover bg-left z-0 pointer-events-none"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
    </div>
  );
};

export default Projects;
