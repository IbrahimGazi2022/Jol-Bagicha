import { useEffect, useState } from "react";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 60) {
        setShow(true);
      } else if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-14 left-0 w-full z-50 transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-[300px]"} ${className}`}>
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <div className="flex-shrink-0 mr-4">
              <img
                src="../images/logo/logo.png"
                alt="Logo"
                className="h-12 w-auto sm:h-16 md:h-20 lg:h-28"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 lg:space-x-8 mr-4">
              <a href="/" className="text-sm md:text-[12px] lg:text-lg text-[var(--main-text-color)] hover:text-green-600 font-bold">HOME</a>
              <a href="/page/AllProductsPage" className="text-sm md:text-[12px] lg:text-lg text-[var(--main-text-color)] hover:text-green-600 font-bold">PRODUCTS</a>
              <a href="#" className="text-sm md:text-[12px] lg:text-lg text-[var(--main-text-color)] hover:text-green-600 font-bold">ACCESSORIES</a>
              <a href="#" className="text-sm md:text-[12px] lg:text-lg text-[var(--main-text-color)] hover:text-green-600 font-bold">ABOUT</a>
              <a href="#" className="text-sm md:text-[12px] lg:text-lg text-[var(--main-text-color)] hover:text-green-600 font-bold">CONTACT</a>
            </div>

            {/* Search & Cart */}
            <div className="flex items-center space-x-4">

              {/* Search bar */}
              <div className="relative rounded-full shadow-sm">
                <input
                  type="text"
                  className="py-2 px-4 pr-10 block w-full rounded-md border border-gray-300 
                 focus:outline-none focus:ring-2 focus:ring-[#354E33] focus:border-[#354E33]"
                  placeholder="search..."
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-gray-500 text-lg">+</span>
                </div>
              </div>

              {/* Cart Icon */}
              <button className="relative p-2 rounded-full hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#354E33]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293 2.293a1 1 0 00.707 1.707h12a1 1 0 00.707-1.707L17 13M7 13V6a1 1 0 011-1h8a1 1 0 011 1v7"
                  />
                </svg>
                {/* Optional: Add badge for cart items */}
                <span className="absolute -top-1 -right-1 bg-[#354E33] text-white font-bold rounded-full text-xs w-5 h-5 flex items-center justify-center">5</span>
              </button>

              {/* Mobile menu button */}
              <button className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#354E33]"
                aria-label="Toggle mobile menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(prev => !prev)}
              >
                {mobileOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#354E33]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#354E33]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setMobileOpen(false)}></div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full pt-20 pb-6">
          {/* Close button */}
          <button
            className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMobileOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#354E33]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Mobile Menu Items */}
          <div className="flex flex-col space-y-6 px-6">
            <a href="/" className="text-md text-[var(--main-text-color)] hover:text-green-600 font-bold py-2" onClick={handleLinkClick}>
              HOME
            </a>
            <a href="/page/AllProductsPage" className="text-lg text-[var(--main-text-color)] hover:text-green-600 font-bold py-2" onClick={handleLinkClick}>
              PRODUCTS
            </a>
            <a href="#" className="text-lg text-[var(--main-text-color)] hover:text-green-600 font-bold py-2" onClick={handleLinkClick}>
              ACCESSORIES
            </a>
            <a href="#" className="text-lg text-[var(--main-text-color)] hover:text-green-600 font-bold py-2" onClick={handleLinkClick}>
              ABOUT
            </a>
            <a href="#" className="text-lg text-[var(--main-text-color)] hover:text-green-600 font-bold py-2" onClick={handleLinkClick}>
              CONTACT
            </a>
          </div>

          {/* Mobile Search & Cart */}
          <div className="mt-auto px-6 space-y-4">
            {/* Mobile Search */}
            <div className="relative rounded-full shadow-sm">
              <input
                type="text"
                className="py-2 px-4 pr-10 block w-full rounded-md border border-gray-300 
               focus:outline-none focus:ring-2 focus:ring-[#354E33] focus:border-[#354E33]"
                placeholder="search..."
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span className="text-gray-500 text-lg">+</span>
              </div>
            </div>

            {/* Mobile Cart Button */}
            <button className="w-full flex items-center justify-center p-3 bg-[#354E33] text-white rounded-md hover:bg-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293 2.293a1 1 0 00.707 1.707h12a1 1 0 00.707-1.707L17 13M7 13V6a1 1 0 011-1h8a1 1 0 011 1v7"
                />
              </svg>
              View Cart (5)
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;