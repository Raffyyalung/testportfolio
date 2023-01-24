const homeLink = document.getElementById("home-link");
const aboutLink = document.getElementById("about-link");
const contactLink = document.getElementById("contact-link");
const homeContent = document.getElementById("home-content");
const aboutContent = document.getElementById("about-content");
const contactContent = document.getElementById("contact-content");


aboutLink.addEventListener("click", function() {
  homeContent.style.display = "none";
  aboutContent.style.display = "block";
  contactContent.style.display = "none";
 
});

contactLink.addEventListener("click", function() {
  homeContent.style.display = "none";
  aboutContent.style.display = "none";
  contactContent.style.display = "block";
 
});

homeLink.addEventListener("click", function() {
  homeContent.style.display = "block";
  aboutContent.style.display = "none";
  contactContent.style.display = "none";
  
});
