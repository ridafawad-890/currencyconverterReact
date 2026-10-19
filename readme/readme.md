1. A custom hook in React is a function that lets us reuse React logic in different components.

2. Why do we need a custom hook?
Imagine you want to convert US dollars into Pakistani rupees, euros, or British pounds.
Your component needs to:
- Fetch exchange-rate data from an API.
- Store the received data.
- Fetch new data when the selected base currency changes.
- Make the exchange rates available to the UI.
You could write all this logic inside your App.jsx. However, that would mix API logic with UI logic.
Instead, we put the fetching logic inside useCurrencyinfo().

A custom hook in React is a function that lets us reuse React logic in different components.

# 1. What does a custom hook contain?
A custom hook can contain these parts:
1. A function whose name starts with use.
2. React hooks, such as useState or useEffect, when needed.
3. Logic to perform a task, such as fetching API data.
4. A return statement to provide data or functions to the component that calls it.
Not every custom hook needs all these parts. It depends on its purpose.


# app.jsx
// the classname we passed was that maybe user want diff css