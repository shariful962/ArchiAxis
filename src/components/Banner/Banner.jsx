// import { useState } from "react";
// import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
// import slide1 from '../../assets/slider1.png'
// import slide2 from '../../assets/slider2.png'

// const slides = [
//   {
//     image: slide1,
//     topTitle: "Crafted with innovation and excellence.",
//     midTitle: "We Provide",
//     title: "ARCHITECTURE D/",
//     buttonText: "Our Services"
//   },
//   {
//     image: slide2,
//     topTitle: "Crafted with innovation and excellence.",
//     midTitle: "We Provide",
//     title: "ARCHITECTURE D/",
//     buttonText: "Our Services"
//   },
 
  
// ];

// const Banner = () => {
//   const [current, setCurrent] = useState(0);

//   const nextSlide = () => {
//     setCurrent((current + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrent((current - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div className="relative w-full h-[700px] overflow-hidden">
//       <div
//         className="w-full h-full bg-cover bg-center transition-all duration-700"
//         style={{ backgroundImage: `url(${slides[current].image})` }}
//       >
//         <div className="w-full h-full bg-black/50 flex flex-col justify-center items-center text-center text-white p-4">
//           <h1 className="text-4xl font-bold mb-4">{slides[current].title}</h1>
//           <p className="text-lg">{slides[current].description}</p>
//         </div>
//       </div>

//       {/* Arrow buttons */}
//       <div className="absolute bottom-4 right-4 flex flex-col space-y-4">
//         <button
//           onClick={prevSlide}
//           className="bg-white text-black p-2 rounded-full hover:bg-gray-300"
//         >
//           &#8593;
//         </button>
//         <button
//           onClick={nextSlide}
//           className="bg-white text-black p-2 rounded-full hover:bg-gray-300"
//         >
//           &#8595;
//         </button>
//       </div>

//       {/* Social Icons */}
//       <div className="absolute top-4 right-15 flex flex-col items-center space-y-4 text-white text-2xl z-20">
//       <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer">
//           <div className="text-main">
//             <FaFacebookF size={24} />
//           </div>
//         </div>
//         <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer">
//           <div className="text-main">
//             <FaXTwitter size={24} />
//           </div>
//         </div>
//         <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer">
//           <div className="text-main">
//             <FaInstagram size={24} />
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Banner;


import { useState } from "react";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import slide1 from '../../assets/slider1.jpg';
import slide2 from '../../assets/slider2.jpg';

const slides = [
  {
    image: slide1,
    topTitle: "Crafted with innovation and excellence.",
    midTitle: "We Provide",
    title: "ARCHITECTURE D/",
    buttonText: "Our Services"
  },
  {
    image: slide2,
    topTitle: "Crafted with innovation and excellence.",
    midTitle: "We Provide",
    title: "ARCHITECTURE D/",
    buttonText: "Our Services"
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${slides[current].image})` }}
      >
        <div className="w-full h-full bg-black/50 flex flex-col justify-center items-center text-center text-white p-4 space-y-4">
          <h3 className="text-lg tracking-widest">{slides[current].topTitle}</h3>
          <h2 className="text-3xl md:text-5xl font-semibold">{slides[current].midTitle}</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold">{slides[current].title}</h1>
          <button className="mt-6 px-8 py-3 bg-white text-main rounded-full font-semibold hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 transition-all duration-500">
            {slides[current].buttonText}
          </button>
        </div>
      </div>

      {/* Arrow buttons */}
      <div className="absolute bottom-4 right-4 flex flex-col space-y-4 z-30">
        <button
          onClick={prevSlide}
          className="bg-white text-black p-2 rounded-full hover:bg-gray-300 transition-all"
        >
          &#8593;
        </button>
        <button
          onClick={nextSlide}
          className="bg-white text-black p-2 rounded-full hover:bg-gray-300 transition-all"
        >
          &#8595;
        </button>
      </div>

      {/* Social Icons */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 flex flex-col items-center space-y-4 text-white text-2xl z-20">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
          <FaFacebookF className="text-main" />
        </div>
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
          <FaXTwitter className="text-main" />
        </div>
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
          <FaInstagram className="text-main" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
