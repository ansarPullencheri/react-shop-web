import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-200 text-black py-10 mt-10">

      <div className="border-t border-gray-700 mb-8"></div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">

        <div>
          <h2 className="text-lg font-bold mb-3">Terms</h2>
          <p className="text-gray-400 hover:text-white cursor-pointer">
            Privacy Policy
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-3">Products</h2>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Web Studio</li>
            <li className="hover:text-white cursor-pointer">DynamicBox Flex</li>
            <li className="hover:text-white cursor-pointer">Programming Forms</li>
            <li className="hover:text-white cursor-pointer">Integrations</li>
            <li className="hover:text-white cursor-pointer">Command-line</li>
          </ul>
        </div>


        <div>
          <h2 className="text-lg font-bold mb-3">Resources</h2>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Docs</li>
            <li className="hover:text-white cursor-pointer">API Reference</li>
            <li className="hover:text-white cursor-pointer">Community</li>
            <li className="hover:text-white cursor-pointer">Support</li>
          </ul>
        </div>


        <div>
          <h2 className="text-lg font-bold mb-3">Company</h2>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>


        <div>
          <h2 className="text-lg font-bold mb-3">Social</h2>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Facebook</li>
            <li className="hover:text-white cursor-pointer">Instagram</li>
            <li className="hover:text-white cursor-pointer">Twitter</li>
            <li className="hover:text-white cursor-pointer">LinkedIn</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © 2025 YourCompany. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
