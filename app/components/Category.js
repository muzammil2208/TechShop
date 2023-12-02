import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Category() {
  return (
    <div className="category-container">
        <Link href="/shop" className="category">
           <Image className="category-image"
           src="/iphone15pro.png" 
           width={100}
           height={100}/>
           <span className="category-heading">Mobile Phones</span>
        </Link>
        <div className="category">
           <Image className="category-image"
           src="/macbookimages.png" 
           width={100}
           height={100}/>
           <span className="category-heading">Laptops</span>
        </div>
        <div className="category">
           <Image className="category-image"
           src="/headphones.png" 
           width={100}
           height={100}/>
           <span className="category-heading">Headphones</span>
        </div>
    </div>
  )
}

export default Category