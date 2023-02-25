import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export const NavRoot = () => {
  return (
    <div>
      <div style={flex}>
        <Link to={`/home`}>HOME</Link>
        <Link to={`/form`}>DATA</Link>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  )
}

const flex = {
  display: 'flex',
  gap: '2rem',
  marginBottom: '2.4rem'
}
