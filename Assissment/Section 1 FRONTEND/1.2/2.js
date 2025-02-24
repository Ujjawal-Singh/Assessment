const productImages = document.querySelectorAll(".product-preview");
const lightbox = document.querySelector(".image-lightbox");
const lightboxImg = document.querySelector("#displayed-image");
const closeBtn = document.querySelector(".close-lightbox");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

let currentImageIndex = 0;

productImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
        currentImageIndex = index;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});


prevBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + productImages.length) % productImages.length;
    lightboxImg.src = productImages[currentImageIndex].src;
});

nextBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % productImages.length;
    lightboxImg.src = productImages[currentImageIndex].src;
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        lightbox.style.display = "none";
    } else if (event.key === "ArrowLeft") {
        prevBtn.click();
    } else if (event.key === "ArrowRight") {
        nextBtn.click();
    }
});