const painels = document.querySelectorAll(".painel");
painels.forEach((painel) => {
  painel.addEventListener("click", () => {
     removeClass()
     painel.classList.add('active')
  });
});

function removeClass(){
   painels.forEach(painel => {
    painel.classList.remove('active')
   })
}