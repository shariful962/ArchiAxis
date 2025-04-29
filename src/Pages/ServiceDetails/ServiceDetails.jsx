import React from "react";
import { projectData } from "../../data/servicesData/servicesData";
import { useParams } from "react-router";
import bgImage from '../../assets/bg.png'

const ServiceDetails = () => {
  const { id } = useParams();

  const project = projectData.find((service) => service.id === parseInt(id));

  console.log(project);
  return (
    <div className="w-full h-full bg-gradient-to-r from-[#F5FFF2] to-[#E5FFE9] py-20 ">
      <div className="ServiceDetialsContainer wrapper px-4 sm:px-6 relative">
        <h1 class="bg-gradient-to-r from-[#003917] to-[#4DC16F] bg-clip-text text-3xl md:text-5xl text-transparent  font-bold   mb-4">
          ARCHITECTURE
        </h1>
        <p className="font-Inter font-semibold text-[#000000] tracking-[.5px]">
          Offices, House, Shopping Malls, Showrooms, Restaurant and
          Institutional
        </p>

        {/* service details box  */}
        <div className="mt-6 flex flex-col md:flex-row justify-between gap-12">
          {/* text-contnet  */}
          <div className="w-full md:w-1/2">
            <h1 className="font-Inter font-semibold text-[#000000] mb-2">
              Residential
            </h1>
            <p className="font-Inter leading-[24px] tracking-[.5px] text-justify mb-10">
              {project.residential}
            </p>
            <h1 className="font-Inter font-semibold text-[#000000] mb-2">
              Office Building
            </h1>
            <p className="font-Inter leading-[24px] tracking-[.5px] text-justify mb-10">
              {project.residential}
            </p>

            <h1 className="font-Inter font-semibold text-[#000000] mb-2">
              Institutional
            </h1>

            <p className="font-Inter leading-[24px] tracking-[.5px] text-justify mb-10">
              {project.residential}
            </p>
          </div>
          {/* image content  */}
          <div>
            <div>
              <img
                src={project.img}
                alt={project.title}
                className="rounded-lg"
              />
              <p className="text-2xl md:text-center text-main mt-3">
                {project.title}
              </p>
            </div>
          </div>
        </div>
        <div
                className="absolute -bottom-23 left-4 w-[400px] h-[250px] bg-no-repeat bg-contain bg-left z-0 pointer-events-none"
                style={{ backgroundImage: `url(${bgImage})` }}
              ></div>
      </div>
    </div>
  );
};

export default ServiceDetails;
