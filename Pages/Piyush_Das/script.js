
function modeToggle(){
    const root=document.documentElement;
    if(getComputedStyle(root).getPropertyValue("--dark-bg")=="#0a0a0a"){
    root.style.setProperty("--dark-bg","white");
    root.style.setProperty("--text-color","black");
    root.style.setProperty("--panel-bg","#c0c0c0");
    document.querySelector(".night").style.visibility="visible";
    document.querySelector(".day").style.visibility="hidden";
    }
    else{
        root.style.setProperty("--dark-bg","#0a0a0a");
    root.style.setProperty("--text-color","#cccccc");
    root.style.setProperty("--panel-bg","#111111");
    document.querySelector(".day").style.visibility="visible";
    document.querySelector(".night").style.visibility="hidden";
    }
}

let mybtn=document.querySelector("#light_dark");
mybtn.addEventListener("click",modeToggle);
