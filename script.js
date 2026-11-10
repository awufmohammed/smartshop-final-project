"use strict";

// Show the current year in every page footer.
document.querySelectorAll(".year").forEach(el => { el.textContent = new Date().getFullYear(); });

// Sample products for the SmartShop class project (not a real store).
const products = [
  { name: "Wireless Headphones", category: "Audio", price: 39.99, icon: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=850&q=85", description: "Comfortable over-ear headphones for everyday listening." },
  { name: "Compact Keyboard", category: "Accessories", price: 29.99, icon: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=850&q=85", description: "A slim keyboard for your workspace." },
  { name: "Wireless Mouse", category: "Accessories", price: 19.99, icon: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=850&q=85", description: "An easy-to-use mouse for work and school." },
  { name: "Bluetooth Speaker", category: "Audio", price: 34.99, icon: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=850&q=85", description: "Portable audio for home and travel." },
  { name: "Laptop Computer", category: "Computers", price: 499.99, icon: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=850&q=85", description: "A laptop for studying, browsing and projects." },
  { name: "Digital Camera", category: "Electronics", price: 249.99, icon: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=850&q=85", description: "Capture everyday photos and videos." },
  { name: "Smartphone", category: "Electronics", price: 299.99, icon: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=850&q=85", description: "Stay connected with a modern smartphone." },
  { name: "Desktop Computer Setup", category: "Computers", price: 699.99, icon: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=850&q=85", description: "A complete setup for work and study." },
  { name: "USB Flash Drive", category: "Storage", price: 14.99, icon: "https://images.unsplash.com/photo-1618410320928-25228d811631?auto=format&fit=crop&w=850&q=85", description: "Portable storage for files and documents." },
  { name: "Portable SSD", category: "Storage", price: 69.99, icon: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&w=850&q=85", description: "Fast external storage for important files." },
  { name: "Tablet", category: "Electronics", price: 179.99, icon: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=850&q=85", description: "A convenient touchscreen device for reading and browsing." },
  { name: "Smart Watch", category: "Electronics", price: 89.99, icon: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=850&q=85", description: "A wearable device for everyday convenience." }
];

const productGrid = document.getElementById("productGrid");
if (productGrid) {
  const searchInput = document.getElementById("productSearch");
  const categorySelect = document.getElementById("categoryFilter");
  const productCount = document.getElementById("productCount");
  function renderProducts() {
    const term = searchInput.value.trim().toLowerCase();
    const category = categorySelect.value;
    const matches = products.filter(p => (category === "all" || p.category === category) &&
      (p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term)));
    productGrid.replaceChildren();
    matches.forEach(p => {
      const article = document.createElement("article"); article.className = "product-card";
      const visual = document.createElement("div"); visual.className = "product-visual"; const img = document.createElement("img"); img.src = p.icon; img.alt = "Product photograph: " + p.name; img.loading = "lazy"; visual.append(img);
      const body = document.createElement("div"); body.className = "product-body";
      const heading = document.createElement("h3"); heading.textContent = p.name;
      const description = document.createElement("p"); description.textContent = p.description;
      const price = document.createElement("strong"); price.textContent = "$" + p.price.toFixed(2);
      body.append(heading, description, price); article.append(visual, body); productGrid.append(article);
    });
    productCount.textContent = matches.length + " product" + (matches.length === 1 ? "" : "s") + " found";
    if (!matches.length) { const message = document.createElement("p"); message.textContent = "No products match your search."; productGrid.append(message); }
  }
  searchInput.addEventListener("input", renderProducts);
  categorySelect.addEventListener("change", renderProducts);
  renderProducts();
}

// Corrected pseudocode: milesPerGallon = milesTraveled / gallonsOfGasUsed.
const mpgForm = document.getElementById("mpgForm");
if (mpgForm) {
  const result = document.getElementById("mpgResult");
  mpgForm.addEventListener("submit", event => {
    event.preventDefault();
    const milesText = document.getElementById("miles").value.trim();
    const gallonsText = document.getElementById("gallons").value.trim();
    const milesTraveled = Number(milesText);
    const gallonsOfGasUsed = Number(gallonsText);
    if (milesText === "" || gallonsText === "" || !Number.isFinite(milesTraveled) || !Number.isFinite(gallonsOfGasUsed) || milesTraveled < 0 || gallonsOfGasUsed <= 0) {
      result.textContent = "Please enter valid miles (0 or more) and gallons (greater than 0).";
      result.classList.add("error");
      return;
    }
    const milesPerGallon = milesTraveled / gallonsOfGasUsed;
    result.classList.remove("error");
    result.textContent = "Fuel efficiency: " + milesPerGallon.toFixed(2) + " MPG";
  });
  mpgForm.addEventListener("reset", () => {
    result.classList.remove("error");
    result.textContent = "Your MPG result will appear here.";
  });
}

// GitHub Pages cannot process forms. This opens the user's email app.
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    if (!name || !email || !message) return;
    const subject = encodeURIComponent("SmartShop question from " + name);
    const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message);
    document.getElementById("contactStatus").textContent = "Your email app will open. Review and send the message there. No message has been sent yet.";
    // Replace the placeholder with a verified address before using the contact form publicly.
    window.location.href = "mailto:contact@example.com?subject=" + subject + "&body=" + body;
  });
}


// SmartShop image slider: functions, let, for, and DOM manipulation.
(function () {
  const slider = document.getElementById("photo-slider");
  if (!slider) return; // Only the homepage contains the slider.
  const slides = slider.querySelectorAll(".slide");
  const dotsContainer = document.getElementById("slide-dots");
  const count = document.getElementById("slide-count");
  const toggle = document.getElementById("slide-toggle");
  let slideIndex = 0;
  let autoTimer = null;
  let isPlaying = true;
  const dots = [];

  function showSlide(index) {
    slideIndex = (index + slides.length) % slides.length;
    for (let i = 0; i < slides.length; i++) {
      const active = i === slideIndex;
      slides[i].classList.toggle("is-active", active);
      slides[i].setAttribute("aria-hidden", String(!active));
      dots[i].classList.toggle("is-active", active);
      dots[i].setAttribute("aria-current", String(active));
    }
    count.textContent = `${slideIndex + 1} / ${slides.length}`;
  }
  function nextSlide() { showSlide(slideIndex + 1); }
  function previousSlide() { showSlide(slideIndex - 1); }
  function startAutoPlay() {
    clearInterval(autoTimer);
    if (isPlaying) autoTimer = setInterval(nextSlide, 4000);
  }
  function navigateTo(index) { showSlide(index); startAutoPlay(); }

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "slider-dot";
    dot.setAttribute("aria-label", `Go to image ${i + 1}`);
    dot.addEventListener("click", () => navigateTo(i));
    dotsContainer.appendChild(dot);
    dots.push(dot);
  }
  document.getElementById("slide-next").addEventListener("click", () => navigateTo(slideIndex + 1));
  document.getElementById("slide-prev").addEventListener("click", () => navigateTo(slideIndex - 1));
  toggle.addEventListener("click", () => {
    isPlaying = !isPlaying;
    toggle.textContent = isPlaying ? "Pause" : "Play";
    toggle.setAttribute("aria-label", isPlaying ? "Pause slideshow" : "Play slideshow");
    startAutoPlay();
  });
  slider.addEventListener("mouseenter", () => clearInterval(autoTimer));
  slider.addEventListener("mouseleave", startAutoPlay);
  slider.addEventListener("focusin", () => clearInterval(autoTimer));
  slider.addEventListener("focusout", (event) => {
    if (!slider.contains(event.relatedTarget)) startAutoPlay();
  });
  showSlide(0);
  startAutoPlay();
})();
