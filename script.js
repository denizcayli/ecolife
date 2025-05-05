document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".site-header");

  // Açılış animasyonu
  header.classList.add("visible");

  // Scroll animasyonu
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobil/tıklama destekli dropdown menü
  const dropdownToggle = document.querySelector(".dropdown > a");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener("click", function (e) {
      // Mobilde tıklanabilir yapmak için:
      e.preventDefault(); // link davranışını engelle
      dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Sayfa dışında tıklanınca menüyü kapat
    document.addEventListener("click", function (e) {
      if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = "none";
      }
    });
  }
});
