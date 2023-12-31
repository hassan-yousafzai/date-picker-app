import { format, fromUnixTime, getUnixTime, subMonths } from "date-fns"

const datePicker = document.querySelector(".date-picker")
const datePickerButton = document.querySelector(".date-picker-button")
const datePickerHeaderText = document.querySelector(".current-month")
const prevMonthButton = document.querySelector(".prev-month-button")

setDate(new Date())

prevMonthButton.addEventListener("click", e => {
  console.log("prevMonthButton clicked")
  const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate)

  setDate(subMonths(selectedDate, 1))
  setupDatePicker(subMonths(selectedDate, 1))
})

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
}
