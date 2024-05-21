var hola = new Swiper(".mySwiper", {
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   // on: {
   //    slideChange: function () {
   //       // Mostrar el tercer slide si el slide activo es el tercero
   //       if (this.activeIndex === 2) {
   //          mostrarRespuestas();
   //       }
   //    },
   // },
});

// function mostrarRespuestas() {
//    // Obtener los valores de las respuestas
//    var pelicula = document.getElementById('pelicula').value;
//    var actor = document.getElementById('actor').value;
//    var actor2 = document.getElementById('actor2').value;
//    var actor3 = document.getElementById('actor3').value;

//    // Mostrar las respuestas en el tercer slide
//    document.getElementById('respuesta-pelicula').textContent = + pelicula;
//    document.getElementById('respuesta-actor').textContent = '' + actor;
//    document.getElementById('respuesta-actor2').textContent = '' + actor2;
//    document.getElementById('respuesta-actor3').textContent = '' + actor3;


// }