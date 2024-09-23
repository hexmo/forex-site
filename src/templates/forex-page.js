import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "../components/Navbar"

const ForexPage = ({ pageContext }) => {
  const { date, rates, prevDate, nextDate } = pageContext

  return (
    <div className="w-full">
      <Navbar />
      <div className="container mx-auto py-6 px-2">
        {/* Dynamic Page Title */}
        <Helmet>
          <title>VN FOREX | {date}</title>
        </Helmet>
        <h1 className="text-2xl font-bold mb-4 text-center bg-slate-400 p-4 text-slate-700">
          Forex Rates for {date}
        </h1>
        <table className="min-w-full table-auto border-collapse border shadow-lg">
          <thead>
            <tr>
              <th className="border p-2">Currency</th>
              <th className="border p-2">Flag</th>
              <th className="border p-2">Buy</th>
              <th className="border p-2">Sell</th>
              <th className="border p-2">Unit</th>
            </tr>
          </thead>
          <tbody>
            {rates.map(rate => (
              <tr key={rate.currency.iso3}>
                <td className="border p-2">
                  {rate.currency.name} ({rate.currency.iso3})
                </td>
                <td className="border p-2">
                  <img
                    src={
                      rate.currency.iso3 === "EUR"
                        ? "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
                        : `https://ipdata.co/flags/${rate.currency.iso3
                            .toLowerCase()
                            .slice(0, 2)}.png`
                    }
                    alt={rate.currency.name}
                    className="h-6 w-auto"
                  />
                </td>
                <td className="border p-2">{rate.buy}</td>
                <td className="border p-2">{rate.sell}</td>
                <td className="border p-2">{rate.currency.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-4">
          {prevDate && (
            <a
              href={`/forex/${prevDate}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              &larr; Previous
            </a>
          )}
          {nextDate && (
            <a
              href={`/forex/${nextDate}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
