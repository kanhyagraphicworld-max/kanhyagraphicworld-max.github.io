// ================= COMMON SIDEBAR JS =================

const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

// OPEN MENU
function openMenu(){
  sidebar.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow="hidden";
}

// CLOSE MENU
function closeMenu(){
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow="auto";
}

// AUTO ACTIVE PAGE
const currentPage = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("nav a, .sidebar a").forEach(link=>{
  if(link.getAttribute("href") === currentPage){
    link.classList.add("active");
  }
});
