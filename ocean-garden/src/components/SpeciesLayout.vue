<template>
    <div class="vertical-carousel-container">
      <div class="vertical-carousel">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="slide"
          :class="{ active: currentIndex === index }"
          :style="getSlideStyles(index)"
        >
          <iframe 
            title="Loggerhead Sea Turtle" 
            frameborder="0" 
            allowfullscreen mozallowfullscreen="true" 
            webkitallowfullscreen="true" 
            allow="autoplay; fullscreen; xr-spatial-tracking" 
            xr-spatial-tracking 
            execution-while-out-of-viewport 
            execution-while-not-rendered 
            web-share 
            src="https://sketchfab.com/models/c438e81e796d41d9a6ae4cc147ef8d4f/embed?camera=0"
            class="iframe-content"
          />
          <!-- Agregar el elemento div para el título y la descripción -->
          <div class="content">
              <div class="title" @mouseover="showDescription(index)" @mouseout="hideDescription(index)">
                <p class="text-h5">Tortuga Marina</p>
              </div>
              <div class="description" :class="{ active: descriptionIndex === index }">
                <p class="text-body-1">
                    Las tortugas marinas son reptiles marinos que han adaptado su vida al océano. Existen siete especies diferentes de tortugas marinas, cada una con sus propias características, pero comparten algunas características clave. Son conocidas por su caparazón duro y escamoso que les brinda protección. Las tortugas marinas son animales migratorios que viajan largas distancias entre sus áreas de alimentación y sus lugares de anidación.
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentIndex: 0,
        descriptionIndex: null, // Índice de la descripción activa
        slides: ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"],
      };
    },
    computed: {
      // Calcula los estilos según la posición actual del slide
      getSlideStyles() {
        return (index) => {
          const isActive = this.currentIndex === index;
          const translateY = isActive ? 0 : (index - this.currentIndex) * 100;
          const opacity = isActive ? 1 : 0.1;
          const scale = isActive ? 1 : 0.5; // Escala más pequeña para opciones no seleccionadas
  
          return {
            opacity: opacity,
            transform: `translateY(${translateY}%) scale(${scale})`, // Aplica la escala
          };
        };
      },
    },
    methods: {
      // Cambia el slide actual al desplazarse
      handleScroll(event) {
        const deltaY = event.deltaY;
        if (deltaY > 0 && this.currentIndex < this.slides.length - 1) {
          this.currentIndex++;
        } else if (deltaY < 0 && this.currentIndex > 0) {
          this.currentIndex--;
        }
      },
      // Muestra la descripción al hacer hover en el título
      showDescription(index) {
        this.descriptionIndex = index;
      },
      // Oculta la descripción al quitar el hover en el título
      hideDescription(index) {
        this.descriptionIndex = null;
      },
    },
    created() {
      // Agrega un listener de scroll para cambiar los slides
      window.addEventListener("wheel", this.handleScroll);
    },
    destroyed() {
      // Elimina el listener de scroll al destruir el componente
      window.removeEventListener("wheel", this.handleScroll);
    },
  };
  </script>
  
  <style scoped>

  .vertical-carousel-container {
    display: flex;
    justify-content: center; /* Centra horizontalmente */
    align-items: center; /* Centra verticalmente */
    height: 100%; /* Altura completa de la pantalla */
    width: 100%;
    background-image: url("/src/assets/images/main_map.png");
    background-size: cover; 
  }
  
  .vertical-carousel {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .slide {
    transition: opacity 0.3s, transform 0.3s; /* Transiciones para opacity y transform */
    text-align: left;
    font-size: 24px;
    padding: 20px;
    margin-bottom: 20px; /* Agrega un espacio vertical entre los objetos */
    position: relative;
  }
  
  .iframe-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40vw; /* Ajusta el ancho según tus necesidades */
    height: 50vh; /* Ajusta la altura según tus necesidades */
  }

  .content {
      position: relative;
      display: flex;
      flex-direction: column;
      background-color: #2c3e50; /* Fondo semitransparente */
      transition: transform 0.3s;
  }
  
  .title {
    position: absolute;
    top: 10px; /* Ajusta la distancia desde la parte superior */
    left: 110px; /* Ajusta la distancia desde la izquierda */
    cursor: pointer; /* Cambia el cursor al hacer hover */
    border-radius: 5px; /* Borde redondeado */
    padding: 5px 10px; /* Relleno del texto */
    color: white;
    width: 32vw;
    background: #002333; /* Color base del elemento (azul claro) */
    transition: transform 0.3s, background 0.3s ease-out; /* Transición suave para el hover */
  }
  .title:hover {
    background:#89c1e5;
    transform: translateX(-10px);
  }

  .content:hover{
    transform: translateX(-10px);
  }
  
  .description {
    position: absolute;
    bottom: 10px; /* Ajusta la distancia desde la parte inferior */
    left: 100px; /* Ajusta la distancia desde la izquierda */
    background-color: #002333; /* Fondo semitransparente */
    font-size: 2rem;
    color: white; /* Color del texto */
    padding: 5px 10px; /* Relleno del texto */
    border-radius: 5px; /* Borde redondeado */
    width: 32vw;
    opacity: 0; /* Inicialmente oculto */
    pointer-events: none; /* No interactúa con eventos cuando está oculto */
    transition: opacity 0.3s; /* Transición suave de opacidad */
  }
  
  .active {
    opacity: 1;
    transform: translateY(0) scale(1); /* Centra verticalmente y restaura el tamaño */
    z-index: 1; /* Asegura que el slide activo esté encima de los demás */
  }
  </style>
  