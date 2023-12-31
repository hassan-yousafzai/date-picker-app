import { format, fromUnixTime, getUnixTime } from "date-fns"

const datePicker = document.querySelector(".date-picker")
const datePickerButton = document.querySelector(".date-picker-button")
const datePickerHeaderText = document.querySelector(".current-month")

setDate(new Date())

datePickerButton.addEventListener("click", e => {
  datePicker.classList.toggle("show")

  const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate)

  setupDatePicker(selectedDate)
})

function setDate(date) {
  datePickerButton.innerText = format(date, "MMMM do, yyyy")
  datePickerButton.dataset.selectedDate = getUnixTime(date)
}

function setupDatePicker(selectedDate) {
  datePickerHeaderText.innerText = format(selectedDate, "MMMM - yyyy")

  console.log(selectedDate)
}
