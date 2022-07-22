
function home(){
    document.querySelector(".align .home").style.background="orange";
    document.querySelector("main").style.marginLeft ="0vw";

    document.querySelector(".align .section .nacional-").style.background="none";
    document.querySelector(".align .section .importado-").style.background="none";
    document.querySelector(".align .section .importado--hana").style.background="none";
    
}

function nextOne(){
    document.querySelector(".align .section .nacional-").style.background="orange";
    document.querySelector("main").style.marginLeft ="-100vw";

    document.querySelector(".align .home").style.background="none";
    document.querySelector(".align .section .importado-").style.background="none";
    document.querySelector(".align .section .importado--hana").style.background="none";
    
}

function nextDois(){
    document.querySelector("pointer-One").style.background="orange";
    document.querySelector("main").style.marginLeft ="-200vw";

    document.querySelector("pointer-One").style.background="none";
    document.querySelector("pointer-Three").style.background="none";
    document.querySelector("pointer-Three").style.background="none";
    
}
function nextThree(){
    document.querySelector("pointer-Dois").style.background="none";
    document.querySelector("main").style.marginLeft ="-300vw";

    document.querySelector("pointer-One").style.background="none";
    document.querySelector("pointer-Three").style.background="none";
    document.querySelector("pointer-Three").style.background="none";
    
}
