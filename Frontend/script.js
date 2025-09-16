// Scroll Animations
    function initScrollAnimations() {
      const elements = document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      }, { threshold: 0.15 });
      elements.forEach((el) => observer.observe(el));
    }

    // Stats Counter
    function initCounters() {
      const counters = document.querySelectorAll(".stat-number");
      const speed = 200;
      const animate = (counter) => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.innerText;
          const inc = Math.ceil(target / speed);
          if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 20);
          } else counter.innerText = target;
        };
        updateCount();
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
            animate(entry.target);
            entry.target.classList.add("counted");
          }
        });
      }, { threshold: 0.5 });
      counters.forEach((counter) => observer.observe(counter));
    }

    // Testimonials Carousel
    function initCarousel() {
      const track = document.querySelector(".carousel-track");
      const slides = Array.from(track.children);
      const prevBtn = document.querySelector(".carousel-btn.prev");
      const nextBtn = document.querySelector(".carousel-btn.next");
      const dotsNav = document.querySelector(".carousel-dots");
      let currentIndex = 0;

      slides.forEach((_, i) => {
        const dot = document.createElement("button");
        if (i === 0) dot.classList.add("active");
        dotsNav.appendChild(dot);
        dot.addEventListener("click", () => moveToSlide(i));
      });
      const dots = Array.from(dotsNav.children);

      function moveToSlide(index) {
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
        currentIndex = index;
      }

      prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        moveToSlide(currentIndex);
      });
      nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        moveToSlide(currentIndex);
      });

      setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        moveToSlide(currentIndex);
      }, 5000);
    }

    // Run
    document.addEventListener("DOMContentLoaded", () => {
      initScrollAnimations();
      initCounters();
      initCarousel();
    });


    // logo fade
   function initIntroLogo() {
  const logo = document.getElementById("intro-logo");

  // Fade in
  setTimeout(() => {
    logo.classList.add("visible");
  }, 250);

  // Fade out after 2s
  setTimeout(() => {
    logo.classList.add("hide");
  }, 1800);

  // Remove from DOM after fade
  setTimeout(() => {
    logo.style.display = "none";
  }, 2500);
}

document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimations();
  initCounters();
  initCarousel();
  initIntroLogo();
});

// why prashikshanam
  const cards = document.querySelectorAll(".cards-container1 .card1");
        let currentCardIndex = 0;
        let animationInterval;

        function showNextCard() {
            // Remove 'active' and 'prev' classes from all cards
            cards.forEach(card => {
                card.classList.remove("active", "prev");
            });

            // Add 'prev' class to the card that was just visible
            const previousCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
            cards[previousCardIndex].classList.add("prev");

            // Add 'active' class to the new current card
            cards[currentCardIndex].classList.add("active");

            // Increment the index for the next cycle, using the modulo operator to loop back to 0
            currentCardIndex = (currentCardIndex + 1) % cards.length;
        }

        // Function to handle the animation start/stop
        function handleScroll() {
            const section = document.getElementById("why");
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Check if the top of the section is in the viewport
            if (sectionTop < windowHeight && sectionTop > -section.offsetHeight) {
                // If not already running, start the animation
                if (!animationInterval) {
                    showNextCard(); // Show the first card immediately
                    animationInterval = setInterval(showNextCard, 2000);
 }
            } else {
                // If the section is out of the viewport, stop the animation
                clearInterval(animationInterval);
                animationInterval = null;
            }
        }

        // Add the scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Also check on page load in case the section is already in view
        window.addEventListener("DOMContentLoaded", handleScroll);



