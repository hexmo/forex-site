import { Link } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "../components/Navbar"
import forexData from "../data/forex_data.json"

const HomePage = () => {
  // Reverse the data to show latest dates first
  const sortedForexData = [...forexData].reverse()

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-6">
        <Helmet>
          <title>VN Forex Rates</title>
          <link rel="icon" href="/favicon.png" />
        </Helmet>

        {/* Hero Section */}
        <section className="text-center py-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white mb-12">
          <h1 className="text-4xl font-extrabold mb-4">VN Forex Rates</h1>
          <p className="text-lg">Get the latest Forex Rates with VN Forex</p>
        </section>

        {/* Forex Rates Section */}
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Latest Forex Rates
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedForexData.map(data => (
            <div
              key={data.date}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-600">
                  Forex Rates for {data.date}
                </h3>
                <p className="text-gray-600">
                  Check the latest Forex rates for {data.date} with detailed buy
                  and sell prices.
                </p>
                <Link
                  to={`/forex/${data.date}`}
                  className="block mt-4 bg-blue-500 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg"
                >
                  View Rates
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default HomePage
