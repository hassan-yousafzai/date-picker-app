console.log("hi")

const datePicker = document.querySelector(".date-picker")
const datePickerButton = document.querySelector(".date-picker-button")

datePickerButton.addEventListener("click", e => {
  datePicker.classList.toggle("show")
})
