export default {
  global: {
    componenteFormativo: 'Reservas y tarifas aéreas',
    descripcionCurso:
      'La satisfacción de un viajero depende de múltiples factores, entre estos: la calidad en el servicio y la eficiente ejecución de procedimientos técnicos que faciliten su viaje. Así, el proceso de reserva y venta de servicios y todos los procesos ejecutados de manera oportuna y efectiva, contribuirán a que la experiencia de viaje empiece de la manera más clara.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Básico de reserva',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Proceso de reservas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Solicitud de servicios especiales',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Modificaciones y cancelaciones',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Historial de un PNR (Passenger Name Record)',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tarifas y regulación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Introducción a tarifas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Interpretación de reglas tarifarias',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Cotización de vuelos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Emisión de boletos',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Documentos valor (EMD/MCO)',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Reportes de venta',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Cambio en boletos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Reembolsos',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Otros beneficios aéreos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Amadeus S.A.S. (2014). Amadeus Selling Platform Connect – Guía de usuario. Edition 2.1. Amadeus Global Learning Services (Distribution and IT). ',
    },

    {
      referencia:
        'Amadeus S.A.S. (2015). Amadeus Selling Platform Connect – User Guide. Edición 5.0. Amadeus Learning Services. ',
    },
    {
      referencia:
        'Amadeus S.A.S. (2016). Amadeus Altéa Reservation Desktop Web – User Guide. Edition 3.3. Amadeus Learning Services.',
    },
  ],
  glosario: [
    {
      termino: 'Conexión',
      significado:
        'ciudad intermedia que sirve de enlace para unir a dos ciudades, por tiempo no mayor a 24 horas, o según lo indique la regla de la tarifa. Los tramos nacionales de tarifas internacionales “ON LINE” y “OFF LINE” que traen las tasas aeroportuarias (CO) incluidas, NO se deben cobrar nuevamente. ',
    },
    {
      termino: 'Endoso',
      significado:
        'transferencia de la autoridad ejercida por una aerolínea en uno, algunos, o todos los cupones del documento hacia otra aerolínea, cuando el cliente desea cambiar el transportador designado en la casilla conocida como “Carrier" o haya incumplimiento de cualquier índole por parte del transportista original. El endoso voluntario se hace siempre y cuando la norma de la tarifa lo permita.',
    },
    {
      termino: 'Escala',
      significado:
        'parada momentánea que hace un vuelo en una ciudad intermedia entre la ciudad de origen y la ciudad de destino del viajero para recoger o dejar viajeros.',
    },
    {
      termino: 'Involuntary Rerouting',
      significado:
        'cambio de ruta involuntario (requiere revisado) solamente del (los) cupón (es) involucrado(s) por cambio de itinerario ocasionado por la línea aérea. ',
    },
    {
      termino: 'Parada',
      significado:
        'detención voluntaria en una ciudad por tiempo mayor a 24 horas, solicitada por el cliente.',
    },
    {
      termino: 'Reissue',
      significado:
        'reemisión, ocasionada por cambio de ruta o por cambio de clase. ',
    },
    {
      termino: 'Residual value',
      significado:
        'cantidad de dinero que queda al cliente después de un revisado. ',
    },
    {
      termino: 'Revalidation',
      significado:
        'revalidación, cambio de fecha o vuelo dentro de la validez de la tarifa en la misma clase.',
    },
    {
      termino: 'Schedule Change',
      significado:
        'cambio al itinerario efectuado por la aerolínea por razones operativas.',
    },
    {
      termino: 'Service Charge',
      significado: 'cargo por el servicio.',
    },
    {
      termino: 'Tránsito',
      significado:
        'viajero que se baja de un vuelo para tomar otro vuelo y poder llegar a su destino.',
    },
    {
      termino: 'Upgrade',
      significado: 'ascenso (cambio de cabina o tarifa).',
    },
    {
      termino: 'Validez',
      significado:
        'fechas entre las cuales puede ser utilizado un boleto, medido desde la fecha de emisión.',
    },
    {
      termino: 'Vigencia',
      significado:
        'fechas entre las cuales es utilizable la tarifa, medido desde la fecha de inicio del viaje.',
    },
    {
      termino: 'Waived',
      significado: 'exento (de una multa o restricción por una situación).',
    },
  ],

  complementario: [
    {
      texto: ' ',
      tipo: ' ',
      link: ' ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Claudia Ávila Ramírez',
        cargo: 'Experta temática',
        centro:
          'Centro Nacional de Hotelería Turismo y Alimentos <br>Regional Distrito Capital',
      },
      {
        nombre: 'Lida Guanumen Riaño',
        cargo: 'Experta temática de apoyo',
        centro:
          'Centro Nacional de Hotelería Turismo y Alimentos <br>Regional Distrito Capital',
      },
      {
        nombre: 'Gloria Amparo López Escudero',
        cargo: 'Diseñadora instruccional ',
        centro: 'Centro de Gestión Industrial <br>Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología <br>Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: ' ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },

      {
        nombre: 'Rafael Augusto Mantilla López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
    ],
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
