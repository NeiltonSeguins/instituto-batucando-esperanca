function openMenu() {
    let navConfig = document.getElementById("navbar");
    navConfig.style.display = "none";
    if (navConfig.style.display === "none") {
        navConfig.style.display = "block";
    } else {
        navConfig.style.display = "none";
    }
}

function closeMenu() {
    let navConfig = document.getElementById("navbar");
    if (navConfig.style.display === "block") {
        navConfig.style.display = "none";
    } else {
        navConfig.style.display = "block";
    }
}