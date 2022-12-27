const mudaTemaBtn = document.querySelector("#muda-tema")

function mudatema(){
    document.body.classList.toggle("dark")
}

loadtheme()

function loadtheme(){
    const darkmode = localStorage.getItem("dark")

    if(darkmode)[
        mudatema()
    ]
}


mudaTemaBtn.addEventListener("change", function(){
    mudatema()

    localStorage.removeItem("dark")

    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark", 1)
    }
})