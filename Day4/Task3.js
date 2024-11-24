function ans() {
  const targetDateInput = document.getElementById("date").value;

  const targetDate = new Date(targetDateInput);
  const currentDate = new Date();

  if (targetDate <= currentDate) {
    document.getElementById("result").textContent =
      "The entered date is in the past. Please select a future date.";
    return;
  }

  const time = targetDate - currentDate;

  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  document.write(
    "Time Remaining :" +
      days +
      " days " +
      hours +
      " hours " +
      minutes +
      " minutes " +
      seconds +
      " seconds "
  ); 
}
