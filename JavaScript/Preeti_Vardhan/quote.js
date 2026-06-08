const toggle = document.getElementById("toggler");

toggle.addEventListener("change", () => {
    console.log("changed");
    document.body.classList.toggle("dark");
});

async function fetch_quote() {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const quote_data = await response.json();
    document.getElementById("quoter").textContent = quote_data.quote;
    document.getElementById("author").textContent = `-${quote_data.author}`;
}

const quote_button = document.getElementById("Buton");
quote_button.addEventListener("click", fetch_quote);