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
          <title>VN FOREX</title>
          <link rel="icon" href="/favicon.png" />
        </Helmet>
        <h1 className="text-2xl font-bold mb-4">Forex Rates</h1>
        <ul className="list-disc pl-5">
          {sortedForexData.map(data => (
            <li key={data.date}>
              <Link
                to={`/forex/${data.date}`}
                className="text-blue-500 hover:underline"
              >
                Forex Rates for {data.date}
              </Link>
            </li>
          ))}
        </ul>
      </div>{" "}
    </>
  )
}

export default HomePage
