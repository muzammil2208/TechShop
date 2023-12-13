'use client'
import Link from 'next/link';
import { useRouter,usePathname } from 'next/navigation';
import React from 'react';

function AdminNavbar() {
  const pathname=usePathname()

  return (
    <aside className="admin-console-navbar">
      <Link href={'/admin'} className={`admin-navbar-links ${pathname === '/admin' ? 'active' : ''}`}>
        Admin Console
      </Link>
      <Link href={'/admin/products'} className={`admin-navbar-links ${pathname === '/admin/products' ? 'active' : ''}`}>
        Products
      </Link>
      <Link href={'/admin/users'} className={`admin-navbar-links ${pathname === '/admin/users' ? 'active' : ''}`}>
        Users
      </Link>
      <Link href={'/admin/orders'} className={`admin-navbar-links ${pathname === '/admin/orders' ? 'active' : ''}`}>
        Orders
      </Link>
      <Link href={'/'} className='admin-navbar-links'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
</svg> <p>Website</p>
</Link>

    </aside>
  );
}

export default AdminNavbar;
