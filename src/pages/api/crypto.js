// pages/api/crypto.js
import axios from 'axios';

export default async function handler(req, res) {
  const apiKey = process.env.NEXT_PUBLIC_COINMARKETCAP_API_KEY;

  const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/trending/gainers-losers';

  try {
    // Include params in the request to the CoinMarketCap API
    const response = await axios.get(url, {
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
      },
      params: {
        time_period: '24h',
        limit: 10,
        start: 1,
        sort: 'percent_change_24h',
        sort_dir: 'desc'
      }
    });

    // Send back the data received from CoinMarketCap API to the client
    res.status(200).json(response.data);
  } catch (error) {
    // Make sure to handle errors appropriately
    res.status(500).json({ message: error.message });
  }
}
