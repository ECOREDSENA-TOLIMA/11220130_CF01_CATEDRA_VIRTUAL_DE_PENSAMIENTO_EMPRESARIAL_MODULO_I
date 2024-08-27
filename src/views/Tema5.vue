<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Análisis del entorno (DOFA)
    
    .titulo-decorativo.mb-5(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/tema2/img6.svg")
      .cont-text 
        h3 ¿Cómo se define la matriz DOFA?
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La matriz DOFA es una herramienta administrativa que se utiliza para realizar diagnósticos reales del modo en que se enfoca una idea de negocio y de esta manera orientar la toma decisiones. Esta matriz permite identificar Debilidades (D), Oportunidades (O), Fortalezas (F) y Amenazas (A).
    
    .titulo-sexto.color-acento-contenido.offset-2
      h5 Figura 8.
      span  #[i  Ejemplificación DOFA]

    .row.justify-content-center.mb-5
      .col-md-8.desktop 
        figure
          img(src='@/assets/curso/temas/tema5/img1.svg', alt='Figura que hace relación a los factores de la matriz DOFA, donde se muestra un atleta con los aspectos positivos y negativos que se pueden presentar al hacer ejercicio.')
      .col-md-6.movil
        figure
          img(src='@/assets/curso/temas/tema5/img1_1.svg', alt='Figura que hace relación a los factores de la matriz DOFA, donde se muestra un atleta con los aspectos positivos y negativos que se pueden presentar al hacer ejercicio.')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p En cuanto a los aspectos positivos, si se conocen las oportunidades, habrá claridad hacia donde se debe dirigir el emprendimiento, hay que tener en cuenta que su desconocimiento lo puede llevar al fracaso. Por su parte, la identificación de las habilidades facilita la definición de los objetivos, metas claras y precisas, las cuales harán que se identifiquen las fortalezas, facilitando el mejoramiento de debilidades para atacar con éxito las oportunidades que brinda el entorno.
        p En los aspectos negativos, el conocimiento de las amenazas permite definir medidas para enfrentarlas o para minimizar sus efectos. Finalmente, las debilidades son de origen interno, razón por la cual su identificación puede repercutir en la creación de un plan de mejoramiento Para mayor claridad, se invita a analizar la siguiente tabla:

    .titulo-sexto.color-acento-contenido.offset-2
      h5 Tabla 1.
      span  #[i  Factores de la matriz DOFA]
    .row.justify-content-center.align-items-center
      .col-lg-8
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th Factores
                th Positivos (para alcanzar el objetivo)
                th Negativo (para alcanzar el objetivo)
            tbody
              tr
                td Factores internos
                td Fortalezas
                td Debilidades
              tr
                td Factores externos
                td Oportunidades
                td Amenazas

    .titulo-decorativo.my-5(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/tema2/img6.svg")
      .cont-text 
        h3 ¿Qué es la matriz DOFA cruzada?
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Es una herramienta que permite combinar los factores internos con los factores externos, identificados en el análisis DOFA. Para diligenciar dicha matriz, se deben tener en cuenta las diferentes estrategias o acciones para confrontar con éxito las siguientes variables; así como se puede apreciar en la siguiente tabla:
    
    .titulo-sexto.color-acento-contenido.offset-0
      h5 Tabla 2.
      span  #[i  Matriz DOFA cruzada]
    .row.justify-content-center.align-items-center
      .col-lg-12
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th
                th Oportunidades
                th Amenazas
            tbody
              tr
                th Fortalezas
                td 
                  p FO: Ofensivo 
                  p Hacer la mayor combinación de estos aspectos para generar estrategias que fortalezcan el emprendimiento.
                td
                  p DO: Defensivo
                  p Observar la competencia de cerca, con el fin de definir estrategias que permitan contrarrestar el riesgo que representan las acciones de la competencia frente al mercado.

              tr
                th Debilidades
                td 
                  p FA: Ajuste
                  p Para que las fortalezas sean más fuertes, restaurarlas y así poder atacar las amenazas o riesgos para el emprendimiento.
                td 
                  p DA: Sobreviva
                  p Estrategias que garanticen que el emprendimiento no desaparezca del mercado.

    .titulo-decorativo.my-5(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/tema2/img6.svg")
      .cont-text 
        h3 El significado de FA, FO, DA y DO
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Cada una de las combinaciones que resultan en la Matriz DOFA cruzada, responden a las estrategias que blindan el emprendimiento para que sea exitoso y competitivo frente al mercado. Estas son:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema5/img2.svg', alt='Imagen Decorativa')

          h3.text-center Sobreviva
          p Aquí se definen estrategias o acciones orientadas a reducir las debilidades, con el fin de que no incremente el riesgo de las amenazas.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema5/img3.svg', alt='Imagen Decorativa')

          h3.text-center Defensivo
          p Actuaciones que reducen las debilidades para que no incremente el riesgo de las amenazas.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema5/img4.svg', alt='Imagen Decorativa')

          h3.text-center Ajuste
          p Acciones que fortalecen los puntos fuertes y eliminan las amenazas.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema5/img5.svg', alt='Imagen Decorativa')

          h3.text-center Ofensivo
          p Acciones orientadas a fortalecer las fuentes de mayor oportunidad, con el fin de aprovecharlas positivamente.


</template>

<script>
export default {
  name: 'Tema5',
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
