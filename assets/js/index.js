const espacio = document.getElementById('espacio');
const numEstrellas = 600;
const alturaSitioWeb = window.innerHeight; // Obtiene la altura del sitio web en unidades de vh



for (let i = 0; i < numEstrellas; i++) {
  const estrella = document.createElement('div');
  estrella.style.width = '2.5px';
  estrella.style.height = '2.5px';
  estrella.style.left = Math.random() * 97 + '%';
  estrella.style.top = Math.random()  * 300 + '%';
  estrella.className = 'estrella';
  espacio.appendChild(estrella);
}


function mostrarMensaje() {
  var tecnologias = document.querySelectorAll('#tecnologias');
  for (var i = 0; i < tecnologias.length; i++) {
      tecnologias[i].style.display = "flex";
  }
}
