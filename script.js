
document.addEventListener("DOMContentLoaded",()=>{
  const search=document.querySelector("[data-search]");
  if(search){
    search.addEventListener("input",()=>{
      const q=search.value.toLowerCase().trim();
      document.querySelectorAll("[data-grid] .card").forEach(c=>{
        c.style.display=c.innerText.toLowerCase().includes(q)?"block":"none";
      });
    });
  }
});
