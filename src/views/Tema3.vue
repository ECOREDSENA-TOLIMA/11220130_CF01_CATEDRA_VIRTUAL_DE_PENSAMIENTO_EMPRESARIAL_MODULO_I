<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Elaboración de ideas de negocios
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p La creación de un negocio o empresa, necesita siempre de la generación de una idea. Esta reside en la mente como una imagen, producto de observar el contexto de algunas experiencias prácticas o como oportunidades de negocios en la vida laboral.

    .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
      h5 Figura 4.
      span  #[i  Imagen de la idea]

    .row.justify-content-center.mb-5
      .col-md-10.desktop(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img1.svg', alt='Figura que hace la representación de la idea que se tiene sobre algo, como por ejemplo las medidas de la imagen que se tiene en la mente sobre algo que se pensó.')
      .col-md-6.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img1_1.svg', alt='Figura que hace la representación de la idea que se tiene sobre algo, como por ejemplo las medidas de la imagen que se tiene en la mente sobre algo que se pensó.')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
    p Para elaborar dicha idea, el emprendedor debe responder preguntas tales como:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img2.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .text-black.p-4
              h4.text-center ¿Cómo se puede hacer algo mejor de lo que ya está hecho?
              p
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img3.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .text-black.p-4
              h4.text-center ¿Cómo se puede hacer de forma diferente a lo que existe?
              p
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img4.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .text-black.p-4
              h4.text-center ¿Cómo se puede hacer algo que falta en esta empresa?
              p
    
    .titulo-decorativo.my-5(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/tema2/img6.svg")
      .cont-text 
        h3 Pasos para producir una idea
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row(titulo="")
            .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
              p Elaborar una lista sobre los gustos y las aptitudes que tiene para realizar en el entorno familiar, académico, social y laboral.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="zoom-in")
              figure 
                img(src="@/assets/curso/temas/tema3/img5.jpg")
          .row(titulo="")
            .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
              figure 
                img(src="@/assets/curso/temas/tema3/img6.jpg")
            .col-md-8.mb-4.mb-md-0(data-aos="fade-right")          
              p Describir las cosas que no le gusta hacer y en las que no tiene aptitudes para realizar en el entorno familiar, académico, social y laboral.
          .row(titulo="")
            .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
              p Comparar ambos listados y pensar qué ideas surgen como posible solución, con el fin de mejorar los gustos y aptitudes para innovar o cambiar aquello que no le gusta o que no puede hacer.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="zoom-in")
              figure 
                img(src="@/assets/curso/temas/tema3/img7.jpg")
          .row(titulo="")
            .col-lg-4.col-8.mb-lg-0.mb-4
              figure 
                img(src="@/assets/curso/temas/tema3/img8.jpg")
            .col-md-8.mb-4.mb-md-0(data-aos="fade-right")
              p Realizar el mismo ejercicio, pero desde una óptica profesional y ejecutar la comparación. Preguntarse:
              p ¿Cuántas personas sienten las mismas u otras necesidades profesionales?

          .row(titulo="")
            .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
              p Ahora, reflexionar en lo elaborado y responder a las preguntas:
              p ¿Por qué quiere iniciar un negocio?
              p ¿Se requiere un negocio en su entorno que ofrezca un producto o servicio que le guste hacer o en lo que tiene grandes aptitudes?
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="zoom-in")
              figure 
                img(src="@/assets/curso/temas/tema3/img9.jpg")


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p No todas las ideas son exitosas, existen características en los negocios que triunfan, como, por ejemplo, los que propician un ambiente de investigación, con el fin de sacar conclusiones de valiosa aplicabilidad en la ruta del emprender adecuado.
        p La idea debe ser innovadora y original, ubicada preferencialmente en actividades emergentes o en sectores relacionados con servicios y nuevas tecnologías, que tengan demandas insatisfechas por parte de los consumidores, viables financieramente, que generen ingresos, que cuenten con un equipo de trabajo para ejecutarla, convirtiéndola en un plan de negocios y posteriormente en una empresa con un producto innovador, que permita la sostenibilidad de la misma.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
