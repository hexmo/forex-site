import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link to="/" className="hover:text-gray-300">
            Forex Rates
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/forex/2022-01-01"
              className="text-white hover:text-gray-300"
            >
              Forex 2022-01-01
            </Link>
          </li>
          {/* Add more links to specific pages if necessary */}
          {/* <li>
            <a href="https://example.com" className="text-white hover:text-gray-300">
              External Link
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
