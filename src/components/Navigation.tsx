import React from "react";
import { Link } from 'react-router-dom'


export function Navigation() {
    return (
    <nav className = "h-[50px] flex justify-between px-5 items-center bg-yellow-500 text-blue">
      <span className="font-bold">React 2023</span>
      <span>
        <Link to='/' className="mr-2"> Products </Link>
        <Link to='/about'> About </Link>
      </span>
    </nav>
    )
}