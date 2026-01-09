import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useRef } from "react";
// import MainImg from "../images/WideImage2.jpg";
import MainImg from "../images/Hero-Photo-Alt.jpg";
import slide1 from "../images/Sample-2.jpg";
import slide2 from "../images/Sample-4.jpg";
import slide3 from "../images/Navgrah.jpg";
import AboutUs from "./AboutUs";
import Header from "./Header";
import Gallery from "./Gallery";
import { useNavigate } from "react-router-dom";
import HomeContent from "./HomeContent";
import Vision from "./Vision";
import Mission from "./Mission";
import TempleInfo from "./TempleInfo";
import FooterSr from "./FooterSr";
import HeroImage from "./HeroImage";

function Home() {
  const timer = useRef();
  const navigate = useNavigate();

  const goTo = (pageName) => {
    alert(pageName);
    navigate(`/${pageName}`);
  };

  // Autoplay plugin for Keen Slider
  const autoplay = (slider) => {
    let timeout;
    let mouseOver = false;

    function clearNextTimeout() {
      clearTimeout(timeout);
    }

    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => {
        slider.next();
      }, 1500);
    }

    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });
    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
  };

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 1.2, // 1 full slide + 20% of next slide
        spacing: 15, // space between slides
        origin: "center", // center the active slide
      },
      animation: { duration: 400 }, // slide speed
    },
    [autoplay]
  );

  const importAll = (r) => r.keys().map(r);

  const slides = importAll(
    require.context("../slideImg", false, /\.(png|jpe?g|webp)$/)
  );

  return (
    <div className="bg-[#FFF8E7]">
      <Header />

      {/* <div className="pt-8 px-4 md:pt-10 md:px-8 lg:pt-16 lg:px-16">
        <img
          src={MainImg}
          alt="Hero"
          className="w-full h-[120vh] md:h-[120vh] lg:h-[120vh] object-cover rounded-lg"
        />
      </div> */}
      <HeroImage />

      {/* Carousel */}
      {/* <div
        ref={sliderRef}
        className="keen-slider mt-8 max-w-4xl mx-auto px-4 md:px-0"
        // className="keen-slider mt-8 max-w-4xl mx-auto px-4 md:px-0 h-[350px]"
      >
        {[slide1, slide2, slide3].map((img, idx) => (
          <div
            className="keen-slider__slide"
            // className="keen-slider__slide flex"
            key={idx}
          >
            <img
              src={img}
              alt={`slide ${idx + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow"
              // className="max-h-full max-w-full object-contain bg-black rounded-lg"
            />
          </div>
        ))}
      </div> */}

      <div
        ref={sliderRef}
        // className="keen-slider"
        // className="keen-slider mt-8 max-w-4xl mx-auto px-4 md:px-0 h-[400px]"
        // className="keen-slider mt-8 max-w-4xl mx-auto px-4 md:px-0 h-[350px]" //THIS
        // className="keen-slider mt-8 max-w-4xl mx-auto px-4 md:px-0" //THIS 1
        // className="keen-slider mt-8 max-w-4xl mx-auto px-4 md:px-0"  //THIS mostly
        className="keen-slider mt-8 max-w-full md:max-w-3xl mx-auto px-4"
      >
        {slides.map((img, index) => (
          <div
            key={index}
            // className="keen-slider__slide" //THIS
            className="keen-slider__slide flex items-center justify-center h-[180px] sm:h-[220px] md:h-[300px]" //THIS 1
            // className="keen-slider__slide"
          >
            <img
              src={img}
              alt={`slide-${index}`}
              // className="w-full h-64 object-contain bg-white rounded-lg"
              // className="w-full max-h-full object-cover bg-white rounded-lg" //THIS
              className="w-full h-full object bg-white rounded-lg"
              // className="absolute inset-0 w-full h-full object-contain bg-white rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Home Section */}
      <HomeContent />

      {/* About Us Section */}
      <AboutUs />
      {/* <Gallery /> */}

      {/* Vision Section */}
      <Vision />

      {/* Mission Section */}
      {/* <Mission /> */}

      {/* Temple Info Section */}
      <TempleInfo />
      <div> .</div>

      {/* Footer Section */}
      <FooterSr />
    </div>
  );
}

export default Home;
