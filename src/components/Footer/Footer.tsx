const Footer = () => {
    return (
        <footer className="h-64 md:h-96 lg:h-[350px] bg-cover bg-center text-black font-bold" style={{ backgroundImage: "url('/images/footer/footer.webp')" }} >
            <div className="bg-opacity-60 w-full max-w-[1380px] mx-auto px-4 py-14 flex flex-wrap justify-between gap-y-8">
                {/* Column 1: Logo */}
                <div className="flex-1 min-w-[150px]">
                    <img
                        src="/images/logo/logo.png"
                        alt="Logo"
                        className="w-20 md:w-28 lg:w-48"
                    />
                </div>

                {/* Column 2: Best Selling */}
                <div className="flex-1 min-w-[150px] hidden sm:block">
                    <h1 className="mb-4 text-lg md:text-xl">Best Selling</h1>
                    <ul className="space-y-2 text-sm md:text-base font-normal">
                        <li>Fish Tank</li>
                        <li>Water Filter</li>
                        <li>Aquarium Stones</li>
                        <li>Fish Food</li>
                    </ul>
                </div>

                {/* Column 3: Categories */}
                <div className="flex-1 min-w-[150px] hidden sm:block">
                    <h1 className="mb-4 text-lg md:text-xl">Categories</h1>
                    <ul className="space-y-2 text-sm md:text-base font-normal">
                        <li>Aquarium</li>
                        <li>Accessories</li>
                        <li>Plants</li>
                        <li>Decorations</li>
                    </ul>
                </div>

                {/* Column 4: Customer Care */}
                <div className="flex-1 min-w-[150px]">
                    <h1 className="mb-4 text-lg md:text-xl">Customer Care</h1>
                    <ul className="space-y-2 text-sm md:text-base font-normal">
                        <li>Contact Us</li>
                        <li>FAQ</li>
                        <li>Shipping Policy</li>
                        <li>Return Policy</li>
                    </ul>
                </div>

                {/* Column 5: Follow Us */}
                <div className="flex-1 min-w-[150px]">
                    <h1 className="mb-4 text-lg md:text-xl">Follow Us</h1>
                    <div className="flex space-x-4 mb-4">
                        <img src="/images/social/facebook.svg" alt="Facebook" className="w-6 h-6 md:w-7 md:h-7" />
                        <img src="/images/social/twitter.svg" alt="Twitter" className="w-6 h-6 md:w-7 md:h-7" />
                        <img src="/images/social/youtube.svg" alt="YouTube" className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <p className="text-sm md:text-base font-normal">
                        © {new Date().getFullYear()} Your Company
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
