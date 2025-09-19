import { useEffect, useState } from "react";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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


  return (
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
