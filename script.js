let active = document.querySelector("a").addEventListener("clicke",()=>{
    array.from("active").forEach( () => {
        active.classList.remove("active");
        active.classList.add("active");
    });
})

