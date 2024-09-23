import React from 'react';

const ForexPage = ({ pageContext }) => {
  const { date, rates, prevDate, nextDate } = pageContext;

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4">Forex Rates for {date}</h1>
      <table className="min-w-full table-auto border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">Currency</th>
            <th className="border p-2">Flag</th>
            <th className="border p-2">Buy</th>
            <th className="border p-2">Sell</th>
          </tr>
        </thead>
        <tbody>
          {rates.map((rate) => (
            <tr key={rate.currency.iso3}>
              <td className="border p-2">{rate.currency.name} ({rate.currency.iso3})</td>
              <td className="border p-2">
                <img
                  src={rate.currency.iso3 === 'EUR' ? 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg' : `https://ipdata.co/flags/${rate.currency.iso3.toLowerCase().slice(0,2)}.png`}
                  alt={rate.currency.name}
                  className="h-10 w-auto"
                />
              </td>
              <td className="border p-2">{rate.buy}</td>
              <td className="border p-2">{rate.sell}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        {prevDate && (
          <a href={`/forex/${prevDate}`} className="text-blue-500 hover:underline">Previous</a>
        )}
        {nextDate && (
          <a href={`/forex/${nextDate}`} className="text-blue-500 hover:underline">Next</a>
        )}
      </div>
    </div>
  );
};

export default ForexPage;
