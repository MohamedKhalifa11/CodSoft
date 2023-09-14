const toggleBtn = document.querySelector(".toggle-btn");
const navigation = document.querySelector(".navigation");
const overlay = document.querySelector(".overlay");

toggleBtn.addEventListener("click", () => {
  navigation.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  navigation.classList.remove("active");
  overlay.classList.remove("active");
});

// Fade in (sections)
// Create an observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the "active" class when the section is in view
      entry.target.classList.add('active');
    }
  });
});

// Target the sections you want to observe
const sections = document.querySelectorAll('section .container');

// Observe each section
sections.forEach(section => {
  observer.observe(section);
});


document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".auto-type", {
    strings: ["Frontend Developer", "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });
});



