import { useEffect, useState } from "react";

function useCurrencyinfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

        let response = await fetch(url);

        if (!response.ok) {
          response = await fetch(
            `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
          );
        }

        if (!response.ok) {
          throw new Error("Unable to fetch currency rates");
        }

        const result = await response.json();

        setData(result[currency] || {});
      } catch (error) {
        console.error("Currency API error:", error);
        setData({});
      }
    };

    fetchRates();
  }, [currency]);

  return data;
}

export default useCurrencyinfo;

//we return the data bcz Imagine your custom hook is in useCurrencyinfo.js, and you call it from App.jsx:
//The return data statement allows App.jsx to receive the current value of data.
//we will take data info when we call the setcurrencyinfo from app.jsx