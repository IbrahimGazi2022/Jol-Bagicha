const products = [
    { id: 1, title: "American Marigold", img: "/images/NewProduct/4.jpg", price: "$15.49" },
    { id: 2, title: "Black Eyed Susan", img: "/images/NewProduct/2.jpg", price: "$10.99" },
    { id: 3, title: "Bleeding Heart", img: "/images/NewProduct/3.jpg", price: "$12.49" },
    { id: 4, title: "Garden Phlox", img: "/images/NewProduct/4.jpg", price: "$9.99" },
    { id: 1, title: "American Marigold", img: "/images/NewProduct/4.jpg", price: "$15.49" },
    { id: 2, title: "Black Eyed Susan", img: "/images/NewProduct/2.jpg", price: "$10.99" },
    { id: 3, title: "Bleeding Heart", img: "/images/NewProduct/3.jpg", price: "$12.49" },
    { id: 4, title: "Garden Phlox", img: "/images/NewProduct/4.jpg", price: "$9.99" },
    { id: 1, title: "American Marigold", img: "/images/NewProduct/4.jpg", price: "$15.49" },
    { id: 2, title: "Black Eyed Susan", img: "/images/NewProduct/2.jpg", price: "$10.99" },
    { id: 3, title: "Bleeding Heart", img: "/images/NewProduct/3.jpg", price: "$12.49" },
    { id: 4, title: "Garden Phlox", img: "/images/NewProduct/4.jpg", price: "$9.99" },
]; 

const NewProducts = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center mb-8">
                <h2 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-gray-800 mb-4 section-title">
                    NEW PRODUCTS
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                    in a piece of classical Latin literature
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {products.map((product) => (
                    <div key={product.id} className="flex flex-col items-center">
                        <div className="h-64 w-full flex items-center justify-center">
                            <img
                                src={product.img}
                                alt={product.title}
                                className="h-full object-cover"
                            />
                        </div>
                        <div className="mt-2 text-center">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
                            <p className="text-[#354E33] font-bold mb-2">{product.price}</p>
                            <div className="flex justify-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-yellow-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.951a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.951c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.286-3.951a1 1 0 00-.364-1.118L2.034 9.378c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.951z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewProducts;
