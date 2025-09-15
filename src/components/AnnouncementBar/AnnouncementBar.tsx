import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const AnnouncementBar = () => {
    const lines: string[] = [
        "Welcome to the Jol Bagicha",
        "Opening Hours: 9 AM - 6 PM",
        "Contact: 01965 546 785",
        "Email: jolbagicha@gmail.com",
        "Hello Everyone! Get 25% Off All Products Today!"
    ];

    const [currLine, setCurrLine] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrLine((prevIndex: number) =>
                prevIndex === lines.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [lines.length]);

    return (
        <div className="w-full bg-gradient-to-r from-[#d8f1e4] to-[#d9f4e2] flex justify-start overflow-hidden border-b border-green-200">
            <div className="w-[1480px] px-4 md:px-6 lg:px-8 h-10 md:h-12 lg:h-10 flex items-center justify-between relative mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currLine}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="text-center md:text-left text-sm md:text-base lg:text-md font-medium text-green-900 tracking-wide md:tracking-wider flex items-center md:justify-start capitalize"
                    >
                        <span className="mr-2 md:mr-1.5 text-lg md:text-xl lg:text-xl">🌿</span>
                        {lines[currLine]}
                    </motion.div>
                </AnimatePresence>

                {/* Social Icons */}
                <div className="flex items-center space-x-4 absolute right-7">

                    {/* Facebook */}
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/images/social/facebook.svg"
                            alt="Facebook"
                            className="w-7.5 h-7.5 md:w-10 md:h-10 hover:scale-110 transition-transform"
                        />
                    </a>

                    {/* YouTube */}
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/images/social/youtube.svg"
                            alt="YouTube"
                            className="w-5 h-5 md:w-7 md:h-7 hover:scale-110 transition-transform"
                        />
                    </a>

                    {/* Twitter */}
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/images/social/twitter.svg"
                            alt="Twitter"
                            className="w-5 h-5 md:w-7 md:h-7 hover:scale-110 transition-transform"
                        />
                    </a>


                </div>
            </div>
        </div>
    );
};

export default AnnouncementBar;