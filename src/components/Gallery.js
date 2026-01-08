function Gallery() {
  const events = [
    {
      name: "Maha Shivratri",
      images: [
        require("../images/MahaShivratri/img1.jpg"),
        require("../images/MahaShivratri/img2.jpg"),
        require("../images/MahaShivratri/img3.jpg"),
      ],
    },
    {
      name: "Ram Navami",
      images: [
        require("../images/RamNavami/img1.jpg"),
        require("../images/RamNavami/img2.jpg"),
        require("../images/RamNavami/img3.jpg"),
        require("../images/RamNavami/img4.jpg"),
        require("../images/RamNavami/img5.jpg"),
      ],
    },
    {
      name: "Holi",
      images: [
        require("../images/Holi/img1.jpg"),
        require("../images/Holi/img2.jpg"),
        require("../images/Holi/img3.jpg"),
        require("../images/Holi/img4.jpg"),
      ],
    },
    {
      name: "Shravan",
      images: [
        require("../images/Shravan/img1.jpg"),
        require("../images/Shravan/img2.jpg"),
        require("../images/Shravan/img3.jpg"),
        require("../images/Shravan/img4.jpg"),
      ],
    },
    {
      name: "Navaratri",
      images: [
        require("../images/Navaratri/img2.jpg"),
        require("../images/Navaratri/img3.jpg"),
        require("../images/Navaratri/img4.jpg"),
        require("../images/Navaratri/img5.jpg"),
        require("../images/Navaratri/img1.jpg"),
      ],
    },
  ];

  return (
    <div className="pt-16 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Gallery
      </h2>

      {events.map((event, idx) => (
        <div key={idx} className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">{event.name}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {event.images.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-lg shadow">
                <img
                  src={img}
                  alt={`${event.name} ${i + 1}`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
