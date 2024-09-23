import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "../components/Navbar"

const ForexPage = ({ pageContext }) => {
  const { date, rates, prevDate, nextDate } = pageContext

  return (
    <div className="w-full">
      <Navbar />
      <div className="container mx-auto py-6 px-4">
        {/* Dynamic Page Title */}
        <Helmet>
          <title>VN Forex Rates | {date}</title>
        </Helmet>

        {/* Hero Section for Date */}
        <div className="text-center py-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg rounded-lg mb-8">
          <h1 className="text-4xl font-bold">Forex Rates for {date}</h1>
          <p className="text-lg mt-2">
            Check the latest forex rates for {date}.
          </p>
        </div>

        {/* Forex Rates Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border shadow-lg rounded-lg">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="border p-4">Currency</th>
                <th className="border p-4">Flag</th>
                <th className="border p-4">Buy</th>
                <th className="border p-4">Sell</th>
                <th className="border p-4">Unit</th>
              </tr>
            </thead>
            <tbody>
              {rates.map(rate => (
                <tr
                  key={rate.currency.iso3}
                  className="bg-white hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                  <td className="border p-4">
                    {rate.currency.name} ({rate.currency.iso3})
                  </td>
                  <td className="border p-4">
                    <img
                      src={
                        rate.currency.iso3 === "EUR"
                          ? "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
                          : `https://ipdata.co/flags/${rate.currency.iso3
                              .toLowerCase()
                              .slice(0, 2)}.png`
                      }
                      alt={rate.currency.name}
                      className="h-8 w-auto"
                    />
                  </td>
                  <td className="border p-4 text-green-600 font-semibold">
                    {rate.buy}
                  </td>
                  <td className="border p-4 text-red-600 font-semibold">
                    {rate.sell}
                  </td>
                  <td className="border p-4">{rate.currency.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {prevDate && (
            <a
              href={`/forex/${prevDate}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out"
            >
              &larr; Previous
            </a>
          )}
          {nextDate && (
            <a
              href={`/forex/${nextDate}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out"
            >
              Next &rarr;
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ForexPage
