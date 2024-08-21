export default {
  global: {
    componenteFormativo: 'Pensamiento estratégico y creación de empresa.',
    descripcionCurso:
      'Las empresas tienen una característica fundamental, son creadas por emprendedores exitosos, quienes buscan satisfacer ciertas necesidades, contribuyendo al desarrollo económico del país. Por ello, al momento de crear empresa, se deben modificar las actitudes y aptitudes que permitan ir adquiriendo una independencia en ese aprender e interactuar en equipo, para hacer un desarrollo sostenible del proyecto de vida.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Ser emprendedor',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características del emprendedor',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Oportunidades de negocios',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Actitud de pensamiento',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Construcción de pensamiento empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Creatividad e innovación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Pensamiento creativo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Pensamiento estratégico',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Elaboración de ideas de negocios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Proyecto de vida',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Estudio del sector o de la industria',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Estructura del proyecto de vida',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Análisis del entorno (DOFA)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: '6.	Delineando el plan estratégico',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF01.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Ser emprendedor',
      referencia: 'Revista Emprendedores. (2024).',
      tipo: 'Página web',
      link: 'https://revistaemprendedores.co/',
    },
  ],
  glosario: [
    {
      termino: 'Creación',
      significado:
        'construcción, producción o fabricación de una cosa por primera vez.',
    },
    {
      termino: 'Emprendedor',
      significado:
        'persona con características hacia el trabajo independiente, que reconoce las oportunidades del entorno y las canaliza como empresa exitosa, es un trabajador incansable en función de un sueño que materializa como empresa, siguiendo todos los formalismos de ley y del proceso administrativo, buscando siempre el éxito traducido en rentabilidad para su empresa.',
    },
    {
      termino: 'Emprendimiento',
      significado:
        'ideas aplicadas a generar riqueza, a partir de las oportunidades que se detectan en el entorno, estas ideas se canalizan a través de planes de negocio y requieren verdaderos líderes con visión para que logren concretar las ideas en empresa, con estructuras legales, que generen valor que beneficie a la empresa, a la economía y a la sociedad en general.',
    },
    {
      termino: 'Espíritu empresarial',
      significado:
        'motor y actitud de la persona que es emprendedora y por lo tanto, susceptible de encontrar en todo cambio del entorno una oportunidad. Es la característica del emprendedor quien, en más de una ocasión, de la nada, logra concretar una idea que resulta ser de impacto y exitosa.',
    },
    {
      termino: 'Estado situacional',
      significado:
        'resultado que define como se encuentra la empresa frente a su entorno, tanto externo como interno. También se establece respecto a un producto en cualquiera de las etapas de su ciclo de vida. Permite definir acciones orientadas al mejoramiento y ajuste de estrategias que reorienten las acciones para alcanzar los objetivos de la organización.',
    },
    {
      termino: 'Estrategia de promoción de venta',
      significado:
        'acciones encaminadas a que la estrategia del marketing, una de los componentes del plan estratégico de la organización, alcance los objetivos y metas en forma exitosa y específica para lograr el incremento de la rentabilidad en función de aumentar las ventas.',
    },
    {
      termino: 'Estrategia gerencial',
      significado:
        'es el camino por donde la organización encamina las acciones para alcanzar sus objetivos y sus metas con máximos rendimientos.',
    },
    {
      termino: 'Estrategia de ventas',
      significado:
        'son acciones que se llevan a cabo con el fin de cumplir los objetivos propuestos de ventas.',
    },
    {
      termino: 'Indicadores de gestión',
      significado:
        'instrumento que permite medir el nivel de logro de los objetivos estratégicos de la organización, su desempeño frente a objetivos, metas y responsabilidades definidas para grupos establecidos al interior de la misma.',
    },
    {
      termino: 'Innovación',
      significado:
        'concepto que aplica en el sentido de nuevas propuestas, inventos y su implementación económica, es un término que se aplica a nuevos productos, servicios o procedimientos, que realmente encuentran una aplicación exitosa imponiéndose en el mercado a través de la difusión.',
    },
    {
      termino: 'Mercado',
      significado:
        'espacio en el cual confluyen las fuerzas de la demanda y la oferta para intercambiar, vender, comprar bienes y servicios a un precio determinado.',
    },
    {
      termino: 'Plan estratégico',
      significado:
        'documento que refleja cuál será la estrategia a seguir por la empresa a mediano plazo. Se establece para vigencias aproximadas de tres años, pero puede oscilar entre uno y cinco años.',
    },
    {
      termino: 'Plan de acción',
      significado:
        'documento que incluye todas las acciones, tiempos y técnicas que se despliegan para alcanzar los resultados propuestos en el plan estratégico de la organización.',
    },
    {
      termino: 'Plan de mejoramiento',
      significado:
        'son las acciones encaminadas a corregir desviaciones cuando estas son identificadas, una vez se conoce el resultado de la medición con referente a un indicador de gestión.',
    },
  ],
  referencias: [
    {
      referencia: 'Nombre_referencias',
      link: 'Link_referencias',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre_responsable',
          cargo: 'Nombre_rol',
          centro: 'Nombre_centro_formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre_responsable',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Animación y producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre_responsable',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
