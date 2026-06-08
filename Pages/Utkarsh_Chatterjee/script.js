const btn=document.getElementById('Darkmode')
const t=document.querySelector('body')

function dark()
{
    t.classList.toggle('dark');
    if(btn.style.background=='white')
    {btn.style.background= 'black';
        btn.style.color='white';
    }
    else
    {
        btn.style.background= 'white';
        btn.style.color='black';
    }
}

const qot=document.getElementById('Quote')
async function FetchQuote()
{
    //random number to insert in fetch
    let random=Math.floor(Math.random()*100);
    try{
        let response=await fetch(`https://dummyjson.com/quotes/${random}`);
        let data=await response.json();
        let quotation=data.quote;
        let auth=data.author;
        qot.textContent=`${quotation}      -${auth}`;
    }
    catch(error)
    {
        console.error(error);
    }
}