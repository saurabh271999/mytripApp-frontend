import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-10">
      <div className="footer-top max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Footer Logo */}
          <div className="flex items-center gap-4">
            <img
              src="https://cdn-1.webcatalog.io/catalog/cleartrip/cleartrip-icon-filled-256.png?v=1714777335600s"
              alt="Cleartrip logo"
              className="w-16 md:w-20"
            />
            <div>
              <div className="footer-logo-text text-xl font-bold">Amazingtrip</div>
              <div className="footer-subtext text-sm">A  Company</div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-6 md:gap-10">
            {['About Us', 'Careers', 'FAQs', 'Support', 'Collections', 'Cleartrip for Business', 'Gift Cards'].map((link, index) => (
              <a key={index} href="#" className="text-gray-400 hover:text-white transition duration-300">
                {link}
              </a>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 items-center">
            <span>Connect</span>
            <a href="#" className="text-blue-600 hover:text-blue-500">
              Facebook
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-500">
              Instagram
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-400">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Legal Section */}
        <div className="footer-legal text-sm text-gray-400 mt-8">
          <p>
            © 2025 Saurabh · <a href="#" className="hover:text-white">Privacy</a> · <a href="#" className="hover:text-white">Security</a> · <a href="#" className="hover:text-white">Terms of Use</a> · <a href="#" className="hover:text-white">Grievance Redressal</a>
          </p>
        </div>
      </div>

      {/* Footer Content with Sections */}
      <div className="footer-content max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <FooterSection title="Popular Domestic Flight Routes" items={[
          "Delhi Goa flights", "Mumbai Delhi flights", "Delhi Kolkata flights", "Pune Delhi flights", "Bangalore Delhi flights", "Chennai Delhi flights", "Kolkata Delhi flights", "Delhi Mumbai flights", "Delhi Bangalore flights", "Mumbai Goa flights"
        ]} />

        <FooterSection title="Popular International Flight Routes" items={[
          "Delhi Singapore flights", "Delhi Bangkok flights", "Mumbai Dubai flights", "Delhi Dubai flights", "Delhi to London flights", "Delhi to Toronto flights", "Delhi to New York flights", "Bangalore to Singapore flights", "Delhi to Paris flights", "Mumbai to Paris flights", "Delhi to Hong Kong flights"
        ]} />

        <FooterSection title="Popular Hotels" items={[
          "Goa hotels", "Mumbai hotels", "Bangalore hotels", "Chennai hotels", "Nainital hotels", "Jaipur hotels", "Manali hotels", "Shimla hotels", "Pune hotels", "Hyderabad hotels", "Mahabaleshwar hotels", "Ooty hotels", "Kolkata hotels", "Matheran hotels", "Shirdi hotels", "Agra hotels", "Mysore hotels", "Munnar hotels", "Delhi hotels", "Kodaikanal hotels"
        ]} />

        <FooterSection title="Popular Hotel Chains" items={[
          "Taj group", "Sarovar group of hotels", "V resorts", "Fortune hotels", "Carlson hotels", "Concept", "Royal orchid hotels", "Lemon tree hotels", "Ginger", "Club mahindra", "Clarks inn group of hotels", "Welcomheritage", "Accor group of hotels", "World choice hotels", "Genx/1589 group", "Lords hotels & resorts", "Keys", "Sterling resort", "Golden tulip hotels", "Trident/oberoi hotels"
        ]} />

        <FooterSection title="Other Links" items={[
          "Cheap air tickets", "Flight tickets", "India Hotels", "Cheap Domestic Air Tickets", "Domestic Flights", "Domestic Airlines in India", "International Air Tickets", "International Flights", "International Airlines", "Holiday Packages"
        ]} />

        <FooterSection title="Useful Links" items={[
          "myntra"
        ]} />
      </div>
    </footer>
  );
}

function FooterSection({ title, items }) {
  return (
    <div className="footer-section">
      <h4 className="text-lg font-semibold text-white mb-4">{title}</h4>
      <div className="footer-items space-y-2">
        {items.map((item, idx) => (
          <a key={idx} href="#" className="text-gray-400 hover:text-white transition duration-300">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}
