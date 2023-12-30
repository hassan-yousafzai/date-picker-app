import { format } from "date-fns"

const datePicker = document.querySelector(".date-picker")
const datePickerButton = document.querySelector(".date-picker-button")
const currentMonthYear = document.querySelector(".current-month")

const today = new Date()

datePickerButton.innerText = format(today, "do MMMM yyyy")
currentMonthYear.innerText = format(today, "MMMM - yyyy")

datePicker.classList.remove("show")

datePickerButton.addEventListener("click", e => {
  datePicker.classList.add("show")
})

document.addEventListener("click", e => {
  if (!e.target.matches("button")) return

  console.log("button clicked")
})
