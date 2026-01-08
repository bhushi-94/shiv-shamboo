function FooterSr() {
  return (
    <footer className="bg-gray-900 text-white pt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* <footer className="bg-gray-900 text-white"> */}
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"> */}
        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/how-to-reach"
                // target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                How to reach
              </a>
            </li>
            <li>
              <a
                href="/about-us"
                // target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact-us"
                // target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/donation"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                Donation
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.facebook.com/share/1KdDAoCBkX/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UC7zv8sE96RbbMp6BbYrH8CQ"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                Youtube
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/shree_shivshambhomandir?igsh=a251ZHZhaG9nb3Iz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:info@example.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              info@example.org
            </a>
          </p>
          <p className="text-sm mt-2">Phone: +91-123-456-7890</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 py-4">
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Bhushan Date. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default FooterSr;
