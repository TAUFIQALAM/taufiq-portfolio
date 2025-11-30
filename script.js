const track = document.querySelector(".carousel-track");
const images = document.querySelectorAll(".carousel-track img");

let index = 0;

document.getElementById("nextBtn").onclick = () => {
    index = (index + 1) % images.length;
    track.style.transform = `translateX(-${index * 100}%)`;
};

document.getElementById("prevBtn").onclick = () => {
    index = index === 0 ? images.length - 1 : index - 1;
    track.style.transform = `translateX(-${index * 100}%)`;
};
