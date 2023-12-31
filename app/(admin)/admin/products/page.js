'use client'
import React from 'react'
import Link from 'next/link'
import EditIcon from '@/app/components/EditIcon';
import { useEffect,useState } from 'react';
import axios from 'axios';
import {motion} from 'framer-motion';


function adminproductPage() {
  const [Products,setProducts]=useState([]);
     useEffect(()=>{

          axios.get('/api/product').then(response=>{
               setProducts(response.data);
          });
     },[]);

  return (
    <div className="admin-products-container">
      <div className="products-actions-container">
      <Link href="/admin/products/add" className="products-actions-link">Add Products</Link>
      <Link href="/admin/Products/remove products" className="products-actions-link">Remove Products</Link>
      </div>
      <div className="product-list-container">
      <table className="products_table">
               <thead>
                    <tr>
                         <td>Prdouct Name</td>
                         <td>Actions</td>
                    </tr>
               </thead>
               <tbody>
                    {Products.map(product=>(  
                          <tr>
                              <td>{product.title}</td>
                              <td className="flex gap-1">
                              <Link href={"/Products/edit/"+product._id} className="edit-button">
                                   <EditIcon className="w-5 h-5"/>
                                   Edit
                              </Link>
                              <Link href={"/Products/delete/"+product._id} className="flex bg-red-500 text-white rounded-lg w-[70px] justify-center p-1">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                   <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                   </svg>
                                   Delete
                              </Link>
                              </td>
                         </tr>
                    ))}
               </tbody>
          </table>
      </div>
     
    </div>
  )
}

export default adminproductPage