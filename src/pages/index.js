import React from 'react';
import { Link } from 'gatsby';
import forexData from '../data/forex_data.json';

const HomePage = () => {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4">Forex Rates</h1>
      <ul className="list-disc pl-5">
        {forexData.map((data) => (
          <li key={data.date}>
            <Link to={`/forex/${data.date}`} className="text-blue-500 hover:underline">
              Forex Rates for {data.date}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
