// import React from "react";
// import { projectData } from "../../data/servicesData/servicesData";


// const Services = () => {
//   return (
//     <div className="w-full h-full bg-gradient-to-r from-[#F5FFF2] to-[#E5FFE9] py-20">
//       <div className="servicesContainer wrapper px-4 sm:px-6">
//         <h1 class="bg-gradient-to-r from-[#003917] to-[#4DC16F] bg-clip-text text-3xl md:text-5xl text-transparent  font-bold   mb-4">
//           WHAT WE DO
//         </h1>
//         <p className="text-justify leading-[24px] tracking-[.5px]">we provide a comprehensive range of services to help our clients create the home or business of their dreams. Our experienced team of architects and designers a re dedicated to creating innovative and sustainable solutions to meet the individual needs of each project. We specialize in residential, commercial and industrial projects and have extensive experience in the design and construction of new buildings and renovations. Our services include architectural design, site selection, zoning analysis, construction management, interior design, landscape design, energy efficiency and sustainability consulting, as well as project management and construction services. We are committed to providing our clients with the highest level of service, quality and value.</p>

//         <div className="mt-20 ">
//           <div className="grid grid-cols-1 md:grid-cols-2">
//           {projectData.map((service)=>(
//             <div key={service.id}>
//               <img src={service.img} alt="" />
//             </div>
//           ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;



// import React from "react";
// import { projectData } from "../../data/servicesData/servicesData";

// const Services = () => {
//   return (
//     <div className="w-full h-full bg-gradient-to-r from-[#F5FFF2] to-[#E5FFE9] py-20">
//       <div className="servicesContainer wrapper px-4 sm:px-6">
        
//         <h1 className="bg-gradient-to-r from-[#003917] to-[#4DC16F] bg-clip-text text-3xl md:text-5xl text-transparent font-bold mb-4">
//           WHAT WE DO
//         </h1>
        
//         <p className="text-justify leading-[24px] tracking-[.5px]">
//           we provide a comprehensive range of services to help our clients create the home or business of their dreams. Our experienced team of architects and designers are dedicated to creating innovative and sustainable solutions to meet the individual needs of each project. We specialize in residential, commercial and industrial projects and have extensive experience in the design and construction of new buildings and renovations. Our services include architectural design, site selection, zoning analysis, construction management, interior design, landscape design, energy efficiency and sustainability consulting, as well as project management and construction services. We are committed to providing our clients with the highest level of service, quality and value.
//         </p>

//         {/* Services Cards */}
//         <div className="mt-20">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {projectData.map((service) => (
//               <div key={service.id} className="relative group overflow-hidden rounded-lg shadow-lg">
//                 {/* Image */}
//                 <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
//                   {/* Button */}
//                   <button className="px-5 py-2 bg-white text-black rounded-full font-semibold hover:bg-main hover:text-white transition-all duration-300">
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Services;


import React from "react";
import { projectData } from "../../data/servicesData/servicesData";

const Services = () => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-[#F5FFF2] to-[#E5FFE9] py-20">
      <div className="servicesContainer wrapper px-4 sm:px-6">
        
        <h1 className="bg-gradient-to-r from-[#003917] to-[#4DC16F] bg-clip-text text-3xl md:text-5xl text-transparent font-bold mb-4">
          WHAT WE DO
        </h1>
        
        <p className="text-justify leading-[24px] tracking-[.5px]">
          we provide a comprehensive range of services to help our clients create the home or business of their dreams. Our experienced team of architects and designers are dedicated to creating innovative and sustainable solutions to meet the individual needs of each project. We specialize in residential, commercial and industrial projects and have extensive experience in the design and construction of new buildings and renovations. Our services include architectural design, site selection, zoning analysis, construction management, interior design, landscape design, energy efficiency and sustainability consulting, as well as project management and construction services. We are committed to providing our clients with the highest level of service, quality and value.
        </p>

        {/* Services Cards */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectData.map((service) => (
              <div key={service.id} className="flex flex-col items-center group overflow-hidden rounded-lg shadow-lg">
                
                {/* Image box */}
                <div className="relative w-full h-full">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-white/55 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    {/* Button */}
                    <button className="px-5 py-2 bg-transparent text-black rounded-full font-semibold border border-main hover:bg-main hover:text-white transition-all duration-300">
                      Text Here
                    </button>
                  </div>
                </div>

                {/* Title */}
                <h2 className="mt-4 text-xl font-semibold text-center">{service.title}</h2>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;


