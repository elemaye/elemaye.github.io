function toggleMenu() {
    document.getElementById("main-nav").classList.toggle("hide");
  }
  document.getElementById("last-update").innerHTML = "Last Updated: " + document.lastModified;
  var date = new Date();
  document.getElementById("get-year").innerHTML = date.getFullYear();