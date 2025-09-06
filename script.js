const lightbox = document.getElementById("lightbox");
if (lightbox) {
  const img = lightbox.querySelector("img");
  const closeBtn = lightbox.querySelector(".close");
  const prevBtn = lightbox.querySelector(".prev");
  const nextBtn = lightbox.querySelector(".next");
  const photos = document.querySelectorAll(".gallery img");
  let current = 0;

  function show(index) {
    current = index;
    img.src = photos[current].src;
    lightbox.style.display = "flex";
  }

  photos.forEach((p, i) => {
    p.addEventListener("click", () => show(i));
  });

  closeBtn.addEventListener("click", () => (lightbox.style.display = "none"));
  prevBtn.addEventListener("click", () => show((current - 1 + photos.length) % photos.length));
  nextBtn.addEventListener("click", () => show((current + 1) % photos.length));

  window.addEventListener("keydown", e => {
    if (lightbox.style.display !== "flex") return;
    if (e.key === "Escape") lightbox.style.display = "none";
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "ArrowRight") nextBtn.click();
  });
}