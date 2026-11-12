// Add completed assignments to this list. Each URL should point to a working page.
// To add another assignment, copy one object and change title, description, category, and url.
const classAssignments = [
  {
    title: "Miles Per Gallon Calculator",
    description: "A JavaScript calculator for vehicle fuel efficiency.",
    category: "JavaScript",
    url: "mpg.html"
  },
  {
    title: "Automatic Image Slider",
    description: "A responsive image gallery with automatic playback and navigation controls.",
    category: "HTML · CSS · JavaScript",
    url: "index.html#photo-slider"
  }
  // Example of another completed assignment:
  // ,{
  //   title: "My Next Assignment",
  //   description: "A short description of what I built.",
  //   category: "JavaScript",
  //   url: "assignments/my-next-assignment.html"
  // }
];

function showClassWork() {
  const list = document.getElementById("classwork-list");
  if (!list) return;
  const count = document.getElementById("work-count");
  count.textContent = `${classAssignments.length} projects`;
  for (let i = 0; i < classAssignments.length; i++) {
    const assignment = classAssignments[i];
    const card = document.createElement("article");
    card.className = "classwork-card";
    const category = document.createElement("span");
    category.className = "work-category";
    category.textContent = assignment.category;
    const title = document.createElement("h3");
    title.textContent = assignment.title;
    const description = document.createElement("p");
    description.textContent = assignment.description;
    const link = document.createElement("a");
    link.className = "button";
    link.href = assignment.url;
    link.textContent = "Open Assignment →";
    card.append(category, title, description, link);
    list.appendChild(card);
  }
}
showClassWork();
