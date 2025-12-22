// Hero Section 
let heroIndex = 0;
const heroSlides = document.querySelectorAll(".banner-slide");
const heroTotal = heroSlides.length;
const heroSlider = document.getElementById("slider");

//Hero slide function
function showHeroSlide(n) {
  if (n < 0) heroIndex = heroTotal - 1;
  else if (n >= heroTotal) heroIndex = 0;
  else heroIndex = n;

  heroSlider.style.transform = `translateX(-${heroIndex * 100}%)`;
  heroSlider.style.transition = "transform 0.7s ease-in-out";
}

// Previous/Next buttons 
document.getElementById("test-prev").addEventListener("click", () => showHeroSlide(heroIndex - 1));
document.getElementById("test-next").addEventListener("click", () => showHeroSlide(heroIndex + 1));

//slide every 5 seconds
setInterval(() => showHeroSlide(heroIndex + 1), 5000);



// TESTIMONIAL Section
let testIndex = 0;
const testSlides = document.querySelectorAll(".testimonial-img img");
const testTotal = testSlides.length;
const testSlider = document.getElementById("testimonial-slider");

// Function testimonial image
function showTestimonialSlide(n) {
  if (n < 0) testIndex = testTotal - 1;
  else if (n >= testTotal) testIndex = 0;
  else testIndex = n;

  testSlider.style.transform = `translateX(-${testIndex * 100}%)`;
  testSlider.style.transition = "transform 0.7s ease-in-out";
}

// Previous/Next buttons
document.getElementById("test-prev").addEventListener("click", () => showTestimonialSlide(testIndex - 1));
document.getElementById("test-next").addEventListener("click", () => showTestimonialSlide(testIndex + 1));

// Auto slide for testimonials
setInterval(() => showTestimonialSlide(testIndex + 1), 4000);


//Playlist Section 
let playlistIndex = 0;
const playlistTrack = document.getElementById("playlist-track");
const playlistSlides = document.querySelectorAll("#playlist-track img");
const playlistTotal = playlistSlides.length;

// Function to show specific slide
function showPlaylistSlide(n) {
  if (n < 0) playlistIndex = playlistTotal - 1;
  else if (n >= playlistTotal) playlistIndex = 0;
  else playlistIndex = n;

  playlistTrack.style.transform = `translateX(-${playlistIndex * 100}%)`;
  playlistTrack.style.transition = "transform 0.7s ease-in-out";
}

// Prev & Next Buttons
document
  .getElementById("playlist-prev")
  .addEventListener("click", () => showPlaylistSlide(playlistIndex - 1));

document
  .getElementById("playlist-next")
  .addEventListener("click", () => showPlaylistSlide(playlistIndex + 1));

setInterval(() => showPlaylistSlide(playlistIndex + 1), 5000);






