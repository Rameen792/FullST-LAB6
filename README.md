# 📚 Lab 06 — The Shelf
## 📌 Project Overview

The Shelf is a simple and responsive web application that loads item prices from a local server. It displays the prices of three items and calculates the total number of items, the highest price, and the sum of all prices.

The page also displays a loading message while fetching data and handles server errors when the server is unavailable.

## ✨ Features

- **Load Prices:** Fetches the prices of pen, copy, and tea from the server.
- **Loading State:** Displays `Loading…` while waiting for the server.
- **Price Board:** Displays each item and its price in a table.
- **Loaded:** Shows the number of items successfully loaded.
- **Dearest:** Shows the highest price among the loaded items.
- **Sum:** Calculates the total of all item prices.
- **Error Handling:** Displays `The server is not answering.` if a request fails.
- **Reset on Error:** Clears the prices and resets all summary values to zero.
- **Responsive Design:** Adjusts the layout for smaller screens.

## 🛠️ Technologies Used

- HTML5 — Page structure
- CSS3 — Styling and responsive layout
- JavaScript — Server requests, calculations, and error handling
- Node.js — Running the provided server
- Git — Version control

## 📂 Project Structure

```text
f24a-249-lab6/
├── server.js
├── index.html
├── styles.css
├── script.js
└── README.md
```

## ✅ Expected Output

| Item | Price |
|---|---:|
| Pen | 50 |
| Copy | 80 |
| Tea | 40 |

**Summary:**
- Loaded: 3
- Dearest: 80
- Sum: 170

### Server Error Check

When the server is stopped and the Load Prices button is clicked again:

- The message displays `The server is not answering.`
- The price board is cleared.
- Loaded, Dearest, and Sum reset to `0`.

## 🎓 What I Learned

- How to send requests to a local server using JavaScript `fetch()`.
- How to handle asynchronous operations using `async` and `await`.
- How to load multiple items using `Promise.all()`.
- How to display server data dynamically on a webpage.
- How to calculate totals and find the highest value.
- How to handle errors using `try` and `catch`.
- How to create a responsive page using HTML and CSS.

## 📝 Conclusion

This project demonstrates how a webpage communicates with a server, displays the returned data, calculates summary values, and handles server errors. It helped me practise basic full-stack web development concepts using HTML, CSS, JavaScript, and Node.js.
