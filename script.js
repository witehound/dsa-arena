let billInput = document.querySelector(".bills-input")
let percentageTip5 = document.querySelector("#percentage-tip-5")
let percentageTip10 = document.querySelector("#percentage-tip-10")
let percentageTip15 = document.querySelector("#percentage-tip-15")
let percentageTip25 = document.querySelector("#percentage-tip-25")
let percentageTip50 = document.querySelector("#percentage-tip-50")
let percentageTipCustom = document.querySelector("#percentage-tip-custom")
let resetButton = document.querySelector(".right-code-reset-button")
let numberOfPeople = document.querySelector(".number-of-people-input")
let totalPeople = document.querySelector(".right-code-dispaly-number-other")
let tipAmount = document.querySelector(".right-code-dispaly-number")

let firstCalculation, secondCalculation, forCustom

percentageTip5.addEventListener("click", function(){
    firstCalculation = billInput.value * 0.05
    secondCalculation = firstCalculation / numberOfPeople.value
    totalPeople.innerHTML = "$" + firstCalculation
    tipAmount.innerHTML = "$" + secondCalculation
})

percentageTip10.addEventListener("click", function(){
    firstCalculation = billInput.value * 0.10
    secondCalculation = firstCalculation / numberOfPeople.value
    totalPeople.innerHTML = "$" + firstCalculation
    tipAmount.innerHTML = "$" + secondCalculation
})

percentageTip15.addEventListener("click", function(){
    firstCalculation = billInput.value * 0.15
    secondCalculation = firstCalculation / numberOfPeople.value
    totalPeople.innerHTML = "$" + firstCalculation
    tipAmount.innerHTML = "$" + secondCalculation
})

percentageTip25.addEventListener("click", function(){
    firstCalculation = billInput.value * 0.25
    secondCalculation = firstCalculation / numberOfPeople.value
    totalPeople.innerHTML = "$" + firstCalculation
    tipAmount.innerHTML = "$" + secondCalculation
})

percentageTip50.addEventListener("click", function(){
    firstCalculation = billInput.value * 0.5
    secondCalculation = firstCalculation / numberOfPeople.value
    totalPeople.innerHTML = "$" + firstCalculation
    tipAmount.innerHTML = "$" + secondCalculation
})

.percentageTipCustom.addEventListener("chnage", (event) => {
    forCustom = event.target.value * 0.01
    firstCalculation = billInput.value * forCustom
    secondCalculation = firstCalculation / numberOfPeople.value
    totalPeople.innerHTML = "$" + firstCalculation
    tipAmount.innerHTML = "$" + secondCalculation
})