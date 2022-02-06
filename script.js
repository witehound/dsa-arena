let bills = document.getElementsByClassName("bills")
let bi = document.getElementsByClassName("bill-wrap-h3")

bi.addEventListener("change", updateValue)

function updateValue(e) {
    log.textContent = e.target.value;
    console.log(e.target.value)
  }