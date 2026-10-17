
const btn = document.getElementById("loadBtn");
const message = document.getElementById("message");
const board = document.getElementById("priceList");

const loaded = document.getElementById("loaded");
const dearest = document.getElementById("dearest");
const sum = document.getElementById("sum");

// Load the three prices from the server.
btn.addEventListener("click", async () => {
    btn.disabled = true;
    message.textContent = "Loading…";
    board.innerHTML = "";

    loaded.textContent = dearest.textContent = sum.textContent = 0;

    try {
        const names = ["pen", "copy", "tea"];

        const items = await Promise.all(names.map(async name => {
            const response = await fetch("/api/price?item=" + name);

            if (!response.ok) throw new Error("Request failed");

            return response.json();
        }));

        let total = 0;
        let highest = 0;

        items.forEach(item => {
            const row = document.createElement("tr");
            const name = document.createElement("td");
            const price = document.createElement("td");

            name.textContent = item.item;
            price.textContent = item.price;

            row.append(name, price);
            board.appendChild(row);

            total += item.price;
            highest = Math.max(highest, item.price);
        });

        loaded.textContent = items.length;
        dearest.textContent = highest;
        sum.textContent = total;

        message.textContent = "Prices loaded successfully.";
    } catch {
        board.innerHTML = "";
        loaded.textContent = dearest.textContent = sum.textContent = 0;
        message.textContent = "The server is not answering.";
    }

    btn.disabled = false;
});
