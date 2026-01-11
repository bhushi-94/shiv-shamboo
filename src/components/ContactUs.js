import Header from "./Header";
import HeroImage from "./HeroImage";
import FooterSr from "./FooterSr";
import templeImg from "../images/logoMain.png";

function ContactUs() {
  const location = {
    name: "Shiv Shamboo Mandir",
    address: [
      "Shiv Shamboo Mandir, Naudeep Mitra Mandal, Gorai-2 RSC 30",
      "Borivali West, Mumbai, Maharashtra",
      "Mumbai-400092,",
      "Maharashtra, India.",
    ],
    phone: "1234556787",
    email: "info@shiv-shamboo.org.org",
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    location.address.join(" ")
  )}`;

  return (
    <div>
      <Header />
      <HeroImage />

      {/* Background */}
      <div className="bg-[#FAF7F2] py-16">
        {/* Centered Card */}
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-semibold text-center text-[#7A3E00] mb-12">
            Contact Us
          </h1>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
            {/* Left Image */}
            <div className="h-full">
              <img
                src={templeImg}
                alt="Shiv Shamboo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-[#7A3E00] mb-4">
                {location.name}
              </h2>

              <div className="text-gray-700 space-y-1 mb-4">
                {location.address.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>

              <p className="text-gray-700 mb-2">
                <strong>Call:</strong> {location.phone}
              </p>

              <p className="text-gray-700 mb-4">
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${location.email}`}
                  className="text-[#7A3E00] hover:underline"
                >
                  {location.email}
                </a>
              </p>

              {/* Show Map */}
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#7A3E00] font-medium hover:underline"
              >
                📍 show map
              </a>
            </div>
          </div>
        </div>
      </div>

      <FooterSr />
    </div>
  );
}

export default ContactUs;
