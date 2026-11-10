"use strict";

// Show the current year in every page footer.
document.querySelectorAll(".year").forEach(el => { el.textContent = new Date().getFullYear(); });

// Sample products for the SmartShop class project (not a real store).
const products = [
  { name: "Wireless Headphones", category: "Audio", price: 39.99, icon: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=850&q=85", description: "Comfortable audio for studying and relaxing." },
  { name: "Compact Keyboard", category: "Accessories", price: 29.99, icon: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=850&q=85", description: "A practical keyboard for your desk." },
  { name: "Wireless Mouse", category: "Accessories", price: 19.99, icon: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=850&q=85", description: "Easy navigation for everyday tasks." },
  { name: "USB Flash Drive", category: "Storage", price: 14.99, icon: "https://images.unsplash.com/photo-1618410320928-25228d811631?auto=format&fit=crop&w=850&q=85", description: "Carry school files and documents." },
  { name: "Portable SSD", category: "Storage", price: 69.99, icon: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&w=850&q=85", description: "Extra space for important files." },
  { name: "Bluetooth Speaker", category: "Audio", price: 34.99, icon: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=850&q=85", description: "Compact sound for your room." }
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
