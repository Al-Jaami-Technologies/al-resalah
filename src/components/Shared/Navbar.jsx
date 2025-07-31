import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white h-[99px]">
      <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-full">
        {/* <!-- Left section: Logo + Nav items --> */}
        <div className="flex items-center space-x-12">
          <img src="/images/heroPage/logo.svg" alt="Logo" class="h-8 w-auto" />

          {/* <!-- Nav Links (Hidden on small screens) --> */}
          <ul class="hidden md:flex items-center space-x-6 text-sm font-medium text-[1rem] roboto deep-green">
            <li>
              <a href="#" className="hover:text-green-600 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition">
                Pricing
              </a>
            </li>

            {/* <!-- Collapse Dropdown --> */}
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-green-600 transition">
                Resources
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <ul class="absolute top-full left-0 hidden group-hover:block bg-white mt-2 rounded-md p-2 space-y-1 shadow-lg min-w-[140px] z-10">
                <li>
                  <a
                    href="#"
                    className="block px-3 py-1 text-sm deep-green roboto hover:bg-gray-100"
                  >
                    Option 1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-1 text-sm deep-green roboto hover:bg-gray-100"
                  >
                    Option 2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-1 text-sm deep-green roboto hover:bg-gray-100"
                  >
                    Option 3
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* <!-- Right section: Auth buttons --> */}
        <div className="hidden md:flex space-x-4">
          {/* <!-- Log In Button --> */}
          <button
            className="border border-green-800 text-green-800 px-[30px] py-[12px] rounded-[8px] text-[16px] font-medium cursor-pointer
    transition-all duration-300 transform 
    hover:scale-105 hover:shadow-md 
    active:scale-95 active:shadow-inner"
          >
            Log In
          </button>

          {/* <!-- Sign Up Now Button --> */}
          <button
            className="bg_deep-green text-white px-[28px] py-[12px] rounded-[8px] roboto font-medium text-[16px] cursor-pointer
    transition-all duration-300 transform 
    hover:scale-105 hover:bg-green-700 hover:shadow-md 
    active:scale-95 active:shadow-inner"
          >
            Sign Up Now
          </button>
        </div>

        {/* <!-- Mobile hamburger --> */}
        <div className="md:hidden">
          <button id="menu-btn" class="text-gray-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* <!-- Mobile Menu --> */}
      <div id="mobile-menu" className="md:hidden hidden px-4 pb-4">
        <ul class="space-y-2 mt-4 text-gray-700 text-sm font-medium deep-green roboto">
          <li>
            <a
              href="#"
              className="block hover:text-greeb-600 deep-green roboto"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block hover:text-green-600 deep-green roboto"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block hover:text-green-600 deep-green roboto"
            >
              Pricing
            </a>
          </li>

          <li>
            <details class="mt-2">
              <summary class="cursor-pointer hover:text-green-600 deep-green roboto">
                Resources
              </summary>
              <ul class="ml-4 mt-2 space-y-1 deep-green roboto">
                <li>
                  <a href="#" className="block hover:text-green-600">
                    Option 1
                  </a>
                </li>
                <li>
                  <a href="#" className="block hover:text-green-600">
                    Option 2
                  </a>
                </li>
                <li>
                  <a href="#" className="block hover:text-green-600">
                    Option 3
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li class="pt-2">
            <button className="w-full border border-greeb-800 text-green-800 px-4 py-1 rounded hover:bg-gray-100 mb-2 deep-green roboto">
              Login
            </button>
            <button className="w-full bg_deep-green text-white px-5 py-2 rounded hover:bg-green-700 deep-green roboto ">
              Sign In
            </button>
          </li>
        </ul>
      </div>
    </nav>

    // <script>
    //   const menuBtn = document.getElementById('menu-btn');
    //   const mobileMenu = document.getElementById('mobile-menu');
    //   menuBtn.addEventListener('click', () => {
    //     mobileMenu.classList.toggle('hidden');
    //   });
    // </script>
  );
};

export default Navbar;
