import Link from 'next/link'
import React from 'react'

function AdminNavbar() {
  return (
    <aside className="admin-console-navbar">
        <Link href={'/admin'}>TechShop admin Console</Link>
        <Link href={'/admin/products'}>Products</Link>
        <Link href={'/admin/users'}>Users</Link>
        <Link href={'/admin/Orders'}>Orders</Link>
    </aside>
  )
}

export default AdminNavbar