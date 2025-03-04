import React from 'react'
import { products } from '../product'
import Navbar1 from '@/app/components/navbar';
import Listing from '@/app/components/listing';
import Pro_det from '@/app/components/Pro_det';
import Footer from '@/app/components/footer';

interface ProductParams {
        product: string;
      }
      export default async function Product({ params }: { params:  Promise<ProductParams>  }) {
      
        const { product } = await params;  // Access the productId from params
        const productid = products.find((p) => p.id == Number(product));  // Convert productId to number to match the type
      
        if (!productid) {
          return <p>Product not found</p>;
        }
      
  return (
    <div>
        <Navbar1/>
        <Pro_det product={productid}/>
      <div className='h-auto w-[100%] flex flex-col'><h1 className=" text-[32px] font-light bg-white text-black pl-[20px] md:pl-[120px] pt-[40px]">You Might also like</h1>
      </div>
      <Listing/>
      <Footer/>
      </div>
  )
}
