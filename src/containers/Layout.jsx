import React from 'react'
import { Outlet } from 'react-router-dom'
export const Layout = () => {
  return (
    <div className='Layout'>
      <Outlet />
    </div>
  )
}