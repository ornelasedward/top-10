import axios from 'axios';
import { useEffect, useState } from 'react';

const MostSearched = () => {
  const [topSearchers, setTopSearchers] = useState([]);

  useEffect(() => {
    const fetchTopSearchers = async () => {
      try {
        const response = await axios.get('/api/search');
        setTopSearchers(response.data.data);
      } catch (error) {
        console.error('Error fetching top searched:', error);
      }
    };

    fetchTopSearchers();
  }, []);

  return (
    <>
    top searched
    <div className="px-4 sm:px-6 lg:px-8 border-2 justify-center m-auto flex max-w-[1200px] py-4 rounded-2xl shadow-lg">
      <div className="sm:flex sm:items-center">
      </div>
      <div className="mt-4 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-[1100px]">
              <thead className=''>
                <tr className=''>
                  <th scope="col" className="py-2 pl-4 pr-3 text-left text-xl font-semibold text-gray-900 bg-amber-400 sm:pl-0">
                     <span className='text-amber-400'>...</span>Cryptocurrency
                  </th>
                  <th scope="col" className="px-3 py-2 text-left text-xl font-semibold bg-amber-400 text-gray-900">
                    Symbol
                  </th>
                  <th scope="col" className="px-3 py-2 text-left text-xl font-semibold text-gray-900 bg-amber-400 ">
                    Price
                  </th>
                  <th scope="col" className="px-3 py-2 text-left text-xl font-semibold text-gray-900 bg-amber-400">
                  Market Cap
                </th>
                  <th scope="col" className="px-3 py-2 text-left text-xl font-semibold text-gray-900 bg-amber-400">
                  Volume (24h)
                </th>
                  <th scope="col" className="px-3 py-2 text-left text-xl font-semibold text-gray-900 bg-amber-400">
                    Change (24h)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-800 bg-white">
                {topSearchers.map((coin) => (
                  <tr key={coin.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-xl font-medium text-blue-950">{coin.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 text-xl text-gray-500">{coin.symbol}</td>
                    <td className="whitespace-nowrap px-3 py-2 text-xl text-gray-500">${coin.quote.USD.price.toFixed(5)}</td>
                    <td className="whitespace-nowrap px-3 py-2 text-xl text-gray-500">
                      ${coin.quote.USD.market_cap.toLocaleString()} {/* Format the number with commas */}
                    </td>
                  <td className="whitespace-nowrap px-3 py-2 text-xl text-gray-500">
                    ${coin.quote.USD.volume_24h.toLocaleString()} {/* Format the number with commas */}
                  </td>
                    <td className="whitespace-nowrap px-3 py-2 text-xl text-gray-500">
                      <span className={`inline-flex items-center rounded-md px-2 py-1 text-xl font-medium ${coin.quote.USD.percent_change_24h > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {coin.quote.USD.percent_change_24h.toFixed(2)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MostSearched;