export default {
  global: {
    componenteFormativo: 'Documentación e informe de requisitos',
    descripcionCurso:
      'A través de este recurso educativo se exponen los conceptos para la apropiación de las fases iniciales en las soluciones de transformación digital, la documentación, la ingeniería de requisitos, los registros y los acuerdos, además se abordan los paradigmas de los modelos de ciclo de vida del <i>software</i>.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
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
        titulo: 'Aplicaciones web',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Componentes',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Plataformas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Bases de datos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: '<i>Backend</i> de autenticación',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Redundancia',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ciclo de vida del <i>software</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Fases',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Paradigmas de los modelos de ciclo de vida del <i>software</i>',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Fase de definición de requisitos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Importancia',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Clasificación',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Ingeniería de requisitos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Informe de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Elementos del documento',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'IREB (International Requirements Engineering Board)',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Estándar IEEE',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'SCRUM (historias de usuario)',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Criterios de aceptación',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Buenas prácticas de documentación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Normas APA',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: '7.2	Buenas prácticas de redacción de requisitos',
            hash: 't_7_2',
          },
        ],
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
        download: 'downloads/228138_CF04_DU.zip',
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
      tema: 'Aplicaciones web',
      referencia: 'Ferrer, J. (2014).<i> Aplicaciones web</i>. RA-MA.',
      tipo: 'Libro',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=12589',
    },
    {
      tema: 'Ciclo de vida del <i>software</i>',
      referencia:
        'Hernández, M. y Baquero, L. (2020). <i>Ciclo de vida de desarrollo ágil de software seguro</i>. Fundación Universitaria Los Libertadores.',
      tipo: 'Libro',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=22372',
    },
    {
      tema: 'Requisitos',
      referencia: 'iTunes U - UAEH. (2019). <i>Tipos de requerimientos</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PUyfzEzSUSg',
    },
    {
      tema: 'Requisitos',
      referencia:
        'CavernaTech. (2019). <i>Requisitos funcionales y no funcionales de software</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Lv7XbZtnQ6A',
    },
    {
      tema: 'Ingeniería de requisitos',
      referencia:
        'Pressman, R. (2010). <i>Ingeniería del software: un enfoque práctico</i>. McGraw-Hill.',
      tipo: 'Libro',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=686',
    },
    {
      tema: 'Ingeniería de requisitos',
      referencia:
        'Sommerville, I. (2011). <i>Ingeniería de software</i>. Pearson Educación.',
      tipo: 'Libro',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=3313',
    },
  ],
  glosario: [
    {
      termino: 'Ágil',
      significado:
        'Comprende un conjunto de tareas o acciones que se utilizan para producir y mantener productos, así como para lograr los objetivos del proceso. La actividad incluye los procedimientos, los estándares, las políticas y los objetivos para crear y modificar un conjunto de productos de trabajo.',
    },
    {
      termino: 'Capa de red',
      significado:
        'Es la capa tres en del modelo OSI, se encarga de permitir la conexión entre dispositivos que están ubicados en redes diferentes. Es la capa de direccionamiento.',
    },
    {
      termino: 'Ciclo de vida <i>software</i>',
      significado:
        'Aplicación de metodologías para el desarrollo del sistema <i>software</i> (AECC, 1986).',
    },
    {
      termino: 'Método',
      significado:
        'Indica cómo construir técnicamente el <i>software</i>. Se incluyen técnicas de modelado y otras técnicas descriptivas.',
    },
    {
      termino: 'Metodología',
      significado: 'Colección de métodos para resolver un tipo de problemas.',
    },
    {
      termino: 'Protocolo de comunicación',
      significado:
        'Conjunto de reglas que permiten la comunicación entre dos o más nodos en servicios específicos. En telemática los protocolos más usados son HTTP, FTP, SMTP, DNS, etc.',
    },
    {
      termino: 'Requerimiento',
      significado:
        'Se refiere a la petición que se hace de algo que se solicita.',
    },
    {
      termino: 'Requisito',
      significado:
        'Condición que debe cumplir algo, en general el requisito cumple con lo que se necesita con el requerimiento.',
    },
  ],
  referencias: [
    {
      referencia:
        'Boehm, B. (1979). A Spiral Model of Software Development and Enhancement. <i>ACM Software Engineering Notes, 11</i>(4), 22-42.',
    },
    {
      referencia:
        'Durán, A. y Bernárdez, B. (2001). <i>Metodología para el análisis de requisitos de sistemas software</i>. DOCPLAYER.',
      link:
        'https://docplayer.es/9147696-Metodologia-para-el-analisis-de-requisitos-de-sistemas-software.html',
    },
    {
      referencia:
        'Heras del Dedo, R. y Álvarez, A. (2017). <i>Métodos ágiles: Scrum, Kanban, Lean</i>. Difusora Larousse - Anaya Multimedia.',
    },
    {
      referencia:
        'ISO/IEC 12207. (2008). <i>Systems and software engineering - Software life cycle processes</i>. ISO.',
      link: 'https://www.iso.org/obp/ui/#iso:std:iso-iec:12207:ed-2:v1:en',
    },
    {
      referencia:
        'Penzenstadler, B. (s.f.). <i>Requirements Engineering. CSU Long Beach</i>. California State University Long Beach',
      link: 'https://bit.ly/3rtBKXN',
    },
    {
      referencia:
        'Pfleeger, S. (2002). <i>Ingeniería del software. Teoría y práctica</i>. Prentice Hall.',
    },
    {
      referencia:
        'Porfirio, C. (s. f.). <i>Técnicas de priorización: el desafío de conseguir un orden para las funcionalidades. Atsistemas - Consultoría it blog</i>.',
      link:
        'https://www.atsistemas.com/es/blog/tcnicas-de-priorizacin-el-desafo-de-conseguir-un-orden-para-las-funcionalidades',
    },
    {
      referencia:
        'Rivadeneira, M. (2014). Metodologías ágiles enfocadas al modelado de requerimientos. <i>Informes Científicos Técnicos - UNPA, 5</i>(1), 1-29.',
      link: 'https://doi.org/10.22305/ict-unpa.v5i1.66',
    },
    {
      referencia:
        'Sommerville, I. (2011). <i>Ingeniería del software</i>. Addison-Wesley.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada',
          cargo: 'Experto Temático',
          centro:
            'Centro de la Industria, la Empresa y los Servicios  CIES - Norte de Santander',
        },
        {
          nombre: 'Giovanna Andrea Escobar Ospina',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios  CIES - Norte de Santander',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Asesora Metodológica y Pedagógica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Corrección de Estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres ',
          cargo: 'Storyboard e Ilustración ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander ',
        },
        {
          nombre: 'Camilo Bolaño',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
