"use client"
import React, { useState } from 'react';
import { useCart } from './cartcontext';
const Pro_det = ({ product }: { product: { title: string; description: string; image: string; price: number; id: number; tag:string } }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(""); // Track selected color
  const [selectedSize, setSelectedSize] = useState(""); // Track selected size

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const [cartItem, setCartItem] = useState(
    { title: product.title,
      description: product.description,
      image: product.image,
      price: product.price,
      id: product.id,
      qty:quantity,
      color: selectedColor,
      size: selectedSize, // Add size to cart
       }
  )
      const handleColorSelect = (color: string) => {
        setSelectedColor(color);

      };
    
      // Handle Size Selection
      const handleSizeSelect = (size: string) => {
        setSelectedSize(size);
      };
    
      // Handle Add to Cart
      // const handleAddToCart = () => {
      //   setCartItem({
      //     ...cartItem,
      //     price: product.price * quantity,
      //     qty: quantity,
      //     color: selectedColor,
      //     size: selectedSize,
      //   });
      //   addToCart(cartItem , quantity)
      //   console.log("Added to Cart:", cartItem);
      // }
      const handleAddToCart = () => {
        const newCartItem = {
          title: product.title,
          description: product.description,
          image: product.image,
          price: product.price * quantity, // Multiply price by quantity
          id: product.id,
          qty: quantity,
          color: selectedColor,
          size: selectedSize,

        };
        setCartItem({
              ...cartItem,
              price: product.price * quantity,
              qty: quantity,
              color: selectedColor,
              size: selectedSize,
            });
      
        addToCart(newCartItem, quantity); 
        console.log("Added to Cart:", newCartItem);
      };
      
  return (
    <section className="text-gray-600 body-font overflow-hidden bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
    <div
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded bg-cover bg-center"
        style={{ backgroundImage: `url(${cartItem.image})` }}
        role="img"
        aria-label="ecommerce"
        />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{cartItem.title}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.tag}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed">{cartItem.description}</p>
        <div className="flex flex-col  md:flex-row mt-6 md:items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex   mb-3 md:mb-0">
          <div className="flex">
                 <span className="mr-3">Color</span>
                 {["gray", "black", "indigo"].map((color) => (
                   <button
                     key={color}
                     className={`border-2 ml-1 rounded-full w-6 h-6 focus:outline-none hover:cursor-pointer ${
                       selectedColor === color ? "border-black" : "border-gray-300"
                     }`}
                     style={{ backgroundColor: color }}
                     onClick={() => handleColorSelect(color)}
                   ></button>
                 ))}
               </div>
          </div>
          
          <div className="flex md:ml-6 items-center mb-3 md:mb-0">
          <span className="mr-3">Size</span>
          <div className="relative">
            <select
              className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
              value={selectedSize} // Bind state
              onChange={(e) => handleSizeSelect(e.target.value)} // Update state on change
            >
              <option value="">Select Size</option>
              {["40", "41", "42", "43", "44", "45"].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </div>
          </div>
          {/* //quantity */}
          <div className="flex items-center md:ml-6 mb-3 md:mb-0">
              <span className="mr-3">Quantity</span>
              <button 
                className="border-2 border-gray-700 px-3 py-1 rounded-l bg-gray-700 text-white"
                onClick={handleDecrease}
              >-</button>
              <span className="px-4 py-1 border-2 border-gray-700 ">{quantity}</span>
              <button 
                className="border-2 border-gray-700 px-3 py-1 rounded-r bg-gray-700 text-white"
                onClick={handleIncrease}
              >+</button>
            </div>
        </div>
        <div className="flex mt-5">
               <span className="title-font font-medium text-2xl text-gray-900">
                 ${product.price * quantity}
               </span>
               <button
                 className="flex ml-auto text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:cursor-pointer hover:bg-indigo-600 rounded"
                 onClick={handleAddToCart}
               >
                 Add to Cart
               </button>
             </div>
      </div>
    </div>
  </div>
</section>
  )

      }
export default Pro_det