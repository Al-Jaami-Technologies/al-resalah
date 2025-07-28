import React from "react";

const Navbar = () => {
  return (
    <nav class="bg-white h-[99px]">
    <div class="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-full">

      {/* <!-- Left section: Logo + Nav items --> */}
      <div class="flex items-center space-x-12">
        <img src="/images/heroPage/logo.svg" alt="Logo" class="h-8 w-auto" />

        {/* <!-- Nav Links (Hidden on small screens) --> */}
        <ul class="hidden md:flex items-center space-x-6 text-sm font-medium text-[1rem] roboto deep-green">
          <li><a href="#" class="hover:text-blue-600 transition">About Us</a></li>
          <li><a href="#" class="hover:text-blue-600 transition">Contact</a></li>
          <li><a href="#" class="hover:text-blue-600 transition">Pricing</a></li>
          

          {/* <!-- Collapse Dropdown --> */}
          <li class="relative group">
            <button class="flex items-center gap-1 hover:text-blue-600 transition">
              Resources
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <ul class="absolute top-full left-0 hidden group-hover:block bg-white mt-2 rounded-md p-2 space-y-1 shadow-lg min-w-[140px] z-10">
              <li><a href="#" class="block px-3 py-1 text-sm deep-green roboto hover:bg-gray-100">Option 1</a></li>
              <li><a href="#" class="block px-3 py-1 text-sm deep-green roboto hover:bg-gray-100">Option 2</a></li>
              <li><a href="#" class="block px-3 py-1 text-sm deep-green roboto hover:bg-gray-100">Option 3</a></li>
            </ul>
          </li>
        </ul>
      </div>

      {/* <!-- Right section: Auth buttons --> */}
      <div class="hidden md:flex space-x-4">
        <button class="border border-green-800 text-green-800 px-[30px] py-[12] rounded-[8px] hover:bg-gray-100 text-[16px] font-medium">Log In</button>
        <button class="bg_deep-green text-white px-[28px] py-[12px] rounded-[8px] hover:bg-green-700 roboto font-medium text-[16px]">Sign Up Now</button>
      </div>

      {/* <!-- Mobile hamburger --> */}
      <div class="md:hidden">
        <button id="menu-btn" class="text-gray-700 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>

    {/* <!-- Mobile Menu --> */}
    <div id="mobile-menu" class="md:hidden hidden px-4 pb-4">
      <ul class="space-y-2 mt-4 text-gray-700 text-sm font-medium deep-green roboto">
        <li><a href="#" class="block hover:text-greeb-600 deep-green roboto">About Us</a></li>
        <li><a href="#" class="block hover:text-green-600 deep-green roboto">Contact</a></li>
        <li><a href="#" class="block hover:text-green-600 deep-green roboto">Pricing</a></li>
        
        <li>
          <details class="mt-2">
            <summary class="cursor-pointer hover:text-green-600 deep-green roboto">Resources</summary>
            <ul class="ml-4 mt-2 space-y-1 deep-green roboto">
              <li><a href="#" class="block hover:text-green-600">Option 1</a></li>
              <li><a href="#" class="block hover:text-green-600">Option 2</a></li>
              <li><a href="#" class="block hover:text-green-600">Option 3</a></li>
            </ul>
          </details>
        </li>
        <li class="pt-2">
          <button class="w-full border border-greeb-800 text-green-800 px-4 py-1 rounded hover:bg-gray-100 mb-2 deep-green roboto">Login</button>
          <button class="w-full bg_deep-green text-white px-5 py-2 rounded hover:bg-blue-700 deep-green roboto">Sign In</button>
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
