import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import {
    FaStar,
    FaHeart,
    FaShippingFast,
    FaLock,
    FaRegHeart
} from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function SingleProductPage() {
    const { id } = useParams();
    const productId = Number(id);
    const product = products.find((p) => p.id === productId);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      

    if (!product) {
        return <p className="text-center mt-10">Product not found</p>;
    }

    return (
        <>
            <Navbar className="-mt-10" />
            <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:mt-[130px] md:mb-10">

                {/* Left Side - Product Image */}
                <div className="flex justify-center ">
                    <img
                        src={product.img}
                        alt={product.title}
                        className="w-[300px] h-[300px] mt-10 lg:mt-0 max-w-md md:h-[400px] md:w-[400px] object-cover rounded-2xl shadow-md p-10"
                    />
                </div>

                {/* Right Side - Product Details */}
                <div className="flex flex-col space-y-4">

                    {/* Title & Price */}
                    <h2 className="text-2xl text-[var(--main-text-color)] font-bold tracking-wide">{product.title}</h2>
                    <p className="text-[] text-2xl font-semibold">{product.price}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <div className="flex text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} />
                            ))}
                        </div>
                        <span className="text-sm text-gray-600">(1 Review)</span>
                    </div>

                    {/* Color & Size Selectors */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-4">
                            <span className="font-semibold">Size:</span>
                            <select className="border rounded-md px-2 py-1">
                                <option>Medium Size & Pot</option>
                                <option>Large Size</option>
                            </select>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {product.description ||
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                    </p>

                    {/* Quantity & Actions */}
                    <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center border rounded-md">
                            <button className="px-2.5 py-1.5"
                                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                            >
                                -
                            </button>
                            <span className="px-4 py-1">{quantity}</span>
                            <button className="px-3 py-1"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                +
                            </button>
                        </div>

                        <button className="bg-[#354E33] text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
                            ADD TO CART
                        </button>

                        <button className="p-2.5 border rounded-md hover:bg-gray-100">
                            <FaRegHeart />
                        </button>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                        <div className="flex items-center gap-3 p-4 rounded-lg shadow-sm bg-[#D8F2E2]">
                            <FaShippingFast size={40} className="text-[var(--main-text-color)]" />
                            <span className="text-sm font-semibold">Free Shipping</span>
                        </div>

                        <div className="flex items-center gap-3 p-4 bg-[#D8F2E2] rounded-lg shadow-sm">
                            <FaLock size={40} className="text-[var(--main-text-color)]" />
                            <span className="text-sm font-semibold">Safe Payment</span>
                        </div>

                        <div className="flex items-center gap-3 p-4 bg-[#D8F2E2] rounded-lg shadow-sm">
                            <FaHeart size={40} className="text-[var(--main-text-color)]" />
                            <span className="text-sm font-semibold">Safe Guarantee</span>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}
