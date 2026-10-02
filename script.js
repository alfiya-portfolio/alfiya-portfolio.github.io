const menuBtn=document.getElementById("menuBtn");
const nav=document.getElementById("nav");
if(menuBtn) menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const glow=document.querySelector(".cursor-glow");
window.addEventListener("mousemove",(e)=>{
  if(glow){glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px";}
});

document.getElementById("year").textContent=new Date().getFullYear();
