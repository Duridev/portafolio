const espacio = document.getElementById('espacio');
const numEstrellas = 800;

for (let i = 0; i < numEstrellas; i++) {
  const estrella = document.createElement('div');
  estrella.style.width = '2.5px';
  estrella.style.height = '2.5px';
  estrella.style.left = Math.random() * 100 + 'vw';
  estrella.style.top = Math.random() * 400 + 'vh';
  estrella.className = 'estrella';
  espacio.appendChild(estrella);
}


function mostrarMensaje() {
  var tecnologias = document.querySelectorAll('#tecnologias');
  for (var i = 0; i < tecnologias.length; i++) {
      tecnologias[i].style.display = "flex";
  }
}
