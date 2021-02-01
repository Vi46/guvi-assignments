let button = document.getElementsByTagName('p')[0];

function RBC (e) {
  p.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
}

p.addEventListener("click", RBC);
window.onload = RBC();