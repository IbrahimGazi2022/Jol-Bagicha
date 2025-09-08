import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const AnnouncementBar = () => {
    const lines: string[] = [
        "Welcome to the Jol Bagicha",
        "Opening Hours: 9 AM - 6 PM",
        "Contact: 01732 570 530",
        "25% Off All Aquatic Plants Today!"
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
        <div className="w-full bg-gradient-to-r from-green-100 to-emerald-100 flex justify-start overflow-hidden border-b border-green-200">
            <div className="w-[1280px] px-4 md:px-6 lg:px-8 h-10 md:h-12 lg:h-14 flex items-center justify-start relative mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currLine}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="absolute w-full text-center md:text-left text-sm md:text-base lg:text-lg font-medium text-green-900 tracking-wide md:tracking-wider flex items-center justify-center md:justify-start"
                    >
                        <span className="mr-2 md:mr-3 text-lg md:text-xl lg:text-2xl">🌿</span>
                        {lines[currLine]}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default AnnouncementBar;