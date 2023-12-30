const datePicker = document.querySelector(".date-picker")
const datePickerButton = document.querySelector(".date-picker-button")

datePicker.classList.remove("show")

datePickerButton.addEventListener("click", e => {
  datePicker.classList.add("show")
})
