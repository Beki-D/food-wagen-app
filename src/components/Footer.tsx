import { Instagram, Facebook, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Grid: grid-cols-12 on large */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-8">
          {/* Grouping Div for Company, Contact, and Legal (5/12 total width) */}
          {/* lg:grid-cols-7 for the proportional layout on large screens. */}
          <div className="md:col-span-1 lg:col-span-5 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-7">
            {/* Company Section - col-span-2 on LG */}
            <div className="md:col-span-1 lg:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              {/* Links: flex-col and space-y-2 starts at sm to force vertical stacking */}
              <ul className="flex flex-wrap gap-x-4 sm:flex-col sm:space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section - col-span-2 on LG */}
            <div className="md:col-span-1 lg:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              {/* Links: flex-col and space-y-2 starts at sm to force vertical stacking */}
              <ul className="flex flex-wrap gap-x-4 sm:flex-col sm:space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Help & Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Partner with us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Ride with us
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Section - col-span-3 (1.5x the width of others) on LG */}
            <div className="md:col-span-2 lg:col-span-3">
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              {/* Links: flex-col and space-y-2 starts at sm to force vertical stacking */}
              <ul className="flex flex-wrap gap-x-4 sm:flex-col sm:space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Refund & Cancellation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* End of Grouping Div */}

          {/* A Spacer Column: Takes up 3/12 of the space on lg acts as the large, proportional gap in between. */}
          <div
            className="hidden lg:block lg:col-span-3"
            aria-hidden="true"
          ></div>

          {/* FOLLOW US Section (4/12 total width) */}
          <div className="md:col-span-1 lg:col-span-4">
            <h3 className="text-sm font-semibold mb-4 text-gray-400 uppercase tracking-wider">
              FOLLOW US
            </h3>

            {/* Social Icons */}
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <Twitter size={16} />
              </a>
            </div>

            <p className="text-gray-300 mb-4 text-sm">
              Receive exclusive offers in your mailbox
            </p>

            {/* Email Subscription */}
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="email"
                  placeholder="Enter Your email"
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                />
              </div>
              <button className="px-4 py-2 bg-primary text-white rounded font-medium hover:bg-yellow-500 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="border-gray-700" />

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            All rights Reserved{" "}
            <span className="font-semibold">© Your Company, 2021</span>
          </p>
          <p>
            Made with{" "}
            <Heart className="w-4 h-4 text-primary inline fill-current" /> by{" "}
            <span className="text-white">Themewagon</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
