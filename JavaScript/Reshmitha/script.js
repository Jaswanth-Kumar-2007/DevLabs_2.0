async function getQuote()
{
    try
    {
        document.getElementById("quote").innerText =
        "Loading...";

        const response =
        await fetch(
        "https://dummyjson.com/quotes/random"
        );

        const data =
        await response.json();

        document.getElementById("quote").innerHTML =
        `"${data.quote}" <br><br> - ${data.author}`;
    }

    catch(error)
    {
        document.getElementById("quote").innerText =
        "Failed to load quote";
    }
}