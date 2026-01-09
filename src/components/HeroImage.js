// import MainImg from "../images/Hero-Photo-Alt.jpg";

// function HeroImage() {
//   return (
//     <div className="pt-8 px-4 md:pt-10 md:px-8 lg:pt-16 lg:px-16">
//       <img
//         src={MainImg}
//         alt="Hero"
//         className="w-full h-[120vh] md:h-[120vh] lg:h-[120vh] object-cover rounded-lg"
//       />
//     </div>
//   );
// }

// export default HeroImage;

import MainImg from "../images/Hero-Photo-Alt.jpg";

function HeroImage() {
  return (
    <div className="pt-8 px-4 md:pt-10 md:px-8 lg:pt-16 lg:px-16">
      <img
        src={MainImg}
        alt="Hero"
        className="w-full h-auto object-contain rounded-lg"
      />
    </div>
  );
}

export default HeroImage;
