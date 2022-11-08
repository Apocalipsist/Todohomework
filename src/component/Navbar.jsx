import React from 'react'

export default function Navbar(props) {
    
  return (
    <nav className='navbar navbar-dark bg-dark'>
        <div className='container-fluid'>
            <a className='navbar-brand' href="/">Here is your Todo list{props.name}</a>

        </div>
    </nav>
  )
}
