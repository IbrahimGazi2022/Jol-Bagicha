import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import {
    FaStar,
    FaHeart,
    FaSyncAlt,
    FaShippingFast,
    FaLock,
    FaRegHeart
} from "react-icons/fa";
import Navbar from "../Navbar/Navbar";

export default function SingleProductPage() {
    const { id } = useParams();
    const productId = Number(id);
    const product = products.find((p) => p.id === productId);
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <p className="text-center mt-10">Product not found</p>;
    }

    return (
        <>
            <Navbar className="-mt-10" />
            <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 mt-[130px]">


                {/* Left Side - Product Image */}
                <div>
                    <img
                        src={product.img}
                        alt={product.title}
                        className="w-full h-auto rounded-2xl shadow-md"
                    />
                </div>

                {/* Right Side - Product Details */}
                <div className="flex flex-col space-y-4">

                    {/* Title & Price */}
                    <h2 className="text-2xl font-bold">{product.title}</h2>
                    <p className="text-green-600 text-xl font-semibold">${product.price}</p>

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
                            <span className="font-semibold">Color:</span>
                            <select className="border rounded-md px-2 py-1">
                                <option>Black & White</option>
                                <option>Green</option>
                            </select>
                        </div>
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
                            <button className="px-3 py-1"
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

                        <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
                            ADD TO CART
                        </button>

                        <button className="p-3 border rounded-md hover:bg-gray-100">
                            <FaRegHeart />
                        </button>

                        <button className="p-3 border rounded-md hover:bg-gray-100">
                            <FaSyncAlt />
                        </button>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                        <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-sm">
                            <FaShippingFast className="text-green-600 text-xl mb-1" />
                            <span className="text-sm font-semibold">Free Shipping</span>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-sm">
                            <FaLock className="text-green-600 text-xl mb-1" />
                            <span className="text-sm font-semibold">Safe Payment</span>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-sm">
                            <FaHeart className="text-green-600 text-xl mb-1" />
                            <span className="text-sm font-semibold">Safe Guarantee</span>
                        </div>
                    </div>

                    {/* Meta Information */}
                    <div className="text-sm text-gray-600 mt-6 space-y-1">
                        <p><span className="font-semibold">SKU:</span> Ch-256xl</p>
                        <p><span className="font-semibold">Categories:</span> Office, Home</p>
                        <p><span className="font-semibold">Tags:</span> Furniture</p>
                    </div>
                </div>
            </div>
        </>
    );
}
