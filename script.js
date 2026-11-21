// ======================================Alert Functions=============================
let toastError = (msg) => {
    Toastify({
        text: msg,
        duration: 3000,          // Time in milliseconds before hiding
        close: true,             // Shows the close (x) button
        gravity: "bottom",          // `top` or `bottom`
        position: "right",       // `left`, `center` or `right`
        stopOnFocus: true,       // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #ff0000, #ff8800)", // Custom CSS styling
            borderRadius: "8px",
            fontWeight: "bold"
        }
    }).showToast();
}
let toastSuccess = (msg) => {
    Toastify({
        text: msg,
        duration: 3000,          // Time in milliseconds before hiding
        close: true,             // Shows the close (x) button
        gravity: "bottom",          // `top` or `bottom`
        position: "left",       // `left`, `center` or `right`
        stopOnFocus: true,       // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)", // Custom CSS styling
            borderRadius: "8px",
            fontWeight: "bold"
        }
    }).showToast();
}


// input and output short cut keys
let showInput = document.getElementById("input")
let showOutput = document.getElementById("output")

// ========================================clear input and output=====================
let clearIn = () => {
    showInput.value = ""
    toastSuccess("Cleared Input")
}
let clearOut = () => {
    showOutput.innerHTML = ""
    toastSuccess("Cleared Output")
}

// copyright year

let year = new Date().getFullYear()
document.getElementById("copyrightYear").innerHTML = "&copy;" + year + "." + "All rights reserved"


// ===================current date and time====================

document.getElementById("tdate").innerHTML = new Date()

// ======================current day=========================

let today = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = new Date().getDay()
    const dayName = days[day]
    showOutput.innerHTML = "<p>Today is = </p>" + " <b class='text-red-600'>" + dayName + "</b>"
    toastSuccess("Today is " + dayName)
}

// ========================days passed===================

let dayPassed = () => {
    if (showInput.value == "") {
        toastError()
    } else {
        const birthDate = new Date(showInput.value)
        const today = new Date()
        const diff = today - birthDate
        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        showOutput.innerHTML = "<p>" + days + "</p>" + "<p>day passed since your birth</p>"
    }
}


//  ================================next birthday==========

let nextBirth = () => {
    if (showInput.value == "") {
        toastError()
    } else {
        let birthDate = new Date(showInput.value)
        let today = new Date()
        let diff = birthDate - today
        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        showOutput.innerHTML = "<p class='text-red-600' >" + days + "</p>" + "<p> =</p>" + "<p> days left in your birthday</p>"
    }
}


//  ================================greeting========================
let greeting = () => {
    let today = new Date()
    let hour = today.getHours()
    if (hour < 12) {
        showOutput.innerHTML = "<p>Good Morning</p>"
    } else if (hour < 18) {
        showOutput.innerHTML = "<p>Good Afternoon</p>"
    } else {
        showOutput.innerHTML = "<p>Good Evening</p>"
    }
}

// ===============================tell time 1================================
let tellTime1 = () => {
    let today = new Date()
    let hour = today.getHours()
    let minute = today.getMinutes()
    let second = today.getSeconds()
    showOutput.innerHTML = "<p>" + "You clicked  button time 1 =" + hour + ":" + minute + ":" + second + "" + "</p>"
}

// ===============================tell time 2================================

let tellTime2 = () => {
    let today = new Date()
    let hour = today.getHours()
    let minute = today.getMinutes()
    let second = today.getSeconds()
    showOutput.innerHTML = "<p>" + "You clicked  button time 2 =" + hour + ":" + minute + ":" + second + "</p>"
}
// ===============================tell time 3================================
let tellTime3 = () => {
    let today = new Date()
    let hour = today.getHours()
    let minute = today.getMinutes()
    let second = today.getSeconds()
    showOutput.innerHTML = "<p>" + "You clicked  button time 3 =" + hour + ":" + minute + ":" + second + "</p>"
}
// ==================================tax========================================
let tax = () => {
    let taxAmount = +prompt("Enter your amount")
    if (taxAmount === "" || taxAmount < 0 || !taxAmount) {
        toastError("Please enter a valid amount")
    } else {
        showOutput.innerHTML = "<p>" + "Your tax amount =" + taxAmount * 0.150 + " Rs.</p>"
        toastSuccess("Your tax amount =" + taxAmount * 0.150 + " Rs.")
    }
}
// ==================================total amount + tax=========================
let taxAmount = () => {
    let price = +prompt("Enter your amount")
    if (price === "" || price < 0 || !price) {
        toastError("Please enter a valid amount")
    } else {
        let total = price * 0.150
        showOutput.innerHTML = `<p class='flex gap-2'>Price = ${price} Rs. <br/>  Tax = 15% <br/> Total = ${price + total} Rs.</p>`
        toastSuccess("Your total amount = " + (price + total) + " Rs.")
    }
}