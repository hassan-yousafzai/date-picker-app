import {
  format,
  fromUnixTime,
  getUnixTime,
  addMonths,
  subMonths,
  eachDayOfInterval,
  startOfMonth,
  startOfWeek,
  endOfMonth,
  endOfWeek,
  getDate,
  isSameMonth
} from "date-fns"

const datePicker = document.querySelector(".date-picker")
const datePickerButton = document.querySelector(".date-picker-button")
const datePickerHeaderText = document.querySelector(".current-month")
const previousMonthButton = document.querySelector(".prev-month-button")
const nextMonthButton = document.querySelector(".next-month-button")
const datePickerGrid = document.querySelector(".date-picker-grid-dates")

let currentDate = new Date()

setDate(new Date())

datePickerButton.addEventListener("click", e => {
  datePicker.classList.toggle("show")

  const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate)
  currentDate = selectedDate // show the current selectedDate when user opens datepicker
  setupDatePicker()
})

nextMonthButton.addEventListener("click", e => {
  currentDate = addMonths(currentDate, 1)
  setupDatePicker()
})

previousMonthButton.addEventListener("click", e => {
  currentDate = subMonths(currentDate, 1)
  setupDatePicker()
})

function setDate(date) {
  datePickerButton.innerText = format(date, "MMMM do, yyyy")
  datePickerButton.dataset.selectedDate = getUnixTime(date)
}

function setupDatePicker(selectedDate) {
  datePickerHeaderText.innerText = format(currentDate, "MMMM - yyyy")
  setupDates(selectedDate)
}

function setupDates(selectedDate) {
  const firstWeekStart = startOfWeek(startOfMonth(currentDate))
  const lastWeekEnd = endOfWeek(endOfMonth(currentDate))
  const dates = eachDayOfInterval({ start: firstWeekStart, end: lastWeekEnd })
  dates.forEach(date => {
    const dateElement = document.createElement("button")
    if (!isSameMonth(date, currentDate)) {
      dateElement.classList.add("date-picker-other-month-date")
    }

    dateElement.classList.add("date")
    dateElement.innerText = getDate(date)
    datePickerGrid.appendChild(dateElement)
  })
}
