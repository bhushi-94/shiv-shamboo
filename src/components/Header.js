import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
// import logo from "../images/Sample-1.jpg"; // your logo in src/images/logo.png
import logo from "../images/Hero-Photo.jpg"; // your logo in src/images/logo.png

function Header() {
  // fixed top-0 left-0 w-full
  return (
    // <header className="bg-white shadow-md py-3 px-4 md:px-8 lg:px-16 flex justify-between items-center">
    <header className="bg-gray-900 shadow-md py-3 px-4 md:px-8 lg:px-16 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center ">
        <img src={logo} alt="Logo" className="h-10 md:h-12" />
        {/* <span className="ml-2 font-bold text-xl md:text-2xl text-gray-800"> */}
        <span className="ml-2 font-bold text-xl md:text-2xl text-orange-500">
          श्री शिव शंभो चॅरिटेबल ट्रस्ट
        </span>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4 text-gray-700 text-xl">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <FaWhatsapp className="hover:text-green-500 transition-colors" /> */}
          <FaWhatsapp className="hover:text-green-500 transition-all drop-shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
        </a>
        <a
          href="https://www.instagram.com/shree_shivshambhomandir?igsh=a251ZHZhaG9nb3Iz"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <FaInstagram className="hover:text-pink-500 transition-colors" /> */}
          <FaInstagram className="hover:text-pink-500 transition-all drop-shadow-[0_0_6px_rgba(236,72,153,0.6)]" />
        </a>
        <a
          href="https://www.youtube.com/channel/UC7zv8sE96RbbMp6BbYrH8CQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <FaYoutube className="hover:text-red-600 transition-colors" /> */}
          <FaYoutube className="hover:text-red-600 transition-all drop-shadow-[0_0_6px_rgba(239,68,68,0.6)]" />
        </a>
        <a
          href="https://www.facebook.com/share/1KdDAoCBkX/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <FaFacebookF className="hover:text-blue-600 transition-colors" /> */}
          <FaFacebookF className="hover:text-blue-600 transition-all drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]" />
        </a>
      </div>
    </header>
  );
}

export default Header;
