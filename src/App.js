import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true); // defalt value: true
  const [coins, setCoins] = useState([]); // default value: empty array

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=200")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []); // []가 비어 있으면 (아무것도 주시하고 있지 않으면) 이 함수는 한 번만 실행 된다.

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? (
        <strong>Loading.....</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
