<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Tarifas y regulación

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema2.jpg", alt="Tarifas y regulación")  

    p.mb-4(data-aos="fade") Las tarifas de pasajeros y carga se establecen por acuerdos bilaterales entre Estados y quedan sujetas al régimen nacional aplicable, por lo general relegan la responsabilidad a las aerolíneas para fijar las tarifas o se usa el mecanismo multilateral para la fijación de tarifas proporcionado por la Asociación de Transporte Aéreo Internacional (IATA) para la negociación de tarifas de servicio regular, los gobiernos interesados las deben aprobar y regular.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .bloque-texto-a.color-acento-contenido.p-4 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4
                p.mb-4 En el sistema Amadeus Fares se almacena millones de tarifas y combina la información que envían las compañías aéreas como también ATPCO, SITA e IATA.
                p 
                  strong ATPCO: 
                  | Airline Tariff Publishing Company. 
                p 
                  strong IATA: 
                  | International Air Transport Association. 
                p 
                  strong SITA: 
                  | Société Internationale de Télécommunications Aéronautiques.
            .col-lg-4
              img.px-lg-3(src="@/assets/curso/tema2-imagen.svg", alt="Imagen decorativa")  

    p.mb-4(data-aos="fade") Esta herramienta permite ver tarifas publicadas, reglas y condiciones de tarifa, tasas de cambio y conversiones de monedas, cotizaciones de itinerarios, etc.    

    Separador


    // 2.1
    #t_2_1.titulo-segundo(data-aos="fade-right")
      .h2 2.1.  Introducción a tarifas

    .row.mb-3
      .col-lg-7.mb-4(data-aos="fade-right")
        p Las tarifas aéreas indican el precio que paga el pasajero por el servicio de transporte y su equipaje desde el lugar de origen al lugar de destino elegido por el viajero y con las condiciones de aplicación de la misma. Estas tarifas están sujetas a condiciones de utilización que se refieren entre otros a periodos de validez en el tiempo, condiciones de pago, restricciones de endosos, estipulaciones sobre reembolsos, utilización en determinados vuelos, el tiempo mínimo o máximo en estadía en el lugar de destino, días específicos de viaje, reglas de equipaje libre permitido en la línea aérea y otras condiciones de viaje que apliquen, el transportista o su agente presentan de forma electrónica o impresa a las autoridades de reglamentación competente.
        .tarjeta-borde-morada.p-4
          p La 
            strong tarifa nacional 
            | es el precio que se cobra por el transporte de pasajeros entre puntos del territorio nacional.
          p.mb-0 Se entiende por 
            strong tarifa internacional 
            | el precio en dólares de los Estados Unidos de Norteamérica que se cobra por el transporte de personas entre un punto del territorio nacional y un punto en el exterior.
      .col-lg-5.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2-1-img.png", alt="Imagen decorativa")   

    p(data-aos="fade") La base tarifaria de un billete de viaje está compuesta por varias letras y cada una indica una información específica.

    p(data-aos="fade") Las tarifas aéreas reciben nombres comerciales como 
      strong Clase Premium, Business, Preferente: tarifa Euromini, tarifa Excursión, Pex (tarifa de excursión especial). Superpex, Apex (tarifa de excursión de compra anticipada), Genial, etc. 
      | Técnicamente en manuales GDS y en los billetes se representa mediante un código alfanumérico.

    p.mb-4(data-aos="fade") Estos códigos representan lo más importante en la estructura de una tarifa aérea ya que indica los requisitos de venta y uso.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10.tarjeta-borde-naranja.p-4
        .row.align-items-center
          .col-md-7.mb-4.mb-lg-0
            h4 Códigos:
            ul.lista-ul--color.lista-circulo
              li
                i.fas.fa-circle
                | Clase F – primera clase, Bussines, intermedia y turista
              li
                i.fas.fa-circle
                | Temporada – H – Highest/Alta, L- Lowest/Baja – K – Media 
              li
                i.fas.fa-circle
                | Tarifas – E/EE – Excursión – PC – Pex, AP – Apex, SX – Superpex
              li.mb-0
                i.fas.fa-circle
                | Días – W – Weekend, X – Laborable  
          .col-md-5
            img(src="@/assets/curso/tema2-1-img2.svg", alt="Imagen decorativa")

    p(data-aos="fade") Las aerolíneas determinan qué tipo de servicio requieren para sus pasajeros y pueden dividir la cabina del avión en varios compartimentos para brindar diferentes clases de servicio a bordo y en tierra, por esta razón varían las tarifas y, de acuerdo con su clasificación, tienen unas condiciones específicas para realizar la reserva y para emisión de los boletos aéreos, los cuales se deben cumplir las reglas para no generar costos adicionales.

    p(data-aos="fade") Actualmente se ofertan diferentes tipos de tarifas en cada clase y se asigna una letra del código de tarifa.

    p.mb-4(data-aos="fade") Las clases y sus códigos son: 

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/tema2-1-infografia.svg", alt="Las clases y sus códigos") 

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-9
        .tabla-a.color-acento-contenido
          table
            thead.amarillo
              tr
                th.py-3(colspan='2') 
                  h3.mb-0 Estructura de las tarifas aéreas
            tbody
              tr
                td 
                  strong 1. Trayecto del viaje
                td 
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span a.
                      | Ámbito territorial. 
                    li 
                      .lista-ol--cuadro__vineta
                        span b.
                      | Dirección e Itinerario.
                    li 
                      .lista-ol--cuadro__vineta
                        span c.
                      | Ruta aérea.
                    li 
                      .lista-ol--cuadro__vineta
                        span d.
                      | Paradas intermedias en el itinerario.    
              tr
                td 
                  strong 2. Clase de reserva o nivel de servicio básico a bordo y en tierra
                td 
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span a.
                      | Clase primera.
                    li 
                      .lista-ol--cuadro__vineta
                        span b.
                      | Clase intermedia o de negocios.
                    li 
                      .lista-ol--cuadro__vineta
                        span c.
                      | Clase turista. 
              tr
                td 
                  strong 3. Fecha en que se realiza el viaje
                td 
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span a.
                      | Estación o temporada de viaje.
                    li 
                      .lista-ol--cuadro__vineta
                        span b.
                      | Día de la semana.
                    li 
                      .lista-ol--cuadro__vineta
                        span c.
                      | Horario. 
              tr
                td 
                  strong 4. Condición del pasajero o descuentos especiales
                td 
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span a.
                      | Edad.
                    li 
                      .lista-ol--cuadro__vineta
                        span b.
                      | Estatus familiar o acompañantes.
                    li 
                      .lista-ol--cuadro__vineta
                        span c.
                      | Residencia.    
                    li 
                      .lista-ol--cuadro__vineta
                        span d.
                      | Profesión.
                    li 
                      .lista-ol--cuadro__vineta
                        span e.
                      | Grupo.                
            thead.gris
              tr
                th.py-3(colspan='2') 
                  h3.mb-0 Requisitos de venta y uso
            tbody
              tr
                td 
                  strong 1. Tarifas propias
                td 
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span a.
                      | Creadas y vendidas a través de cada compañía aérea.
              tr
                td 
                  strong 2. Tarifas públicas
                td 
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span a.
                      | Normales.
                    li 
                      .lista-ol--cuadro__vineta
                        span b.
                      | Promocionales o especiales.
              tr
                td 
                  strong 3. Tarifas confidenciales o creativas
                td 
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span a.
                      | Inclusive Tour.
                    li 
                      .lista-ol--cuadro__vineta
                        span b.
                      | Tarifa “bulk”.        


    p.mb-5(data-aos="fade") Cuando el pasajero requiere de un viaje que tenga escalas no es recomendable calcularlo por tarifas publicadas por trayecto, ya que le sale muy costoso.


    h3.mb-4(data-aos="fade-right") Estructura de las tarifas aéreas

    p(data-aos="fade") Se determinan por trayectos que es un recorrido entre un punto de origen del viaje y un punto de destino final, también se pueden llamar tramos o porciones aéreas en terminología aeronáutica
    p.mb-4(data-aos="fade") Hay variables para determinar el precio de un trayecto, a saber:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.tarjeta-borde-naranja.p-4
        .row.align-items-center
          .col-md-8.mb-4.mb-lg-0
            h4.mb-4 Ámbito por donde transcurre el vuelo
            ul.lista-ul--color.lista-circulo.mb-0
              li
                i.fas.fa-circle
                p
                  strong Trayecto nacional: 
                  | tarifas nacionales o domésticas.
              li
                i.fas.fa-circle
                p
                  strong Trayecto internacional: 
                  | tarifas internacionales.
              li.mb-0
                i.fas.fa-circle
                p
                  strong Trayecto mixto: 
                  | es un cálculo combinado entre ambas tarifas.
          .col-md-4
            img(src="@/assets/curso/tema2-1-img3.svg", alt="Imagen decorativa")


    h5.mb-4(data-aos="fade-right") La dirección y el itinerario elegido del viaje puede darse de diversas maneras como por ejemplo:
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h5.mb-4(data-aos="fade-right") Rutas aéreas: las tarifas varían según la ruta aérea utilizada y de acuerdo con el trayecto elegido
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.tarjeta-borde-naranja.p-4
        .row.align-items-center
          .col-md-1
          .col-md-5.mb-4.mb-lg-0
            ul.lista-ul--color.lista-check.mb-0
              li.mb-0
                i.fas.fa-check
                | Ruta del Atlántico (AT).
              li.mb-0
                i.fas.fa-check
                | Ruta del Pacífico (PA).
              li.mb-0
                i.fas.fa-check
                | Ruta Atlántico + Pacífico (AP).
              li.mb-0
                i.fas.fa-check
                | Polar (PO).
              li.mb-0
                i.fas.fa-check
                | Siberia (TS).
              li.mb-0
                i.fas.fa-check
                | Hemisferio Este (EH).
              li.mb-0
                i.fas.fa-check
                | Moscú (PE).       
          .col-md-5
            img(src="@/assets/curso/tema2-1-img4.svg", alt="Imagen decorativa")
          .col-md-1  

    h4.mb-4(data-aos="fade-right") Paradas intermedias o Stopover
    .row.mb-4
      .col-lg-7.mb-4(data-aos="fade-right")
        p Es cuando el pasajero decide realizar una parada o estancia en un punto intermedio, es llamado Stopover esto puede aumentar la tarifa aérea y adicionar impuestos internos. Si la parada la determina la compañía aérea y el pasajero continuó en el mismo vuelo se llama escala técnica o escala comercial y esto no incide en la tarifa. 
      .col-lg-5.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2-1-img5.png", alt="Imagen decorativa")   

    .row
      .col-lg-7.mb-4(data-aos="fade-right")
        h5 Características y categoría de las tarifas
        p En el transporte aéreo para atender a los diferentes mercados o segmentos se han creado una gran variedad de tarifas para satisfacer sus necesidades de viaje, esto lo determina la empresa aérea según su competencia e influencia en el mercado, pueden establecer diferentes cabinas de servicio en la configuración de sus aeronaves y también establecen horarios y frecuencias de vuelos.
        h5 Tarifas de pasajeros
        p En el transporte aéreo existen dos tipos de tarifas, las publicadas o públicas y las no publicadas o privadas. En el caso de las publicadas se distribuyen públicamente y se pueden presentar a uno o más gobiernos para que las aprueben; y en el caso de las no publicadas o tarifas privadas no se distribuyen ni se hacen públicas y no se requieren presentar al Gobierno para su aprobación.
      .col-lg-5.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2-1-img6.svg", alt="Imagen decorativa") 


    p.mb-4(data-aos="fade") Las tarifas publicadas se dividen en dos categorías, normales y especiales, esto es:

    TabsC.color-acento-contenido.mb-4
      .py-3.py-md-4(titulo="Tarifas normales")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h5 Tarifas normales
            p Las tarifas normales son muy flexibles ya que permite realizar sin restricciones, reserva, compra de tiquetes, cambios de reserva o itinerarios, estancia, paradas, transferencias, combinación de tarifas y cancelaciones, estas se establecen para primera clase, clase de negocios (intermedia) o económica (categoría superior), en algunos mercados existen tarifas normales restringidas, estas suelen tener la mayoría de las características de las anteriores, pueden tener algunas condiciones de restricción en cupos, estancias, paradas, etc. 
          .col-md-5
            figure
              img(src='@/assets/curso/tema2-1-tabs1.png', alt='Tarifas normales')
      .py-3.py-md-4(titulo="Tarifas especiales")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h5 Tarifas especiales
            p En las especiales se encuentran dos tipos de tarifas las promocionales y no promocionales.
            p Por su parte, las tarifas 
              strong no promocionales 
              | o categoría personal se refieren a las tarifas para jóvenes, estudiantes, niños, personas de la tercera edad, funcionarios, militares, marineros, agentes de viajes y empleados de líneas aéreas, se han establecido por órdenes gubernamentales para estos segmentos especiales.
            p Las tarifas 
              strong promocionales 
              | son las creadas con valores reducidos para el alcance de todas las personas con unas condiciones específicas para reserva, compra de tiquete, cambios, reembolsos y devoluciones.                    
          .col-md-5
            figure
              img(src='@/assets/curso/tema2-1-tabs2.png', alt='Tarifas especiales')

    p.mb-4(data-aos="fade") 
      strong Las tarifas no publicadas 
      | tienen una distribución limitada y son para realizar negociaciones especiales entre aerolíneas y agentes de viajes (consolidador o agrupador). Estos agentes son intermediarios que compran sillas de vuelos al por mayor de las líneas áreas para venderlas a agencias detallistas, empresas u organizaciones. Estas tarifas, por lo general, son más económicas y solamente los agentes pueden realizar la venta.

    .row.justify-content-center(data-aos="fade-down") 
      .col-lg-9
        a.anexo.mb-4.mb-lg-0(href="https://www.icao.int/Meetings/atconf6/Documents/Doc%209626_es.pdf " target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p 
              strong Enlace web. 
              | Con el fin de ampliar la información sobre este tema, se invita a consultar el siguiente enlace:
              | https://www.icao.int/Meetings/atconf6/Documents/Doc%209626_es.pdf 


    Separador


    // 2.2
    #t_2_2.titulo-segundo(data-aos="fade-right")
      .h2 2.2.  Interpretación de reglas tarifarias

    p(data-aos="fade") En el momento de desplegar las tarifas se deben revisar de acuerdo con la necesidad o gusto del pasajero la tarifa seleccionada y desplegar la información de la reglamentación de la misma, esto con el fin de informar al pasajero las restricciones que tiene la clase de servicio que está adquiriendo.
    p.mb-5(data-aos="fade") Dentro de las reglas hay diferentes categorías, donde cada una tiene un código asignado para buscarla en el sistema y muestre la información correspondiente a la tarifa, como son:

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-lg-10
        .pasos-a.color-acento-contenido
          .pasos-a__item
            .row.align-items-center.d-flex
              .col-3.col-sm-2.col-lg-1.pasos-a__numero.text-center.d-inline-flex.justify-content-center.align-items-center.bottom
                .pasos-a__circle  
                  .h2.text-white AP
              .col.py-3
                .row
                  h5 ADVANCE RES/TKTG
                  p Tiempo anticipado de reserva y emisión del tiquete. El sistema nos informa si esta tarifa presentó una reserva con anterioridad y también si estimó el plazo para comprar el tiquete.
            .row.pasos-a__linea
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.top-right
              .col-6.col-sm-8.col-lg-10
                .hor-line
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.left-bottom
          .pasos-a__item
            .row.align-items-center.d-flex.flex-row-reverse
              .col-3.col-sm-2.col-lg-1.pasos-a__numero.text-center.d-inline-flex.justify-content-center.align-items-center.full
                .pasos-a__circle
                  .h2.text-white BO
              .col.py-3.text-end
                .row
                  h5 BLACKOUTS
                  p Periodos de embargo. Esto quiere decir que son fechas dentro de las cuales la tarifa seleccionada no puede ser utilizada.      
            .row.pasos-a__linea
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.right-bottom
              .col-6.col-sm-8.col-lg-10
                .hor-line
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.top-left
          .pasos-a__item
            .row.align-items-center.d-flex
              .col-3.col-sm-2.col-lg-1.pasos-a__numero.text-center.d-inline-flex.justify-content-center.align-items-center.full
                .pasos-a__circle  
                  .h2.text-white CH
              .col.py-3
                .row
                  h5 CHILD DISCOUNT
                  p Corresponde al descuento para niños (CHD). Nos muestra la información si la tarifa tiene algún descuento a niños entre los 2 años y antes de cumplir los 12 años. También nos informa el descuento que se debe otorgar a los infantes (INF), es decir, a los niños desde un día hasta antes de los dos años. 
            .row.pasos-a__linea
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.top-right
              .col-6.col-sm-8.col-lg-10
                .hor-line
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.left-bottom
          .pasos-a__item
            .row.align-items-center.d-flex.flex-row-reverse
              .col-3.col-sm-2.col-lg-1.pasos-a__numero.text-center.d-inline-flex.justify-content-center.align-items-center.full
                .pasos-a__circle
                  .h2.text-white CO
              .col.py-3.text-end
                .row
                  h5 COMBINABILITY
                  p Combinabilidad. Esta nos indica si la tarifa se puede combinar con tarifa OW, o con mitades de tarifas RT.
            .row.pasos-a__linea
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.right-bottom
              .col-6.col-sm-8.col-lg-10
                .hor-line
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.top-left
          .pasos-a__item
            .row.align-items-center.d-flex
              .col-3.col-sm-2.col-lg-1.pasos-a__numero.text-center.d-inline-flex.justify-content-center.align-items-center.full
                .pasos-a__circle  
                  .h2.text-white EL
              .col.py-3
                .row
                  h5 ELIGIBILITY
                  p Esta nos informa si la tarifa está dirigida a un tipo de público específico.
            .row.pasos-a__linea
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.top-right
              .col-6.col-sm-8.col-lg-10
                .hor-line
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.left-bottom
          .pasos-a__item
            .row.align-items-center.d-flex.flex-row-reverse
              .col-3.col-sm-2.col-lg-1.pasos-a__numero.text-center.d-inline-flex.justify-content-center.align-items-center.full
                .pasos-a__circle
                  .h2.text-white FL
              .col.py-3.text-end
                .row
                  h5 FLIGHT APLICATION
                  p Esta opción nos informa si esta tarifa se puede utilizar en cualquier vuelo o solamente en vuelos determinados. 
            .row.pasos-a__linea
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.right-bottom
              .col-6.col-sm-8.col-lg-10
                .hor-line
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.top-left      
          .pasos-a__item
            .row.align-items-center.d-flex
              .col-3.col-sm-2.col-lg-1.pasos-a__numero.text-center.d-inline-flex.justify-content-center.align-items-center.full
                .pasos-a__circle  
                  .h2.text-white MX
              .col.py-3
                .row
                  h5 MAXIMUN STAY
                  p Estadía máxima en destino. Es el plazo máximo de días o meses que un viajero se puede quedarse para utilizar la tarifa.
            .row.pasos-a__linea
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.top-right
              .col-6.col-sm-8.col-lg-10
                .hor-line
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.left-bottom
          .pasos-a__item
            .row.align-items-center.d-flex.flex-row-reverse
              .col-3.col-sm-2.col-lg-1.pasos-a__numero.text-center.d-inline-flex.justify-content-center.align-items-center.full
                .pasos-a__circle
                  .h2.text-white MN
              .col.py-3.text-end
                .row
                  h5 MINIMUN STAY
                  p Estadía mínima en destino. Es el mínimo de días que el viajero puede permanecer en la ciudad de destino. 
            .row.pasos-a__linea
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.right-bottom
              .col-6.col-sm-8.col-lg-10
                .hor-line
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.top-left
          .pasos-a__item
            .row.align-items-center.d-flex
              .col-3.col-sm-2.col-lg-1.pasos-a__numero.text-center.d-inline-flex.justify-content-center.align-items-center.full
                .pasos-a__circle  
                  .h2.text-white OD
              .col.py-3
                .row
                  h5 OTHER DISCOUNTS
                  p Otros descuentos. Este va dirigido a distintos tipos de viajeros como son: personas de la tercera edad 
                    italic (senior citizen), 
                    | o jóvenes 
                    italic (youth), 
                    | etc.
            .row.pasos-a__linea
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.top-right
              .col-6.col-sm-8.col-lg-10
                .hor-line
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.left-bottom
          .pasos-a__item
            .row.align-items-center.d-flex.flex-row-reverse
              .col-3.col-sm-2.col-lg-1.pasos-a__numero.text-center.d-inline-flex.justify-content-center.align-items-center.full
                .pasos-a__circle
                  .h2.text-white PE
              .col.py-3.text-end
                .row
                  h5 PENALTIES
                  p Penalidades. Se divide en dos categorías: la primera son penalidades a cobrar por concepto de reembolsos 
                    italic (cancellation) 
                    | y sus excepciones y la segunda categoría son las penalidades a cobrar por concepto de revisiones 
                    italic (reissue) 
                    | o revalidaciones 
                    italic (revalidation) 
                    | y sus excepciones, hay que tener en cuenta que algunas tarifas aplican descuentos para CHD y también se les debe aplicar la penalidad para 
                    italic child.
            .row.pasos-a__linea
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.right-bottom
              .col-6.col-sm-8.col-lg-10
                .hor-line
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.top-left
          .pasos-a__item
            .row.align-items-center.d-flex
              .col-3.col-sm-2.col-lg-1.pasos-a__numero.text-center.d-inline-flex.justify-content-center.align-items-center.full
                .pasos-a__circle  
                  .h2.text-white RU
              .col.py-3
                .row
                  h5 RULE APPLICATION
                  p Aplicación de las reglas. Se refiere a las reglas que se deben aplicar al tipo de tarifa, también a la clase de servicio (ejecutiva o turista).
            .row.pasos-a__linea
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.top-right
              .col-6.col-sm-8.col-lg-10
                .hor-line
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.left-bottom
          .pasos-a__item
            .row.align-items-center.d-flex.flex-row-reverse
              .col-3.col-sm-2.col-lg-1.pasos-a__numero.text-center.d-inline-flex.justify-content-center.align-items-center.full
                .pasos-a__circle
                  .h2.text-white SR
              .col.py-3.text-end
                .row
                  h5 SALES RESTRICTION
                  p Restricción de venta. Esta nos indica si la tarifa tiene alguna limitación para ser vendida en algún país o a través de algún medio de pago.
            .row.pasos-a__linea
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.right-bottom
              .col-6.col-sm-8.col-lg-10
                .hor-line
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.top-left      
          .pasos-a__item
            .row.align-items-center.d-flex
              .col-3.col-sm-2.col-lg-1.pasos-a__numero.text-center.d-inline-flex.justify-content-center.align-items-center.full
                .pasos-a__circle  
                  .h2.text-white SE
              .col.py-3
                .row
                  h5 SEASONS
                  p Temporadas. Esta opción nos indica en que temporadas altas, baja o sin temporada podemos utilizar esta tarifa o fechas específicas según lo establezca la empresa aérea.
            .row.pasos-a__linea
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.top-right
              .col-6.col-sm-8.col-lg-10
                .hor-line
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.left-bottom
          .pasos-a__item
            .row.align-items-center.d-flex.flex-row-reverse
              .col-3.col-sm-2.col-lg-1.pasos-a__numero.text-center.d-inline-flex.justify-content-center.align-items-center.full
                .pasos-a__circle
                  .h2.text-white SO
              .col.py-3.text-end
                .row
                  h5 STOPOVERS
                  p Paradas. Es la que nos indica si la tarifa que se está vendiendo permite una parada o varias con estancia en alguna ciudad intermedia entre ciudad de origen y ciudad de destino. También nos muestra si estas paradas tienen algún costo o son gratuitas.
            .row.pasos-a__linea
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.right-bottom
              .col-6.col-sm-8.col-lg-10
                .hor-line
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.top-left
          .pasos-a__item
            .row.align-items-center.d-flex
              .col-3.col-sm-2.col-lg-1.pasos-a__numero.text-center.d-inline-flex.justify-content-center.align-items-center.full
                .pasos-a__circle  
                  .h2.text-white SU
              .col.py-3
                .row
                  h5 SURCHARGES
                  p Sobrecosto. En esta podemos encontrar los valores adicionales a la tarifa que debemos sumar antes de aplicar los porcentajes de impuesto con IVA. Estos valores se aplican de acuerdo con la ruta como es el de combustible (Q).
            .row.pasos-a__linea
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.top-right
              .col-6.col-sm-8.col-lg-10
                .hor-line
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.left-bottom
          .pasos-a__item
            .row.align-items-center.d-flex.flex-row-reverse
              .col-3.col-sm-2.col-lg-1.pasos-a__numero.text-center.d-inline-flex.justify-content-center.align-items-center.full
                .pasos-a__circle
                  .h2.text-white TE
              .col.py-3.text-end
                .row
                  h5 TICKET ENDORSEMENTES
                  p Endosos. Nos informa si la tarifa puede ser autorizada para ser utilizada por otra empresa aérea o no.
            .row.pasos-a__linea
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.right-bottom
              .col-6.col-sm-8.col-lg-10
                .hor-line
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
                .pasos-a__linea__esquina__linea.top-left      
          .pasos-a__item
            .row.align-items-center.d-flex
              .col-3.col-sm-2.col-lg-1.pasos-a__numero.text-center.d-inline-flex.justify-content-center.align-items-center.top
                .pasos-a__circle  
                  .h2.text-white TR
              .col.py-3
                .row
                  h5 TRAVEL RESTRICTIONS
                  p Restricciones de viaje. Esta nos indica los días (fechas) y/o horas específicas en que se debe utilizar la tarifa.
            


    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .row.tarjeta-borde-morada.p-4
          p.mb-0 
            strong Revalidaciones y revisados: 
            | son procesos de reemisiones de billetes aéreos que se realizan mediante una serie de pasos específicos basados en las políticas de revisados de la IATA y de las políticas que adoptan las empresas aéreas.
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/PCOm4HG-QPw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        //-.tarjeta.color-degrade.p-3
          .row.justify-content-around.align-items-center
            .col-1
            .col-3.col-sm-3.col-lg-2
              img.px-lg-3(src="@/assets/curso/tema2-2-cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Video inicio - Restricciones
                  p.text-small.mb-0 A manera de explicación sobre la plataforma Amadeus, 
                    br
                    | se presenta el siguiente video; se recomienda su descarga.
                .col-sm-auto.px-lg-4
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    h4.mb-4(data-aos="fade-right") Ejemplo, despliegue de penalidades de una tarifa

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        figure
          img(src='@/assets/curso/tema2-2-imagen.jpg', alt='Despliegue de penalidades de una tarifa')

    Separador


    // 2.3
    #t_2_3.titulo-segundo(data-aos="fade-right")
      .h2 2.3.	Cotización de vuelos

    p.mb-4(data-aos="fade") Los sistemas de distribución global que hay en los mercados turísticos proporcionan bases de datos de contenidos tarifarios con millones de cambios en las tarifas, las reglas, las rutas y las notas al pie de aerolíneas internacionales y domésticas que son procesadas electrónicamente varias veces al día para proporcionar en tiempo real la información. La automatización total de las categorías de reglas elimina la intervención humana y reduce el riesgo de los errores en la cotización con información de reglas y tarifas más precisas y automáticas.
    
    .row.mb-2
      .col-lg-7.mb-4(data-aos="fade-right")
        p Se puede cotizar en varios momentos de acuerdo con el sistema de distribución que se tenga, esto permite tarificar sobre un itinerario sin tener que completar la reserva, presenta la tarifa entre un punto de origen y un punto de destino específico, visualizándose en fecha actual o fecha de salida específica, muestra el valor correspondiente a las clases que se hayan solicitado, en estos sistemas si la tarifa está publicada en otra moneda el sistema hará el cálculo para desplegarla con los impuestos correspondientes. Es importante para la cotización indicar el tipo de pasajero si es adulto, menor o infante para que muestre la tarifa correspondiente a cada tipo de pasajero con sus respectivos impuestos.
        .tarjeta-borde-naranja.p-4
          p.mb-2 Las transacciones de cotización de tarifas se dividen en dos:
          ul.lista-ul--color.lista-circulo.mb-0
            li.mb-0
              i.fas.fa-circle
              | FQ transacciones informativas sin PNR. 
            li.mb-0
              i.fas.fa-circle
              | FX tarifación del itinerario reservado en un PNR.
      .col-lg-5.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2-3-imagen.png", alt="Imagen decorativa")

    p.mb-4(data-aos="fade") Las entradas de cotización son las siguientes:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-9
        .tabla-a.color-acento-contenido
          table
            thead.amarillo
              tr
                th.py-3.casilla1
                  h3.mb-0 Entrada de cotización
                th.py-3
                  h3.mb-0 Respuesta del sistema
            tbody
              tr
                td.text-center 
                  strong FXX
                td.text-center Tarifica el itinerario sin guardar el valor.
              tr
                td.text-center 
                  strong FXP
                td.text-center Tarifica el itinerario y guarda el valor.
              tr
                td.text-center 
                  strong FXT
                td.text-center Tarifica y guarda una tarifa, luego de FXP ya que el sistema ofrece varias tarifas.
              tr
                td.text-center 
                  strong FXR
                td.text-center Tarifica la tarifa más baja disponible sin guardar el valor, de ser necesario el sistema modifica las clases para así poder traer la más económica.     
              tr
                td.text-center 
                  strong FXL
                td.text-center Tarifica la tarifa más baja posible, pero no tiene en cuenta la disponibilidad de cupo.
              tr
                td.text-center 
                  strong FXB
                td.text-center Tarifica y guarda la tarifa más baja disponible.
              tr
                td.text-center 
                  strong FXR
                td.text-center Tarifica el valor más bajo disponible, pero no guarda el valor.
              tr
                td.text-center 
                  strong FXA
                td.text-center Despliegue de tarifas más bajas disponibles y que se pueden aplicar.
              tr
                td.text-center 
                  strong FXZ
                td.text-center Selecciona una tarifa luego de FXA, pero no guarda el valor.        

    p.mb-4(data-aos="fade") Ejemplo de cotización de un itinerario, solicitando al sistema que traiga la tarifa más baja disponible:

    .row.mb-5.justify-content-md-center
      .container.lg-hotspot4.col-lg-11.col-12
        .lg-container.lg-hotspot4
          figure
            img.lg-image(src="@/assets/curso/tema2-3-hotspot.jpg", alt="Ejemplo de cotización de un itinerario")
          .lg-hotspot.lg-hotspot--2.lg-mobile1-1(style="top: 26%; left: 26.5%;")  
            .lg-hotspot__button(@mouseover="mostrarIndicador = false")
              .indicador--click(v-if="mostrarIndicador")
            .lg-hotspot__label.p-4
              h4 
                strong 1. 01AVILA/CLAUDIA
              p Nombre del pasajero.
          .lg-hotspot.lg-hotspot--2.lg-mobile1-2(style="top: 33%; left: 26.5%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 2. LAST TKT DTE 18JUN21/1551 IN POS
              p Última fecha en la que se puede emitir el tiquete. 
          .lg-hotspot.lg-hotspot--1.lg-mobile1-3(style="top: 42.5%; left: 27%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 3. BOGMDEBOG 
              p Ruta que va a realizar el pasajero.
          .lg-hotspot.lg-hotspot--2.lg-mobile1-4(style="top: 39.5%; left: 30%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 4. AV AV
              p Aerolínea que opera los vuelos.
          .lg-hotspot.lg-hotspot--2.lg-mobile1-5(style="top: 39.5%; left: 32.5%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 5. 8426 8435 
              p Números de vuelo en la ruta solicitada.
          .lg-hotspot.lg-hotspot--2.lg-mobile1-6(style="top: 39.5%; left: 36.5%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 6. W W 
              p Clase en la que se reservó cada vuelo.
          .lg-hotspot.lg-hotspot--2.lg-mobile1-7(style="top: 39.5%; left: 40.5%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 7. 15JUL 20JUL 
              p Primera fecha: viaje de ida segunda fecha: viaje de regreso.
          .lg-hotspot.lg-hotspot--2.lg-mobile1-8(style="top: 39.5%; left: 45.1%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 8. 0500 0618 
              p Primera hora: viaje de ida segunda hora: viaje de regreso.
          .lg-hotspot.lg-hotspot--2.lg-mobile1-9(style="top: 39.5%; left: 49.2%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 9. WESB0BRQ WESB0BRQ 
              p 
                italic Fare basis 
                | o base de tarifa, nombre de la tarifa.
          .lg-hotspot.lg-hotspot--1.lg-mobile1-10(style="top: 39.5%; left: 61.2%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 10. NVB 15JUL 20JUL 
              p 
                italic NOT VALID BEFORE: 
                | NO VÁLIDO ANTES,quiere decir que esta tarifa aplica solo por esas fechas puntualmente.
          .lg-hotspot.lg-hotspot--1.lg-mobile1-11(style="top: 39.5%; left: 65.5%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 11. NVA 15JUL 20JUL
              p 
                italic NOT VALID AFTER: 
                | NO VÁLIDO DESPUÉS, quiere decir que esta tarifa aplica solo por esas fechas puntualmente.
          .lg-hotspot.lg-hotspot--1.lg-mobile1-12(style="top: 39.5%; left: 69.6%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 12. BG 0P 0P 
              p Hace referencia a las piezas de equipaje que tiene permitida esta tarifa, en este caso no tiene piezas permitidas.
          .lg-hotspot.lg-hotspot--2.lg-mobile1-13(style="top: 56%; left: 26.5%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 13. COP 94000 
              p Valor de la tarifa neta (valor neto sin impuestos).
          .lg-hotspot.lg-hotspot--2.lg-mobile1-14(style="top: 62.4%; left: 26.5%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 14.COP 4700YS COP 57500DU COP 35880 XT 
              p.mb-0 Desglose de impuestos aplicables a este tiquete.  
              p.mb-0 YS: IVA 5%. 
              p.mb-0 XT: total de impuestos. 
              p DU: Cargo administrativo. 
          .lg-hotspot.lg-hotspot--2.lg-mobile1-15(style="top: 73%; left: 26.5%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 15.COP 192080 
              p Valor total (tarifa neta más impuestos)
          .lg-hotspot.lg-hotspot--2.lg-mobile1-16(style="top: 56%; left: 39.5%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 16. 15JUL21BOG AV MDE Q16000.00 31000.00AV BOG Q16000.00 31000.00COP94000.00ENDXT COP 2880-DV COP 33000-CO
              p.mb-0 Desglosa la información de la construcción de tarifa, sirve para saber la ruta completa, si tiene conexiones, si entran otras aerolíneas a participar, valor de tarifa por componente, la moneda que se maneja, y el valor total.
              p.mb-0 Q combustible 
              p.mb-0 CO Impuesto tasa aeroportuaria 
              p COP Colombian Pesos   


    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-9
        .tabla-a.color-acento-contenido
          table
            thead.amarillo
              tr
                th.py-3.casilla1
                  h3.mb-0 Respuesta del sistema
                th.py-3
                  h3.mb-0 Explicación
            tbody
              tr
                td
                  strong 1. 01AVILA/CLAUDIA
                td Nombre del pasajero.
              tr
                td
                  strong 2. LAST TKT DTE 18JUN21/1551 IN POS
                td Última fecha en la que se puede emitir el tiquete. 
              tr
                td
                  strong 3. BOGMDEBOG
                td Ruta que va a realizar el pasajero.
              tr
                td
                  strong 4. AV AV
                td Aerolínea que opera los vuelos.
              tr
                td
                  strong 5. 8426 8435
                td Números de vuelo en la ruta solicitada.
              tr
                td
                  strong 6. W W
                td Clase en la que se reservó cada vuelo.
              tr
                td
                  strong 7. 15JUL 20JUL
                td Primera fecha: viaje de ida segunda fecha: viaje de regreso.
              tr
                td
                  strong 8. 0500 0618
                td Primera hora: viaje de ida segunda hora: viaje de regreso.
              tr
                td
                  strong 9. WESB0BRQ WESB0BRQ
                td Fare basis o base de tarifa, nombre de la tarifa.
              tr
                td
                  strong 10. NVB 15JUL 20JUL 
                td 
                  italic NOT VALID BEFORE: 
                  | NO VÁLIDO ANTES
                  br
                  | Quiere decir que esta tarifa aplica solo por esas fechas puntualmente.
              tr
                td
                  strong 11. NVA 15JUL 20JUL
                td 
                  italic NOT VALID AFTER: 
                  | NO VÁLIDO DESPUÉS
                  br
                  | Quiere decir que esta tarifa aplica solo por esas fechas puntualmente.
              tr
                td
                  strong 12. BG 0P 0P
                td Hace referencia a las piezas de equipaje que tiene permitida esta tarifa, en este caso no tiene piezas permitidas.
              tr
                td
                  strong 13. COP 94000
                td Valor de la tarifa neta (valor neto sin impuestos).
              tr
                td
                  strong 14. COP 4700YS COP 57500DU COP 35880 XT
                td Desglose de impuestos aplicables a este tiquete. 
                  br
                  | YS: IVA 5%. 
                  br
                  | XT: total de impuestos. 
                  br 
                  | DU: Cargo administrativo. 
              tr
                td
                  strong 15.COP 192080
                td Valor total (tarifa neta más impuestos)
              tr
                td
                  strong 16. 15JUL21BOG AV MDE Q16000.00 31000.00AV BOG Q16000.00 31000.00COP94000.00ENDXT COP 2880-DV COP 33000-CO
                td Desglosa la información de la construcción de tarifa, sirve para saber la ruta completa, si tiene conexiones, si entran otras aerolíneas a participar, valor de tarifa por componente, la moneda que se maneja, y el valor total.                           
                  br
                  | Q combustible 
                  br
                  | CO Impuesto tasa aeroportuaria 
                  br 
                  | COP Colombian Pesos

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/Y_ommiCsPCY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        //- .tarjeta.color-degrade.p-3
          .row.justify-content-around.align-items-center
            .col-1
            .col-3.col-sm-3.col-lg-2
              img.px-lg-3(src="@/assets/curso/tema2-2-cta2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Video inicio - Tarificación
                  p.text-small.mb-0 A manera de explicación sobre la plataforma Amadeus, se 
                    br
                    | presenta el siguiente video; se recomienda su descarga.
                .col-sm-auto.px-lg-4
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    Separador


    // 2.4
    #t_2_4.titulo-segundo(data-aos="fade-right")
      .h2 2.4.	Emisión de boletos             
               
    .row.mb-4
      .col-lg-7.mb-4(data-aos="fade-right")
        p En la industria aeronáutica participan varios documentos en el proceso de viaje, iniciando por la emisión del billete o pasaje aéreo, luego en el proceso de registro de pasajeros y de equipaje donde se obtiene el pasabordo, las etiquetas de equipaje y demás. Para iniciar el proceso se debe tener en cuenta el área comercial y los documentos que en este momento se generan, como el billete aéreo.
      .col-lg-5.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2-4-img.png", alt="Imagen decorativa")

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.tarjeta-borde-naranja.p-4
        .row.align-items-center
          .col-md-8.mb-4.mb-lg-0.px-lg-4
            h4.mb-4 Billete aéreo
            p.mb-0 Documento contrato de servicio de transporte entre la compañía aérea y el pasajero y también se toma como recibo de pago como documento contable que trae una serie de datos de itinerario para las aerolíneas involucradas, que se ajustan a los códigos internacionales de transporte aéreo.
          .col-md-4
            img(src="@/assets/curso/tema2-4-img1.svg", alt="Imagen decorativa")

    p.mb-4(data-aos="fade") Para hacer la emisión de un billete o tiquete aéreo se utilizan dos formas:

    .row.justify-content-center.mb-4
      .col-lg-10
        .row
          .col-lg-6(data-aos="fade-right")
            .nav-holder(@mouseover="mostrarIndicador = false")
              .indicador--click(v-if="mostrarIndicador")
              img(src="@/assets/curso/tema2-4-hover1.svg", alt="Manualmente")
              .text.text-center.px-lg-5.p-4
                h5 Manualmente
                p En un porcentaje muy reducido se emiten de forma manual en empresas que no tienen impresora automática o en casos especiales de expedición para modificaciones; los billetes internacionales hay que emitirlos en inglés.
          .col-lg-6(data-aos="fade-right")
            .nav-holder
              img(src="@/assets/curso/tema2-4-hover2.svg", alt="Automáticamente")
              .text.text-center.px-lg-5.p-4
                h5 Automáticamente
                p Se emiten de forma automática en las compañías que disponen de los sistemas GDS y Teleticketing o impresora.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .tarjeta.color-acento-botones.p-3
          .row.justify-content-around.align-items-center
            .col-1
            .col-3.col-sm-3.col-lg-2
              img.px-lg-3(src="@/assets/curso/tema2-4-cta1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.text-white.mb-1 Imagen de un tiquete ya emitido por Amadeus
                .col-sm-auto.px-lg-4
                  a.boton.color-primario(:href="obtenerLink('/downloads/Infografia.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        figure.mb-4
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/RK9sJ8vYv9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/h4zlORi_MSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        //- .tarjeta.color-degrade.p-3
          .row.justify-content-around.align-items-center
            .col-1
            .col-3.col-sm-3.col-lg-2
              img.px-lg-3(src="@/assets/curso/tema2-4-cta3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Video inicio - Modalidades
                  p.text-small.mb-0 A manera de explicación sobre la plataforma Amadeus, se 
                    br
                    | presenta el siguiente video; se recomienda su descarga.
                .col-sm-auto.px-lg-4
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

      Separador


    // 2.5
    #t_2_5.titulo-segundo(data-aos="fade-right")
      .h2 2.5.	Documentos valor (EMD/MCO)

    p.mb-4(data-aos="fade") El transporte aéreo utiliza una serie de documentos para varias transacciones con los pasajeros, aparte de los que de por sí ya están involucrados en el proceso de viaje; entre estos se encuentran:  

    TabsC.color-acento-contenido
      .py-3.py-md-4(titulo="MCO: (Miscellaneous Charge Orders)")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p 
              strong MCO: (Miscellaneous Charge Orders), 
              |  órdenes de cargas varios (cambios importantes)
            p Es un documento para ser utilizado por agentes autorizados y las compañías aéreas, estos se liquidan a través del BSP al igual que los billetes aéreos, es emitido en conexión con un boleto de avión y solo se pueden utilizar para servicios en las compañías aéreas. Las razones más comunes para emitir una MCO son:  
            ul.lista-ul--color.lista-circulo
              li
                i.fas.fa-circle
                | Cuando se realiza un cambio de boleto y le queda un valor residual al pasajero se le expide este documento para que después lo pueda utilizar como parte de pago en otro servicio de la empresa aérea.
              li 
                i.fas.fa-circle
                | Recaudación de un depósito de grupo.     
            p Este documento se puede utilizar para una sola transacción y solamente se debe utilizar en la compañía que se lo expidió, no son transferibles y no se puede extender la vigencia, si el documento se pierde o es robado no se puede reemplazar.    
          .col-md-5
            figure
              img(src='@/assets/curso/tema2-5-tabs1.png', alt='MCO: (Miscellaneous Charge Orders)')
      .py-3.py-md-4(titulo="EMD: Electronic Miscellaneous Document")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h5 EMD: Electronic Miscellaneous Document
            p Debido al incomensurable crecimiento de la sociedad y el desarrollo tecnológico el 
              italic e-commerce 
              | en viajes aéreos, el sector se ha visto obligado a crear sistemas más amigables con los usuarios por tal razón encontramos los GDS, Amadeus y Sabre, empresas que lideran en los mercados turístico en el mundo.
            p Este documento EMD es uno de los creados electrónicamente, desde la implementación de los sistemas GDS en las empresas de servicios turísticos para emisión de E-TKT y EMD, utilizado con más frecuencia por los agentes de viaje o por las empresas aéreas, se emplean para la venta de servicios complementarios (menores recomendados, comidas especiales a bordo, asignación de sillas) y todos los servicios que las compañías ofrezcan a sus clientes que incluyan un costo adicional, pueden ser emitidos en combinación con un boleto aéreo o también se permite emitir independientemente según sea el caso, y para realizar reemisiones y revalidaciones.               
          .col-md-5
            figure
              img(src='@/assets/curso/tema2-5-tabs2.png', alt='EMD: Electronic Miscellaneous Document') 

    Separador


    // 2.6
    #t_2_6.titulo-segundo(data-aos="fade-right")
      .h2 2.6.	Reportes de venta

    p(data-aos="fade") Es el informe que le permite a las líneas aéreas revisar sus movimientos al finalizar el día, brinda una visión más completa de sus actividades comerciales. Esto conlleva a evaluar las transacciones del día tanto en efectivo como en tarjetas, y también por moneda, ya que algunas oficinas manejan COP (pesos colombianos) y USD (dólares).
    p(data-aos="fade") Con esta información las compañías las tienen en cuenta para tomar las mejores decisiones en cuanto a ventas se trata.
    p.mb-4(data-aos="fade") En el siguiente cuadro se presentan las entradas para desplegar el reporte de ventas y su funcionalidad:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-9
        .tabla-a.color-acento-contenido
          table
            thead
              tr.p-0.m-0
                th.p-0.m-0
                th.p-0.m-0 
            tbody
              tr
                td.text-center 
                  strong TJQ/SOF
                td.text-center 
                  strong Comando mandatorio para el despliegue del reporte de los documentos emitidos por la oficina.
              tr
                td.text-center 
                  strong TJQ/D-7MAR/SOF
                td.text-center 
                  strong Formato para desplegar el reporte de los documentos emitidos por los agentes de su oficina para una fecha específica.
              tr
                td.text-center 
                  strong TTJQ/D-7FEB7MAR/SOF
                td.text-center 
                  strong Formato para desplegar el reporte de los documentos emitidos por los agentes de su oficina en un rango de fechas específicas.    
              tr
                td.text-center 
                  strong TJQ/SOF/C-USD
                td.text-center 
                  strong Formato para desplegar el reporte de los documentos emitidos por los agentes de su oficina en una moneda específica (en el ejemplo USD). 
              tr
                td.text-center 
                  strong TJQ/SOF/QVP-xx
                  br
                  strong xx= código de la aerolínea validadora
                td.text-center 
                  strong Formato para desplegar el reporte de los documentos emitidos por los agentes de su oficina con una aerolínea validadora específica.         

    .row.justify-content-center.tarjeta.tarjeta--gris.mb-5(data-aos="fade-down")
      .col-lg-10
        SlyderE(indicadores="derecha")
          div.p-lg-4.py-5
            figure.mb-4
              img(src='@/assets/curso/tema2-6-slider1.jpg', alt='información de la oficina')
            p.mb-0 En recuadro está la información de la oficina de la cual se está revisando el reporte de ventas y qué fecha se solicita al sistema que permita ver el reporte de ventas.  
          div.p-lg-4
            figure.mb-4
              img(src='@/assets/curso/tema2-6-slider2.jpg', alt='detalle de cada tiquete emitido')
            p.mb-0 En recuadro se encuentra el detalle de cada tiquete emitido (# de tiquete, total pago, tarifa neta, impuestos, nombre del pasajero, código de reserva, firma o identificación del agente quien emitió el documento).   

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

<style lang="sass" scoped>
/* HOTSPOT */
$buttonRadius: 20px;
$labelBorderRadius: 1px
$labelFade: 0.1s
$colorButton: #FFB74D
$colorButtonHover: #8C6DF2
$colorText: #333


.lg-image
  display: block
  height: 100%
  width: 100%
  object-fit: scale-down

.lg-hotspot
  position: absolute
  margin: 0
  padding: 0
  transform: translate(-50%, -50%)
  z-index: 0
  &:hover,
  &:active
    cursor: pointer
    .lg-hotspot__button
      border-color: $colorButtonHover
      background-color: rgba(216, 204, 255, 0.3)

  &:hover
    z-index: 999
    .lg-hotspot__label
      opacity: 1
      background-color: #D8CCFF
      border-radius: 10px

  &__button
    padding: 0px
    border-radius: 5px
    border: 2.5px solid $colorButton
    background-color: rgba(255, 220, 114, 0.3)
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2)
    z-index: 999
    position: absolute

  &__label
    min-width: 300px
    position: absolute
    background-color: white
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2)
    font-size: 14.5px
    line-height: 1.45em
    z-index: 999
    pointer-events: none
    border-radius: $labelBorderRadius
    user-select: none
    opacity: 0
    transition: all $labelFade linear
    p
      margin: 0
      color: $colorText
      font-size: 14px
      line-height: 18px

  @media (max-width: 720px)
    &__label p
      text-align: center
      padding: 4px
    &__button
      height: 12px
      width: 12px
      &:after
        height: 9px
        width: 9px
        border: 2px solid white

.lg-hotspot--1 .lg-hotspot__label
  top: 62px
  right: -30px
.lg-hotspot--2 .lg-hotspot__label
  top: 62px
  left: 20px


.lg-mobile1-1 .lg-hotspot__button
  height: 18px
  width: 115px
.lg-mobile1-2 .lg-hotspot__button
  height: 18px
  width: 270px
.lg-mobile1-3 .lg-hotspot__button
  height: 48px
  width: 32px
.lg-mobile1-4 .lg-hotspot__button
  height: 61px
  width: 24px
.lg-mobile1-5 .lg-hotspot__button
  height: 61px
  width: 42px
.lg-mobile1-6 .lg-hotspot__button
  height: 61px
  width: 25px
.lg-mobile1-7 .lg-hotspot__button
  height: 61px
  width: 46px
.lg-mobile1-8 .lg-hotspot__button
  height: 61px
  width: 39px
.lg-mobile1-9 .lg-hotspot__button
  height: 61px
  width: 85px
.lg-mobile1-10 .lg-hotspot__button
  height: 61px
  width: 45px
.lg-mobile1-11 .lg-hotspot__button
  height: 61px
  width: 42px
.lg-mobile1-12 .lg-hotspot__button
  height: 61px
  width: 28px
.lg-mobile1-13 .lg-hotspot__button
  height: 20px
  width: 97px
.lg-mobile1-14 .lg-hotspot__button
  height: 48px
  width: 119px
.lg-mobile1-15 .lg-hotspot__button
  height: 16px
  width: 97px
.lg-mobile1-16 .lg-hotspot__button
  height: 48px
  width: 321px

/* PC LARGE */
@media (min-width: 721px)
  .container.lg-hotspot4
    width: 978px
  .lg-hotspot4 .lg-image
    width: 955px
  .lg-container.lg-hotspot4
    width: 955px
/* Mobile */
@media (max-width: 720px)

  .container.lg-hotspot4
    width: 345px
  .lg-hotspot4 .lg-image
    width: 320px
  .lg-container.lg-hotspot4
    width: 320px

  .lg-hotspot__label
    min-width: 200px

  .lg-hotspot__button
    border: 1.2px solid #FFB74D

  .lg-hotspot--1 .lg-hotspot__label
    top: 11px
    right: -15px
  .lg-hotspot--2 .lg-hotspot__label
    top: 12px
    left: -65px

  .lg-mobile1-1
    top: 25% !important
    left: 27% !important
    .lg-hotspot__button
      height: 8px
      width: 41px
  .lg-mobile1-2
    top: 31.5% !important
    left: 27% !important
    .lg-hotspot__button
      height: 8px
      width: 93px
  .lg-mobile1-3
    top: 41.5% !important
    left: 27.5% !important
    .lg-hotspot__button
      height: 20px
      width: 13px
  .lg-mobile1-4
    top: 37.5% !important
    left: 31% !important
    .lg-hotspot__button
      height: 25px
      width: 8px
  .lg-mobile1-5
    top: 37.5% !important
    left: 33% !important
    .lg-hotspot__button
      height: 25px
      width: 15px
  .lg-mobile1-6
    top: 37.5% !important
    left: 37% !important
    .lg-hotspot__button
      height: 25px
      width: 9px
  .lg-mobile1-7
    top: 37.5% !important
    left: 41% !important
    .lg-hotspot__button
      height: 25px
      width: 14px
  .lg-mobile1-8
    top: 37.5% !important
    left: 44.6% !important
    .lg-hotspot__button
      height: 25px
      width: 14px
  .lg-mobile1-9
    top: 37.5% !important
    left: 49.5% !important
    .lg-hotspot__button
      height: 25px
      width: 29px
  .lg-mobile1-10
    top: 37.5%  !important
    left: 60.5% !important
    .lg-hotspot__button
      height: 25px
      width: 15px
  .lg-mobile1-11
    top: 37.5% !important
    left: 64.5% !important
    .lg-hotspot__button
      height: 25px
      width: 15px
  .lg-mobile1-12
    top: 37.5% !important
    left: 68.5% !important
    .lg-hotspot__button
      height: 25px
      width: 10px
  .lg-mobile1-13
    top: 55% !important
    left: 27.5% !important
    .lg-hotspot__button
      height: 8px
      width: 34px
  .lg-mobile1-14
    top: 62.5% !important
    left: 27.5% !important
    .lg-hotspot__button
      height: 17px
      width: 41px
  .lg-mobile1-15
    top: 73% !important
    left: 27.5% !important
    .lg-hotspot__button
      height: 6px
      width: 35px
  .lg-mobile1-16
    top: 56% !important
    left: 40% !important
    .lg-hotspot__button
      height: 18px
      width: 108px

/* HOVER */
.nav-holder
  display: inline-block
  margin: 10px 5px
  overflow: hidden
  position: relative
  -webkit-transform: translateZ(0)
  -moz-transform: translateZ(0)
  transform: translateZ(0)

.nav-holder *, .nav-holder *:before, .nav-holder *:after
  -webkit-box-sizing: border-box
  -moz-box-sizing: border-box
  box-sizing: border-box
  -webkit-transition: all 0.45s ease
  -moz-transition: all 0.45s ease
  transition: all 0.45s ease

.nav-holder:before
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  content: ''
  background-color: #FFB74D
  z-index: 888
  opacity: 0.95
  -webkit-transition: all 0.45s ease
  -moz-transition: all 0.45s ease
  transition: all 0.45s ease

.nav-holder:before
  -webkit-transform: translateY(100%)
  -moz-transform: translateY(100%)
  transform: translateY(100%)

.nav-holder:hover:before
  -webkit-transform: translateY(0)
  -moz-transform: translateY(0)
  transform: translateY(0)
  opacity: 0.95
  -webkit-transition-delay: 0.1s
  -moz-transition-delay: 0.1s
  transition-delay: 0.1s
  border-bottom-left-radius: 16px
  border-bottom-right-radius: 16px
  border-top-right-radius: 16px

.nav-holder
  .text
    position: absolute
    top: 100%
    bottom: 0px
    left: 0px
    right: 0px
    z-index: 100
    bottom: 0
    padding: 1em
    z-index: 999
  img
    backface-visibility: hidden
    max-width: 100%
    vertical-align: top
    z-index: 0
  p, h4, i, li, ul
    margin: 0
    opacity: 0

.nav-holder:hover
  .text
    top: 0
    display: flex
    flex-direction: column
    align-content: center
    justify-content: center
  h4, p, i, li, ul
    opacity: 1
    -webkit-transition-delay: 0.2s
    -moz-transition-delay: 0.2s
    transition-delay: 0.2s


@media (max-width: $bp-max-md)
  .nav-holder
    height: 270px
  .nav-holder img
    height: 100%
    object-fit: cover
    object-position: left center
  .nav-holder:hover:before
    border-bottom-left-radius: 16px
    border-bottom-right-radius: 0px
    border-top-right-radius: 0px
</style>
