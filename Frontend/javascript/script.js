
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
            cards.forEach(card => {
                card.classList.remove("active", "prev");
            });
            const previousCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
            cards[previousCardIndex].classList.add("prev");
            cards[currentCardIndex].classList.add("active");
            currentCardIndex = (currentCardIndex + 1) % cards.length;
        }
        function handleScroll() {
            const section = document.getElementById("why");
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight && sectionTop > -section.offsetHeight) {
                if (!animationInterval) {
                    showNextCard();
                    animationInterval = setInterval(showNextCard, 2000);
 }
            } else {

                clearInterval(animationInterval);
                animationInterval = null;
            }
        }
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("DOMContentLoaded", handleScroll);



//     steps


const container = document.getElementById('container');
  const boxes = document.querySelectorAll('.box');
  const svg = document.getElementById('connections');
  let scrollTriggered = false;

  function connectBoxes(b1, b2, delay = 0) {
    const x1 = b1.offsetLeft + b1.offsetWidth / 2;
    const y1 = b1.offsetTop + b1.offsetHeight / 2;
    const x2 = b2.offsetLeft + b2.offsetWidth / 2;
    const y2 = b2.offsetTop + b2.offsetHeight / 2;

    const offset = 120;
    const cx1 = (x1 + x2) / 2;
    const cy1 = (y1 + y2) / 2 - offset;
    const cx2 = (x1 + x2) / 2;
    const cy2 = (y1 + y2) / 2 + offset;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `M ${x1},${y1} C ${cx1},${cy1} ${cx2},${cy2} ${x2},${y2}`);
    path.setAttribute("stroke", "black");
    path.setAttribute("stroke-width", "2.5");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke-dasharray", "5 5"); 
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("marker-end", "url(#arrowhead)");

    svg.appendChild(path);

    // Animate drawing
    const length = path.getTotalLength();
    path.style.strokeDasharray = length; // solid length for animation
    path.style.strokeDashoffset = length;

    setTimeout(() => {
      path.style.transition = "stroke-dashoffset 2s linear";
      path.style.strokeDashoffset = "0";
      // after animation, restore dotted look
      setTimeout(() => {
        path.style.strokeDasharray = "5 5";
      }, 5000);
    }, delay);
  }

  function redrawConnections() {
    connectBoxes(boxes[0], boxes[1], 2000);     
    connectBoxes(boxes[1], boxes[2], 3000);  
    connectBoxes(boxes[2], boxes[3], 4000); 
  }

  window.addEventListener("scroll", () => {
    if (!scrollTriggered && window.scrollY > 50) {
      scrollTriggered = true; // only once
      redrawConnections();
    }
  });



        



        



