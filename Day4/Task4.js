function ans() {
  function getTimeRemaining(currentTime, lunchTime) {
    const now = new Date(`1970-01-01T${currentTime}:00`);
    const lunch = new Date(`1970-01-01T${lunchTime}:00`);

    let timeDifference = lunch - now;

    if (timeDifference < 0) {
      timeDifference += 24 * 60 * 60 * 1000;
    }

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    return hours + ":" + minutes.toString();
  }

  const currentTime = document.getElementById("ctime").value;
  const lunchTime = document.getElementById("ltime").value;

  const timeRemaining = getTimeRemaining(currentTime, lunchTime);
  document.write("Time remaining for lunch: " + timeRemaining);
}
