import MainImg from "../images/Hero-Photo-Alt.jpg";

function HeroImage() {
  return (
    <div className="pt-8 px-4 md:pt-10 md:px-8 lg:pt-16 lg:px-16">
      <img
        src={MainImg}
        alt="Hero"
        className="w-full h-auto object-contain rounded-lg"
      />
      {/* <video
        src="video.mp4"
        autoplay
        loop
        muted
        playsinline
        controls="false"
        style="width: 100%; height: auto;"
      ></video> */}
    </div>
  );
}

export default HeroImage;

// import { motion } from "framer-motion";
// import MainImg from "../images/Hero-Photo-Alt.jpg";

// function HeroImage() {
//   return (
//     <div className="pt-8 px-4 md:pt-10 md:px-8 lg:pt-16 lg:px-16">
//       <motion.img
//         src={MainImg}
//         alt="Hero"
//         initial={{ scale: 0.96, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
//         className="w-full h-auto object-contain rounded-lg"
//       />
//     </div>
//   );
// }

// export default HeroImage;
