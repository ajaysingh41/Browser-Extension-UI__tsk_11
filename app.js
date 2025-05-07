let btn=document.querySelector(".theme");
let container=document.querySelector("body");

function switchMode() {
    container.classList.toggle("dark");
    if(container.classList.contains("dark")){
        btn.src="images/icon-sun.svg";
        btn.alt="light";
        btn.classList.add("dark");
        logo.src="images/logo-dark.svg";
    } else{
        btn.src="images/icon-moon.svg";
        btn.alt="dark";
        btn.classList.add("light");
        logo.src="images/logo.svg";
    }
    
}
btn.addEventListener("click",switchMode);

let togglebtn=document.querySelectorAll(".toggle");

togglebtn.forEach(element => {
    element.addEventListener("click", ()=>{
        element.classList.toggle("toggleon")
    } );
});

let removeCardBtn=document.querySelectorAll(".remove");

removeCardBtn.forEach(element=>{
    element.addEventListener("click",()=>{
        element.parentElement.parentElement.remove();
    })
})

function unhide() {
    document.querySelectorAll(".card").forEach(element=>{
        element.style.display="flex";
    })
}

let activeFilter=document.querySelector(".active");

activeFilter.addEventListener("click",()=>{
    unhide();
    togglebtn.forEach(element=>{
        if(!element.classList.contains("toggleon")){
            element.closest(".card").style.display="none";
        }
        activeFilter.classList.add("filter-selected");
        allFilter.classList.remove("filter-selected");
        inactiveFilter.classList.remove("filter-selected");
    })
})

let allFilter=document.querySelector(".all");

allFilter.addEventListener("click",()=>{
    unhide();
    allFilter.classList.add("filter-selected");
    activeFilter.classList.remove("filter-selected");
    inactiveFilter.classList.remove("filter-selected");
});

let inactiveFilter=document.querySelector(".inactive");

inactiveFilter.addEventListener("click",()=>{
    unhide();
    togglebtn.forEach(element=>{
        if(element.classList.contains("toggleon")){
            element.closest(".card").style.display="none";
        }
        inactiveFilter.classList.add("filter-selected");
        allFilter.classList.remove("filter-selected");
        activeFilter.classList.remove("filter-selected");
    })
});
