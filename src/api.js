const API_KEY = 'bbf78e9890b30f5ebafcec96235f3da2c37fab329e8adf7d9739174d7423761c';

export const loadTicker = (tickers) =>
fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=${tickers.json(',')}&api_key=${API_KEY}`
).then(r=>r.json());
