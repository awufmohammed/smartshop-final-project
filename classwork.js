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
  title: "Creating a Budget in MS Word with Tables",
  description: "My completed budget assignment using Microsoft Word tables.",
  category: "Microsoft Word",
  url: "assignments/budget%20breakdown.docx"
},

{
  title: "Chapter 5 Exercises",
  description: "JavaScript Chapter 5 exercises 1 through 5.",
  category: "JavaScript",
  url: "assignments/chapter5.html"
},

{
  title: "CSS Navigation",
  description: "My CSS navigation assignment.",
  category: "HTML · CSS",
  url: "assignments/CSS%20navigation.docx"
},
{
  title: "Exercise 1",
  description: "My completed class exercise.",
  category: "Class Exercise",
  url: "assignments/Exercise%201%20(1).png"
},
{
  title: "HTTPS Assignment",
  description: "My assignment about HTTPS.",
  category: "Web Technology",
  url: "assignments/https.docx"
},
{
  title: "JavaScript Chapter 1",
  description: "My completed JavaScript Chapter 1 exercise.",
  category: "JavaScript",
  url: "assignments/javascript%20chapter1%20(1).png"
},
{
  title: "HTML Assignment",
  description: "My HTML class assignment.",
  category: "HTML",
  url: "assignments/index%20(2).html"
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
