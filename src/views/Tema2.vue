<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Construcción de pensamiento empresarial
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img1.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-12
        p El pensamiento empresarial tiene inmerso algunos aspectos, los cuales se deben llevar a cabo para su adecuada construcción; estos, serán explicados a partir del siguiente contenido.

    separador

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_2_1.h2 2.1 Creatividad e innovación
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        p El apoyo a la innovación, el desarrollo tecnológico, la formación profesional, el talento humano y la promoción de la creatividad, conforman un escenario adecuado para que el esfuerzo de identificación de oportunidades de negocio, tenga impacto al desarrollar posteriormente empresas con capacidad de innovación y de incorporación de las nuevas tecnologías, que van a hacer de Colombia una economía competitiva en este siglo.
    .row.justify-content-center.align-items-center
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img2.png', alt='Imagen decorativa')

      .col-lg-7
        .cajon.color-primario.p-4.mb-4(data-aos="fade-right")
          p Las organizaciones más exitosas del mundo tienen algo en común, generan constantemente valor para sus clientes.
        p(data-aos="fade-right") El valor lo asigna intuitivamente el cliente cuando adquiere el producto o servicio, por medio del raciocinio expresado en la relación costo beneficio, de ahí la necesidad de promover entre los aprendices la búsqueda de ideas de negocio, con potencial innovador y desarrollo tecnológico que generen valor agregado a los productos o servicios ofertados.
        p(data-aos="fade-right") Las habilidades de pensamiento deben ser fundamentadas en los aprendices, abarcando desde la conceptualización, el uso y la aplicación de las mismas, para generar aptitudes mentales de alto nivel que permitan estimular la creatividad y la innovación para la búsqueda de oportunidades de negocios.

    
    separador 
    
    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_2_2.h2 2.2 Pensamiento creativo
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2
        p(data-aos="fade-right") La creatividad es la capacidad y actitud que hacen que una persona sea forjadora de nuevos productos; es decir, basándose en la iniciativa, intuición, imaginación, curiosidad intelectual, persistencia, constancia, agilidad asociativa, inteligencia y fluidez mental, además de otras características, puede ella realizar el acto de creación de la solución de problemas.
        p(data-aos="fade-right") La creación de ideas de negocios se entiende como ese procedimiento que se obtiene al descomponer la palabra creación: crear + acción; es decir, se generan las ideas, se analizan y se toma la decisión para elegir la más viable y posteriormente, se acciona y moviliza tal idea para asociarla a un producto o servicio, que se convertirá en la piedra angular de la empresa.
        p(data-aos="fade-right") El pensamiento creativo se debe ejercitar mediante múltiples técnicas, que permitirán llegar a desarrollos de habilidades mentales cada vez más complejas, pero de gran utilidad para obtener productos o servicios más innovadores y convincentes.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img3.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12(data-aos="zoom-in")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img4.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 #[b Es importante estudiar, analizar y aplicar la técnica denominada los seis sombreros para pensar de Edward de Bono, como instrumento para fortalecer el desarrollo del pensamiento creativo.]

    separador 
    
    .titulo-segundo.mt-5.color-acento-contenido(data-aos="flip-up")
      #t_2_3.h2 2.3 Pensamiento estratégico
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p El pensamiento estratégico es una manera diferente para pensar reflexivamente sobre cómo enfrentar las incertidumbres y dificultades que se presentan en los negocios; el empresario debe reflexionar, planear y actuar con una alta capacidad proactiva y una actitud asertiva, investigando los mercados y la competencia.
        p El tener un pensamiento estratégico empresarial, le posibilita al empresario visualizar múltiples oportunidades de negocios y construir diversas estrategias para actuar con inteligencia empresarial.
        p El siguiente elemento, describe las partes principales de dicho tipo de pensamiento:
    .row.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-lg-10.desktop
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img5.svg', alt='')              
          .tarjeta.color-acento-contenido.p-3(x="15%" y="40%" numero="+")
            p La investigación y la innovación son herramientas básicas para que los empresarios planeen y actúen estratégicamente ante la globalización, competitividad y la constante evolución tecnológica de los mercados.              
          .tarjeta.color-acento-contenido.p-3(x="50%" y="5%" numero="+")
            p Los empresarios toman decisiones asertivas ante los continuos cambios en los mercados, se hace o no, estratégicamente.
          .tarjeta.color-acento-contenido.p-3(x="85%" y="25%" numero="+")
            p Ante un pensamiento estratégico empresarial, las acciones a ejecutar, se deben hacer altamente visibles en procedimientos sencillos y de fácil aprendizaje para todos los integrantes de los equipos de trabajo.
      .col-lg-10.movil
        figure
          img(src='@/assets/curso/temas/tema2/img5_1.svg', alt='')
    
    .titulo-decorativo.my-5(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/tema2/img6.svg")
      .cont-text 
        h3 El riesgo
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img7.png', alt='Imagen decorativa')
      .col-lg-7(data-aos="fade-right")
        p Es el objetivo del pensamiento estratégico, es un aspecto que está presente al tomar cualquier decisión, puesto que acertar o errar, ganar o perder, son posibilidades abiertas.
        p Antes de reconocer el riesgo se tiene solo incertidumbre; esto es, la situación en la que se tiene información de los resultados posibles, pero se desconoce la probabilidad de ocurrencia. Sin embargo, a partir de las amenazas y de las debilidades, es posible calcular y anticipar el nivel de riesgo.
        p En el ámbito empresarial, las adversidades deben resolverse mediante una adecuada planeación estratégica, que facilite la toma de decisiones; a esto se le llama administración de riesgo. Se trata de un enfoque sistemático que pretende manejar y minimizar las pérdidas.
        p En los negocios, se identifican los riesgos que se relacionan en la siguiente figura:

    .titulo-sexto.color-acento-contenido.offset-1
      h5 Figura 3.
      span  #[i  Tipos de riesgos]

    .row.justify-content-center.mb-5
      .col-md-10.desktop(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img8.svg', alt='Figura que menciona los tres (3) tipos de riegos más comunes, los cuales son los financieros, los comerciales y los de mercado.')
      .col-md-6.movil
        figure
          img(src='@/assets/curso/temas/tema2/img8_1.svg', alt='Figura que menciona los tres (3) tipos de riegos más comunes, los cuales son los financieros, los comerciales y los de mercado.')
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        p Los anteriores riesgos son los más comunes en los negocios, razón por la cual deben ser examinados detenidamente en los planes de negocio.

</template>

<script>
export default {
  name: 'Tema2',
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
