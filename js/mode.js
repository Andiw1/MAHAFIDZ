function saveDarkModeStatus(isDarkMode) {
    console.log("Saving dark mode status:", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}

function isDarkModeEnabled() {
    var darkModeStatus = localStorage.getItem("darkMode");
    console.log("Retrieving dark mode status:", darkModeStatus);
    return darkModeStatus === "enabled";
}

function applyDarkMode(isDarkMode) {
    var element = document.body;
    var iconElement = document.getElementById("darkModeIcon");

    // Toggle dark mode class
    element.classList.toggle("dark-mode", isDarkMode);

    // Toggle icon and set color
    if (isDarkMode) {
        iconElement.classList.remove("bi-sun-fill");
        iconElement.classList.add("bi-moon-stars-fill");
        iconElement.style.color = "yellow";
    } else {
        iconElement.classList.remove("bi-moon-stars-fill");
        iconElement.classList.add("bi-sun-fill");
        iconElement.style.color = "orange";
    }

    // Set warna untuk mode gelap atau terang
    iconElement.style.color = isDarkMode ? "yellow" : "orange";

    // Hapus class animasi pada ikon
    iconElement.classList.remove("animate-icon");
    // Tambahkan class animasi pada ikon setelah delay
    setTimeout(() => {
        iconElement.classList.add("animate-icon");
    }, 10);

    // Simpan status dark mode di localStorage
    saveDarkModeStatus(isDarkMode);
}

// Fungsi toggleDarkMode
function toggleDarkMode() {
    var isDarkMode = !isDarkModeEnabled();
    applyDarkMode(isDarkMode);
}

// Script saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
    var isDarkMode = isDarkModeEnabled();

    // Set warna ikon pada navbar sesuai dengan status dark mode
    var iconElement = document.getElementById("darkModeIcon");
    iconElement.style.color = isDarkMode ? "yellow" : "orange";

    // Terapkan dark mode jika status dark mode di localStorage adalah "enabled"
    applyDarkMode(isDarkMode);
});



