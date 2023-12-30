const datePicker = document.querySelector(".date-picker")
const datePickerButton = document.querySelector(".date-picker-button")

datePicker.classList.remove("show")

datePickerButton.addEventListener("click", e => {
  datePicker.classList.add("show")
})

document.addEventListener("click", e => {
  if (!e.target.matches("button")) return

  console.log("button clicked")
})
