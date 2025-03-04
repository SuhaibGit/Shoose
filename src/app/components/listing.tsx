import Link from 'next/link'
import React from 'react'
import { products } from "../products/product";

const Listing = () => {
    const limitedProducts = products.slice(0, 4);
  return (
    <div className='h-auto md:h-[634px] bg-white flex flex-col justify-center items-center'>
    <div className='flex flex-wrap gap-4 justify-center pt-3 mb-8'>
        {limitedProducts.map((product) => (
            <div 
                key={product.id} 
                className="w-[305px] h-[462px] bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
                <div
                    className="h-[375px] bg-cover bg-center rounded-t-lg"
                    style={{ backgroundImage: `url(${product.image})` }}
                >
                    <Link href={`/products/${product.id}`} className="block w-full h-full"></Link>
                </div>
                <div className="py-4 px-3">
                    <h2 className="text-black font-semibold">{product.title}</h2>
                    <p className="text-black font-medium"> ${product.price}</p>
                </div>
            </div>
        ))}
    </div>
    <Link href={"/products"}>
        <button className='my-[16px] mx-[24px] h-[56px] w-[170px] bg-black text-white border border-black rounded-lg shadow-sm hover:shadow-lg hover:bg-white hover:text-black hover:cursor-pointer transition-shadow'>
            View Collection
        </button>
    </Link>
</div>

  )
}

export default Listing