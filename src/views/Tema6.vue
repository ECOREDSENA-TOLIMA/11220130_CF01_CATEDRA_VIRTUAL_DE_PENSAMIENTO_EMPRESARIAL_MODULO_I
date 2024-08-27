<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Delineando el plan estratégico
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        figure
          img(src='@/assets/curso/temas/tema6/img1.jpg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Para conocer el resultado de los análisis de entorno y el emprendedor, hay que saber que conocer el tipo de idea de negocio y su ubicación, contribuye con la capacidad para establecer metas, optimizando así el uso de los recursos. El conocimiento mencionado anteriormente, inicia un proceso administrativo, determinado por actividades y responsabilidades formuladas en planes de acción, liderados por emprendedores.
    .titulo-segundo.mt-5.color-acento-contenido
      #t_2_3.h2 Componentes del plan estratégico
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p El conocimiento de la temática del plan estratégico, ofrece a todas las empresas infinidad de posibilidades para diseñarlo. Esto, es en función del crecimiento, expansión, diversificación, impacto social y movimientos, según el tipo de integración y otras variables.
    .row.bg--gradientBlue.mb-4
      .titulo-sexto.color-acento-contenido.offset-1
        h5 Figura 9.
        span  #[i  Componentes del plan estratégico]

      .row.justify-content-center.mb-5
        .col-md-10.desktop 
          figure
            img(src='@/assets/curso/temas/tema6/img2.svg', alt='Figura que a través de un esquema relaciona los componentes que hacen parte de un plan estratégico, incluyendo visión, políticas, misión, objetivos, DOFA, factores, plan de acción y cronograma.')
        .col-md-6.movil
          figure
            img(src='@/assets/curso/temas/tema6/img3.svg', alt='Figura que a través de un esquema relaciona los componentes que hacen parte de un plan estratégico, incluyendo visión, políticas, misión, objetivos, DOFA, factores, plan de acción y cronograma.')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p En este caso, se ha recorrido un camino que pasó por el plan económico, según el proyecto de vida, el análisis del sector, el análisis del entorno, el diagnóstico tanto interno y externo, según las matrices DOFA y DOFA cruzada y el diseño de estrategias. Ahora, en razón de la concienciación y la comprensión de los conceptos básicos, el límite del plan estratégico se establece en sus elementos estructurales, los cuales son:

    .row.slyder-b-img.justify-content-center.align-items-center.mb-5
      .col-lg-11(style="margin-top:50px;")
        SlyderB.mb-5(:datos="datosSlyder")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Para finalizar y tener clara la temática abordada en este último tema, es importante conocer un ejemplo de planeación estratégica, el cual se relaciona en la siguiente tabla:
        
    .titulo-sexto.color-acento-contenido.offset-1
      h5 Tabla 3.
      span  #[i  Ejemplo: café chat para investigar]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th Término
                th Definición
                th Caso
            tbody
              tr
                td Visión
                td Visualizar futuro
                td Ser los mejores en cinco años.
              tr
                td Misión
                td Razón de ser
                td Ofrecer un servicio de alta calidad académica.
              tr
                td Diagnóstico - DOFA
                td Situación actual
                td Los existentes ofertan servicios de consulta general.
              tr
                td Objetivo
                td Declaración de aspiraciones
                td Realizar gestión del conocimiento.
              tr
                td Meta
                td Cuantificación de objetivos
                td Ejecutar en los servicios en la investigación formativa.
              tr
                td Estrategias - plan de acción
                td Acciones para lograr objetivos
                td Asesorar a los usuarios en dicha especialidad.
              tr
                td Cronograma programas
                td Pasos individuales necesarios
                td Atención personalizada permanente.
              tr
                td Monitoreo
                td Procedimiento de control y de ajuste
                td Registrar evidencias de avances y desajustes en el servicio.



</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Visión',
        texto:
          'Debe ser un párrafo corto, el cual refleje cómo se quiere proyectar la empresa, cuáles metas se van a poder cumplir con esta idea de negocio, cómo se espera que lo reconozcan dentro del mercado, qué posición se pretende ocupar en el mercado y qué estándares de calidad se piensan alcanzar. En este punto es necesario tener en cuenta los valores y las convicciones de la empresa.',
        imagen: require('@/assets/curso/temas/tema6/img4.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Establecimiento de políticas',
        texto:
          'Algunas de estas variables están contempladas en el análisis del entorno. Se trata de definir las principales tendencias: políticas, económicas, tecnológicas, religiosas, sociales, intelectuales y artísticas, las cuales afectan o representan una amenaza para la organización, así como aquellas que constituyen una oportunidad. Estas políticas direccionan el desarrollo de la empresa.',
        imagen: require('@/assets/curso/temas/tema6/img5.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Misión',
        texto:
          'Es un párrafo breve y simple que refleja la intención de la empresa. Responde a una pregunta fundamental: ¿cómo alcanzar la visión? En consecuencia, se debe indicar qué hace la organización, quiénes son sus clientes, cuál es el origen de la empresa, a qué sector industrial pertenece, nicho o segmento de mercado al que está vinculado, qué expectativas tienen los clientes de la empresa, cómo enfrenta los riesgos, cómo buscará la rentabilidad, entre otros.',
        imagen: require('@/assets/curso/temas/tema6/img6.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Análisis DOFA',
        texto:
          'Corresponde al análisis de Debilidades, Oportunidades, Fortalezas y Amenazas.',
        imagen: require('@/assets/curso/temas/tema6/img7.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Definición de objetivos',
        texto:
          'Entre los objetivos, se debe tener en cuenta que hay unos a corto plazo en un espacio de uno o dos años y otros a largo plazo, ambos determinados por los resultados de la evaluación externa e interna. Finalmente, deben enumerarse jerárquicamente.',
        imagen: require('@/assets/curso/temas/tema6/img8.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Análisis de los factores que inciden sobre cada objetivo',
        texto:
          'Debe examinarse cuáles son las fuerzas, factores o actitudes que favorecen el logro de cada objetivo. Este análisis pretende identificar aquello que potencie dichas fuerzas positivas.',
        imagen: require('@/assets/curso/temas/tema6/img9.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Planes de acción',
        texto:
          'Para cada objetivo específico deben establecerse las medidas o acciones que reducirán los aspectos negativos y maximizarán los positivos. Esto implica definir a una persona encargada, así como también los recursos, el momento y el lugar en que serán implementadas cada una de estas acciones.',
        imagen: require('@/assets/curso/temas/tema6/img10.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Asignación de responsabilidades',
        texto:
          'Refiere al cronograma de trabajo, discriminado en actividades y tareas asignadas a los miembros de la empresa. Además, incluye el procedimiento de control y de ajuste.',
        imagen: require('@/assets/curso/temas/tema6/img11.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
