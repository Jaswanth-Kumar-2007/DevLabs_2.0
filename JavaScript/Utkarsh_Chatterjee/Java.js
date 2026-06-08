const Qot=document.getElementById("Quote");

async function Pressed() {
    try {
        let random=Math.floor(Math.random()*100);
        let response=await fetch(`https://dummyjson.com/quotes/${random}`);
        let data=await response.json();
        Qot.textContent=data.quote;
        document.getElementById("Author").textContent=`-${data.author}`;
    }
    catch(error)
    {
        console.error("We have a problem here " + error);
    }
}