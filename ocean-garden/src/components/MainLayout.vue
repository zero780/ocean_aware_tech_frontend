<template>
    <div class="container-game-map">
        <img src="@/assets/images/super-mario-world-map.jpg" class="game-map">
    </div>
</template>

<script>

</script>

<style>
    /* Reset default margin and padding */
    body, html {
        margin: 0;
        padding: 0;
        overflow: hidden; /* Hide vertical scrollbar */
    }

    /* Set full width and height for the container */
    .container-game-map {
        width: 100vw!important; /* 100% of viewport width */
        height: 100vh!important; /* 100% of viewport height */
        overflow-x: auto!important; /* Enable horizontal scrolling */
        overflow-y: auto!important;
        white-space: nowrap!important; /* Prevent text wrapping */
    }

    /* Set the image to cover the entire container */
    .game-map {
        width: 100%!important; /* Allow the image to have its natural width */
        height: 100%!important; /* 100% height of container */
        verflow-y: hidden!important;
        object-fit: cover!important; /* Ensure the image covers the container */
        transform: translateX(0)!important; /* Initialize horizontal position */
        animation: scrollImage 60s linear infinite!important; /* Horizontal scrolling animation */
    }

    /*@media (max-width: 600px) {*/
    /*     .game-map {*/
    /*        width: 100%!important; !* Cover full width while maintaining aspect ratio *!*/
    /*        height: 100%!important;*/
    /*        overflow-y: hidden!important;*/
    /*    }*/
    /*}*/
</style>
