const NavBar = () => (
  <header>
    <nav class="fixed top-0 w-full z-50 bg-udni-teal border-gray-200 px-4 lg:px-6 py-2.5">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="#" class="flex items-center">
          {/* image tag -> <img src="" class="mr-3 h-6 sm:h-9" alt="Logo" /> */}
          <span class="self-center text-xl lg:text-2xl font-semibold whitespace-nowrap text-white">UDNI Tip2Toe</span>
        </a>
        <div class="flex items-center lg:order-2">
          <a href="#" class="text-white hover:text-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ">Help</a>
          <a class="text-white bg-yellow-500 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-4 lg:px-5 py-2 focus:outline-none ">Connecting to API</a>
        </div>
      </div>
    </nav>
  </header>
);

export default NavBar;

