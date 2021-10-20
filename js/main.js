function navbar() {
    let navConfig = document.getElementById("navbar");
    if (navConfig.style.display === "block") {
        navConfig.style.display = "none";
    } else {
        navConfig.style.display = "block";
    }
  }