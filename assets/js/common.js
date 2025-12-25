const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

/* Toggle sidebar */
menuBtn?.addEventListener("click",()=>{
  menuBtn.classList.toggle("active");
  sidebar.classList.toggle("active");
  document.body.style.overflow =
    sidebar.classList.contains("active") ? "hidden" : "";
});

/* Auto active page highlight */
const links = document.querySelectorAll(".sidebar a");
const current = location.pathname.split("/").pop();

links.forEach(link=>{
  if(link.getAttribute("href") === current){
    link.classList.add("active");
  }
});
