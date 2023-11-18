import Link from 'next/link'
import React from 'react'


function Navbar() {
  return (
   <div className="navbar">
    <h1 className="navbar-heading"><Link href="/">TechShop</Link></h1>
    <ul className="navbar-links">
        <li>
            <Link href="/about">About</Link>
        </li>
        <li>
        <Link href="/contact">Contact</Link>
        </li>
        <li>
        <Link href="/shop">Shop</Link>
        </li>
        
       
    </ul>
    <div className="navbar-action-btns">
        <button className="navbar-btns">Cart</button>
        <button className="navbar-btns">Profile</button>
    </div>
   </div>
  )
}

export default Navbar