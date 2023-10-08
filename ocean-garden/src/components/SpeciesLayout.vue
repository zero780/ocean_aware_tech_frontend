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
          <div v-if="slide.title">
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
                :src="slide.link"
                class="iframe-content"
              />
              <!-- Agregar el elemento div para el título y la descripción -->
              <div class="content">
                  <div class="title" @mouseover="showDescription(index)" @mouseout="hideDescription(index)">
                    <p class="text-h5">{{slide.title}}</p>
                  </div>
                  <div class="description" :class="{ active: descriptionIndex === index }">
                    <p class="text-body-1">
                        {{slide.description}}
                    </p>
                  </div>
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
       slides: [
            {
                "title": "Loggerhead Sea Turtle",
                "description": "The Loggerhead Sea Turtle (Caretta caretta) is a large marine turtle known for its reddish-brown shell. It plays a crucial role in the marine ecosystem by helping control jellyfish populations, thus maintaining the balance of marine life.",
                "link": "https://sketchfab.com/models/c438e81e796d41d9a6ae4cc147ef8d4f/embed?camera=0"
            },
            {
                "title": "Green Sea Turtle",
                "description": "The Green Sea Turtle is named for the greenish color of its fat and skin. They are known for their herbivorous diet, primarily consisting of seagrasses and algae. Green Sea Turtles are found in tropical and subtropical waters and are known for their distinctive heart-shaped shells and graceful swimming. They are classified as endangered and are protected under conservation efforts worldwide.",
                "link": "https://sketchfab.com/models/c12909c5b64943d6a11a9f2e3dded93e/embed?camera=0"
            },
            {
                "title": "Bottlenose Dolphin",
                "description": "The Common Bottlenose Dolphin is the most well-known dolphin species, recognized for its distinctive bottle-shaped snout and playful behavior. They inhabit warm and temperate waters worldwide, and their high intelligence and social nature have made them iconic symbols of dolphins in popular culture.",
                "link": "https://sketchfab.com/models/41f9da2e89d94b34a9ee1bee4faad21f/embed?camera=0"
            },
            {
                "title": "Hammerhead Shark",
                "description": "The Hammerhead Shark is known for its distinctively shaped head, which is flattened and resembles a hammer. These sharks are found in warm waters globally and are top predators, primarily feeding on fish and small marine creatures.",
                "link": "https://sketchfab.com/models/f26c18e58e144679bb6ac4026c8fc8b7/embed?camera=0"
            },
            {
                "title": "Scalloped Hammerhead Juvenile",
                "description": "Young Scalloped Hammerhead Sharks, belonging to the Sphyrna lewini species, have small hammer-shaped heads and are typically found in coastal and offshore waters. They grow in size and develop their distinctive scalloped head as they mature.",
                "link": "https://sketchfab.com/models/f5adc17c922b48feae76aaea98552dd4/embed?camera=0"
            },
            {
                "title": null,
                "description": null,
                "link": null
            }
        ]
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
      hideDescription() {
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
