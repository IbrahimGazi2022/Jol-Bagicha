import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "BEST QUALITY PLANTS",
            heading: "DISCOVER AMAZING VARIETY OF PLANTS",
            description: "Explore a wide selection of healthy, premium plants to bring freshness and beauty into your home or garden.",
            buttonText: "Shop Now",
            image: "/images/slider/1.webp",
        },
        {
            title: "GREEN & FRESH COLLECTION",
            heading: "BRING NATURE CLOSER TO YOUR LIFE",
            description: "Explore a wide selection of healthy, premium plants to bring freshness and beauty into your home or garden.",
            buttonText: "Shop Now",
            image: "/images/slider/2.webp",
        },

    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToNext = () => {
        setCurrentSlide((current) => (current === slides.length - 1 ? 0 : current + 1));
    };

    const goToPrev = () => {
        setCurrentSlide((current) => (current === 0 ? slides.length - 1 : current - 1));
    };

    return (
        <div className="relative w-full h-[500px] md:h-[700px] lg:h-[800px] overflow-hidden slider-height">
            <Navbar />
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-1"
                style={{ backgroundImage: `url('/images/slider/bg.webp')` }}
            ></div>

            {/* Content */}
            <div className="relative z-3 h-full flex items-center">
                <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                    {/* Left side - Text content */}
                    <div className="w-full lg:w-1/2 relative">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 flex flex-col justify-center transition-opacity duration-500 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                <div className="max-w-2xl bg-opacity-90 p-6 md:p-8">
                                    <h3 className="inline-block bg-[#CAD4CC] text-[var(--main-text-color)] px-3 py-1 text-[15px] mb-4 font-semibold tracking-[2px] rounded-full heading">
                                        {slide.title}
                                    </h3>
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--main-text-color)] mb-4 tracking-[1.5px] leading-[1.2] title">
                                        {slide.heading}
                                    </h1>
                                    <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed tracking-[1px]">
                                        {slide.description}
                                    </p>
                                    <button className="bg-[#354E33] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 mobile-button">
                                        {slide.buttonText}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right side - Image */}
                    <div className="hidden lg:block lg:w-1/2 relative">
                        <div className="flex justify-center items-center h-[500px]">
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`absolute w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                                        }`}
                                >
                                    <img
                                        src={slide.image}
                                        alt="Plants"
                                        className="max-h-full max-w-full object-contain"
                                        style={{ width: "auto", height: "auto", maxHeight: "550px" }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute inset-0 z-4 hidden sm:flex items-center justify-between px-4 md:px-8">
                <button
                    onClick={goToPrev}
                    className="bg-opacity-80 text-green-700 w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300  cursor-pointer"
                    aria-label="Previous slide"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={goToNext}
                    className="bg-opacity-80 text-green-700 w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300  cursor-pointer"
                    aria-label="Next slide"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Slider;
