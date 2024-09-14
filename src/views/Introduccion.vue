<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        p ¡Quien emprende, desea ser exitoso!
        p Esta afirmación, es quizás la que más poder tiene en la vida de las personas que desean emprender y seguir su proyecto de vida. Pero más que una afirmación, es un proceso que deben tener las personas, así que para descifrar lo que ello conlleva, se invita a que inicie este componente formativo, analizando el siguiente video introductorio a la temática que se explicará:
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="1280" height="720" src="https://www.youtube.com/embed/FivCJk9spzE" title="Pensamiento estratégico y creación de empresa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
