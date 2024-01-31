// pages/api/crypto.js
import axios from 'axios';

export default async function handler(req, res) {
  const apiKey = process.env.COINMARKETCAP_API_KEY; // Ensure you're using the correct environment variable name

  const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/trending/latest';

  try {
    const response = await axios.get(url, {
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
      },
      params: {
        limit: 10,
      },
    });

    // Send back the data received from CoinMarketCap API to the client
    res.status(200).json(response.data);
  } catch (error) {
    // Make sure to handle errors appropriately
    res.status(500).json({ message: error.message });
  }
}
