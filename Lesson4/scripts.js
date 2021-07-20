document.getElementById("last-update").innerHTML = "Last Updated: " + document.lastModified;
var date = new Date();
document.getElementById("get-year").innerHTML = date.getFullYear();

  let daynames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let d = new Date();
  let dayName = daynames[d.getDay()];
  let monthName = months[d.getMonth()];
  let year = d.getFullYear();
  let fulldate = dayName + ", " + monthName + " " + d.getDate() + ", " + year;
  document.getElementById("currentdate").innerHTML = fulldate;