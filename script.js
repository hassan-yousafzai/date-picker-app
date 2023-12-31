import { format } from "date-fns"

const today = new Date()

const datePicker = document.querySelector(".date-picker")
const datePickerButton = document.querySelector(".date-picker-button")

datePickerButton.innerText = format(today, "MMMM do, yyyy")

datePickerButton.addEventListener("click", e => {
  datePicker.classList.toggle("show")
})
