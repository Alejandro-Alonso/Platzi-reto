function showResults() {
   // Recoge las respuestas
   const question1 = document.querySelector('input[name="question1"]:checked').value;
   const question2 = document.getElementById('question2').value;
   const question3 = document.getElementById('question3').value;
   const question4 = document.getElementById('question4').value;

   // Genera el resultado con el botón de copiar
   const resultContainer = document.getElementById('result-container');
   resultContainer.innerHTML = `
        <p id="prompt-text">Crea una ${question1} en alta calidad teniendo en cuenta esto: ${question2} y ${question3}. Toda esta composición usará colores ${question4}.</p>
        <button class="button" onclick="copyPrompt()">Copiar prompt</button>
    `;
}

function copyPrompt() {
   // Encuentra el elemento que contiene el texto del prompt
   const promptText = document.getElementById('prompt-text').innerText;

   // Crea un elemento temporal de textarea para copiar el texto
   const tempTextarea = document.createElement('textarea');
   tempTextarea.value = promptText;
   document.body.appendChild(tempTextarea);

   // Selecciona el contenido del textarea
   tempTextarea.select();
   tempTextarea.setSelectionRange(0, 99999); // Para dispositivos móviles

   // Copia el texto al portapapeles
   document.execCommand('copy');

   // Elimina el textarea temporal
   document.body.removeChild(tempTextarea);

   // Opcional: mostrar una alerta o un mensaje de confirmación
   let text = document.querySelector('.copy-text')
   text.classList.add("show");
}

// Configuración de Swiper
const swiper = new Swiper('.swiper', {
   hashNavigation: {
      watchState: true,
   },
});

// Evento para la navegación y recolección de datos en cada "Construir prompt"
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
   button.addEventListener('click', function (e) {
      if (this.getAttribute('href') === '#slide5') {
         e.preventDefault();
         showResults();
         swiper.slideTo(4);  // Navega al último slide (índice 4 porque es cero basado)
      }
   });
});
