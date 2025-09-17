const Footer = () => {
    return (
        <footer
            className="h-auto lg:h-[350px] sm:bg-cover bg-contains text-black font-bold"
            style={{ backgroundImage: "url('/images/footer/footer.webp')" }}
        >
            {/* Top part: Footer columns */}
            <div className="bg-opacity-60 w-full max-w-[1380px] mx-auto px-4 py-14 
          grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center sm:text-left">

                {/* Column 1: Logo */}
                <div className="hidden sm:block">
                    <img
                        src="/images/logo/logo.png"
                        alt="Logo"
                        className="w-20 md:w-28 lg:w-48 mx-auto sm:mx-0"
                    />
                </div>

                {/* Column 2: Best Selling */}
                <div className="hidden sm:block">
                    <h1 className="mb-4 text-lg md:text-xl">Best Selling</h1>
                    <ul className="space-y-2 text-sm md:text-base font-normal">
                        <li>Fish Tank</li>
                        <li>Water Filter</li>
                        <li>Aquarium Stones</li>
                        <li>Fish Food</li>
                    </ul>
                </div>

                {/* Column 3: Categories */}
                <div className="hidden sm:block">
                    <h1 className="mb-4 text-lg md:text-xl">Categories</h1>
                    <ul className="space-y-2 text-sm md:text-base font-normal">
                        <li>Aquarium</li>
                        <li>Accessories</li>
                        <li>Plants</li>
                        <li>Decorations</li>
                    </ul>
                </div>

                {/* Column 4: Customer Care */}
                <div>
                    <h1 className="mb-4 text-lg md:text-xl">Customer Care</h1>
                    <ul className="space-y-2 text-sm md:text-base font-normal">
                        <li>Contact Us</li>
                        <li>FAQ</li>
                        <li>Shipping Policy</li>
                        <li>Return Policy</li>
                    </ul>
                </div>

                {/* Column 5: Location */}
                <div>
                    <h1 className="mb-4 text-lg md:text-xl">Office Location</h1>
                    <p className="text-sm md:text-base font-normal mb-2">
                        BK Main Road, Khulna,<br /> Bangladesh
                    </p>
                    <h1 className="mb-2 text-lg md:text-xl">Send a Message</h1>
                    <p className="text-sm md:text-base font-normal">
                        jolbagicha@gmail.com
                    </p>
                </div>
            </div>

            {/* Bottom part: Copyright */}
            <div className="border-t border-gray-300 py-4 text-center text-sm md:text-base font-normal">
                © {new Date().getFullYear()} Jol Bagicha. All Rights Reserved. |
                Designed & Developed by{" "}
                <a
                    href="https://ibrahim-the-coder.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--main-text-color)] hover:underline font-bold"
                >
                    Ibrahim - The Coder
                </a>
            </div>


        </footer>
    );
};

export default Footer;
