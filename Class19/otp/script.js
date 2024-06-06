const inputs = document.querySelectorAll(".input")

inputs.forEach((ele) => {
    ele.addEventListener("keyup", (e) => {
        try {
            if(e.key >= 0 && e.key < 10) {
                ele.nextElementSibling.focus()
            } else if (e.key == 'Backspace' || e.key == 'Delete') {
                ele.value = ""
                ele.previousElementSibling.focus()
            } else {
                ele.value = ""
            }
        } catch(err) {
            console.log(err);
        }
       
    })
})
