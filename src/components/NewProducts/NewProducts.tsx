const NewProducts = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">NEW PRODUCTS</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                    in a piece of classical Latin literature
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Product 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
                        <img
                            src="/images/NewProduct/1.jpg"
                            alt="American Marigold"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">American Marigold</h3>
                        <p className="text-gray-600 mb-4">Bright yellow flowers that bloom throughout summer and fall.</p>
                        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                            View Details
                        </button>
                    </div>
                </div>

                {/* Product 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
                        <img
                            src="/images/NewProduct/2.jpg"
                            alt="Black Eyed Susan"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Black Eyed Susan</h3>
                        <p className="text-gray-600 mb-4">Cheerful daisy-like flowers with dark centers, perfect for gardens.</p>
                        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                            View Details
                        </button>
                    </div>
                </div>

                {/* Product 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
                        <img
                            src="/images/NewProduct/3.jpg"
                            alt="Bleeding Heart"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Bleeding Heart</h3>
                        <p className="text-gray-600 mb-4">Unique heart-shaped flowers that dangle from arching stems.</p>
                        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                            View Details
                        </button>
                    </div>
                </div>

                {/* Product 4 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
                        <img
                            src="/images/NewProduct/4.jpg"
                            alt="New Product"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Garden Phlox</h3>
                        <p className="text-gray-600 mb-4">Fragrant clusters of flowers that attract butterflies to your garden.</p>
                        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProducts;