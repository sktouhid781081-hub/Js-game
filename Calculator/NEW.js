let display = document.querySelector(".display")
let numbers = document.querySelectorAll(".number")
let operation = document.querySelectorAll(".function")

let firstnumber = "";
let secondnumber = "";
let enteringfirstumber = true
let value;
let task;

function resetcalculator() {
    firstnumber = "";
    secondnumber = "";
    enteringfirstumber = true
}

numbers.forEach(element => {
    element.addEventListener("click", function () {
        if (enteringfirstumber) {
            firstnumber += element.innerHTML
            display.value = firstnumber
        }
        else {
            secondnumber += element.innerHTML
            display.value = secondnumber
        }
    })
});

operation.forEach(element => {
    element.addEventListener("click", function () {
        value = element.innerHTML
        if (value === "c") {
            resetcalculator()
            display.value = "";
            return
        }
        if (value === "+" || value === "-" || value === "*" || value === "**" || value === "/") {
            if (firstnumber === "") {
                return
            }
            task = value
            enteringfirstumber = false
            display.value = value
            return
        }
    })
});

operation.forEach(element => {
    element.addEventListener("click", function () {
        value = element.innerHTML
        if (value === "=") {
            if (task === "+") {
                display.value = Number(firstnumber) + Number(secondnumber)
                // resetcalculator()
                firstnumber = display.value
                task = "";
                secondnumber = "";
                return

            }
            if (task === "-") {
                display.value = Number(firstnumber) - Number(secondnumber)
                // resetcalculator()
                firstnumber = display.value
                task = "";
                secondnumber = "";
                return
            }
            if (task === "*") {
                display.value = Number(firstnumber) * Number(secondnumber)
                // resetcalculator()
                firstnumber = display.value
                task = "";
                secondnumber = "";
                return
            }
            if (task === "**") {
                display.value = Number(firstnumber) ** Number(secondnumber)
                // resetcalculator()
                firstnumber = display.value
                task = "";
                secondnumber = "";
                return
            }
            if (task === "/") {
                if (secondnumber === "0") {
                    display.value = "you are dumb :)";
                    resetcalculator()
                    return
                }
                display.value = Number(firstnumber) / Number(secondnumber)
                // resetcalculator()
                firstnumber = display.value
                task = "";
                secondnumber = "";
                return
            }
        }
    })
});