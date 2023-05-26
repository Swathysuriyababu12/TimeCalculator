function calculateTotalTime() {
  // Get the input values
  const hours = parseInt(document.getElementById("hours1").value) || 0;
  const minutes = parseInt(document.getElementById("minutes1").value) || 0;
  const seconds = parseInt(document.getElementById("seconds1").value) || 0;

  // Calculate the total time in seconds
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  // Convert the total time back to hours, minutes, and seconds
  const totalHours = Math.floor(totalSeconds / 3600);
  const remainingSeconds = totalSeconds % 3600;
  const totalMinutes = Math.floor(remainingSeconds / 60);
  const finalSeconds = remainingSeconds % 60;

  //   // Display the total time
  //   const totalTimeElement = document.getElementById("totalTime");
  //   totalTimeElement.textContent = `${totalHours} hours, ${totalMinutes} minutes, ${finalSeconds} seconds.`;

  var time1 = `${totalHours}:${totalMinutes}:${finalSeconds}`;

  const hours2 = parseInt(document.getElementById("hours2").value) || 0;
  const minutes2 = parseInt(document.getElementById("minutes2").value) || 0;
  const seconds2 = parseInt(document.getElementById("seconds2").value) || 0;

  // Calculate the total time in seconds
  const totalSeconds2 = hours2 * 3600 + minutes2 * 60 + seconds2;

  // Convert the total time back to hours, minutes, and seconds
  const totalHours2 = Math.floor(totalSeconds2 / 3600);
  const remainingSeconds2 = totalSeconds2 % 3600;
  const totalMinutes2 = Math.floor(remainingSeconds2 / 60);
  const finalSeconds2 = remainingSeconds2 % 60;

  //   // Display the total time
  //   const totalTimeElement = document.getElementById("totalTime");
  //   totalTimeElement.textContent = `${totalHours} hours, ${totalMinutes} minutes, ${finalSeconds} seconds.`;

  var time2 = `${totalHours2}:${totalMinutes2}:${finalSeconds2}`;
  //   console.log(addTimes(time1, time2));
  const totalTimeElement = document.getElementById("totaltime");
  totalTimeElement.textContent = addTimes(time1, time2);
}
function addTimes(time1, time2) {
  const [hours1, minutes1, seconds1] = time1.split(":").map(Number);
  const [hours2, minutes2, seconds2] = time2.split(":").map(Number);

  let totalSeconds = seconds1 + seconds2;
  let totalMinutes = minutes1 + minutes2;
  let totalHours = hours1 + hours2;

  if (totalSeconds >= 60) {
    totalSeconds -= 60;
    totalMinutes++;
  }

  if (totalMinutes >= 60) {
    totalMinutes -= 60;
    totalHours++;
  }

  const formattedHours = padZero(totalHours);
  const formattedMinutes = padZero(totalMinutes);
  const formattedSeconds = padZero(totalSeconds);

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function padZero(value) {
  return value.toString().padStart(2, "0");
}
