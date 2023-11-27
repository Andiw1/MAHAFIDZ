document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");
    var navbarTogglerIconList = document.querySelector(".navbar-toggler .bi-list");
    var navbarTogglerIconArrow = document.querySelector(".navbar-toggler .bi-box-arrow-right");
    var clock = document.querySelector(".clock");
    var date = document.querySelector("#formattedDate");
    var buttonDivider = document.querySelector(".button-divider");
    var logoImage = document.getElementById("mahafidz");

    // Simpan tinggi navbar untuk dijadikan nilai offset
    var navbarHeight = navbar.offsetHeight;

    window.addEventListener("scroll", function () {
      var scrollPosition = window.scrollY;

      // Mengubah warna ikon pada tombol navbar-toggler
      navbarTogglerIconList.classList.toggle("text-danger", scrollPosition <= 20);
      navbarTogglerIconList.classList.toggle("text-light", scrollPosition > 20);
      navbarTogglerIconArrow.classList.toggle("text-danger", scrollPosition <= 20);
      navbarTogglerIconArrow.classList.toggle("text-light", scrollPosition > 20);

      // Mengubah latar belakang navbar dan menambahkan shadow saat di-scroll
      if (scrollPosition > 20) {
        navbar.style.backgroundImage = "url('../../img/bg/contact-bg-dark.png')";
        navbar.style.backgroundSize = "cover"; // Sesuaikan dengan kebutuhan Anda
        navbar.style.backgroundPosition = "center 8%"; // Sesuaikan nilai posisi vertikal (y)
        navbar.classList.add("shadow", "fade-in"); // Menambahkan kelas fade-in untuk animasi muncul
        navbar.style.transition = "background-image 5s ease, box-shadow 0.5s ease"; // Animasi smooth untuk latar belakang dan shadow
        logoImage.style.filter = "invert(100%)";
      } else {
        navbar.style.backgroundImage = "none"; // Hapus latar belakang gambar saat tidak di-scroll
        navbar.classList.remove("shadow", "fade-in");
        navbar.style.transition = "background-image 0.5s ease, box-shadow 0.5s ease"; // Animasi smooth saat kembali ke posisi awal
        logoImage.style.filter = "none";
      }

      // Mengubah warna teks jam dan tanggal saat di-scroll
      if (scrollPosition > 20) {
        clock.classList.add("text-light");
        date.classList.add("text-light");
        clock.style.fontFamily = date.style.fontFamily = scrollPosition > 20 ? "'Britanic', sans-serif" : "initial";
        // Mengubah warna garis vertikal menjadi putih saat di-scroll
        buttonDivider.classList.remove("border-dark");
        buttonDivider.classList.add("border-light");
      } else {
        clock.classList.remove("text-light");
        date.classList.remove("text-light");
        // Mengubah warna garis vertikal menjadi putih saat di-scroll
        buttonDivider.classList.remove("border-dark");
        buttonDivider.classList.add("border-light");
      }
    });
  });