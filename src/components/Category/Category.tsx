const Category = () => {
    const categories = [
        { title: "Terrarium Plants", img: "/images/NewProduct/5.jpg" },
        { title: "Aquatic Plants", img: "/images/NewProduct/3.jpg" },
        { title: "Wood Section", img: "/images/NewProduct/7.jpg" },
        { title: "Fish Food", img: "/images/NewProduct/food.jpg" },
        { title: "Planted Aquariums", img: "/images/NewProduct/tank.jpg" },
        { title: "Rock & Stone", img: "/images/NewProduct/stone.jpg" },
        { title: "Aquarium Accessories", img: "/images/NewProduct/acessories.jpg" },
        { title: "Fish", img: "/images/NewProduct/fish.png" },
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 text-center mt-2">
            <div className="text-center mb-8">
                <h2 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-gray-800 mb-4 section-title uppercase">
                    categories
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                    in a piece of classical Latin literature
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        className="relative group border-2 border-[#F1F1F3] overflow-hidden rounded-xl cursor-pointer text-center p-4"
                    >
                        {/* Image */}
                        <img
                            src={cat.img}
                            alt={cat.title}
                            className="w-50 h-50 object-contain mx-auto transition-transform duration-300 group-hover:-translate-y-4"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-[#D8EFE3] bg-opacity-20 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

                        {/* Shop Now Button */}
                        <button className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-[#354E33] text-white px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 group-hover:bottom-4 transition-all duration-300">
                            Shop Now
                        </button>

                        <h3 className="mt-2 text-xl font-semibold text-gray-800 group-hover:hidden">{cat.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
