window.addEventListener("load", () => {

    const form = document.querySelector("form");
    const input = document.querySelector("#input");
    const kgweight = document.querySelector(".kgweight")
    const error = document.querySelector(".err")
    

    form.addEventListener("submit", (e) => {

        e.preventDefault()

        if (!input) {
            alert("insert weight")
        }

        const pounds = input.value;
        const kilograms = pounds/2.2;

        if (kilograms <= 0) {

            error.innerHTML = `<p> your insert number is invalid </p>`
            error.style.color = "red"
            kgweight.innerHTML = "";

           setTimeout(()=> {
                error.innerHTML = ""
           }, 10000)
        
         } else if (isNaN(kilograms)) {

            error.innerHTML = `<p> your insert number is invalid </p>`
            kgweight.innerHTML = "";

          setTimeout(()=> {

              error.innerHTML = "";

           }, 10000)

         } else {

            kgweight.innerHTML = `<h3>${kilograms.toFixed(2)} KG</h3>`
            error.innerHTML = ""
        

        setTimeout ( () => {
            kgweight.innerHTML = ""
        }, 10000)

    }
    
})

})