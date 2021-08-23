<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Básico de reserva

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema1.jpg", alt="Básico de reserva")  

    p.mb-4(data-aos="fade") Para crear una reserva, se debe tener en cuenta varios aspectos tales como el sistema de distribución que para este caso es 
      strong Amadeus
      |, aunque en el mercado existen variedad de sistemas de distribución que ofrecen diferentes características, 
      strong Amadeus 
      | es con el que se trabajará en el transcurso del desarrollo de este programa, se revisarán sus características principales y, además, se conocerán los diferentes menús de funcionalidades presentes en la herramienta en el proceso de elaboración de una reserva.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .bloque-texto-a.color-acento-contenido.p-4 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4
                p Este sistema cuenta con dos modalidades de trabajo, en la pantalla 
                  italic Cryptic Window 
                  | o pantalla de comandos, donde se utilizan una serie de códigos para indicarle al sistema qué función se necesita realizar; también una pantalla de modo gráfico que es similar en sus características a la pantalla de compras virtuales, se diligencia la información en casillas donde se pide información puntual.
            .col-lg-4
              img(src="@/assets/curso/tema1-imagen.svg", alt="Imagen decorativa")

    .row.mb-3
      .col-lg-7.mb-4(data-aos="fade-right")
        p Para empezar, es necesario saber que el sistema está diseñado para que cada usuario tenga un único código de identificación (firma o 
          italic Username
          |) para saber quién creó o manipuló una reserva, esto permitirá saber con exactitud qué movimientos se le hacen a la reserva y quién los realizó.
        p También es importante señalar que cada oficina conectada a este sistema, en este caso 
          strong Amadeus
          |, tiene igualmente un código de identificación u 
          italic Office ID.
        p Se debe crear una contraseña para poder acceder al sistema, en algunas ocasiones tiene condiciones particulares como: debe tener mayúsculas, minúsculas, símbolos, etc., en la pantalla aparece como 
          italic Password 
          | para poder ingresar al sistema.  
      .col-lg-5.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1-imagen2.png", alt="Imagen decorativa")

    p.mb-4(data-aos="fade") Para iniciar, se debe familiarizar con la pantalla de inicio de la herramienta 
      strong Amadeus
      |, para ello se debe observar con atención:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        SlyderB.px-lg-5.py-4.tarjeta.tarjeta--gris(:datos="datosSlyder")

    p.mb-4(data-aos="fade") Al ingresar al sistema encontrará la pantalla de inicio así:

    .row.mb-5.justify-content-md-center
      .container.lg-hotspot1.col-lg-11.col-12
        .lg-container.lg-hotspot1
          figure
            img.lg-image(src="@/assets/curso/tema1-hotspot.jpg", alt="Ingreso Amadeus")
          .lg-hotspot.lg-hotspot--2.lg-mobile1-1(style="top: 7.5%; left: 16.5%;")  
            .lg-hotspot__button(@mouseover="mostrarIndicador = false")
              .indicador--click(v-if="mostrarIndicador")
            .lg-hotspot__label.p-4
              h4 
                strong 1. 
                italic-strong Search 
                strong PNR
              p En esta opción se puede buscar un código de reserva.
          .lg-hotspot.lg-hotspot--1.lg-mobile1-2(style="top: 7.5%; left: 50.5%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 2. 
                italic-strong Retrieve 
              p Este botón trae la información de la reserva luego de haberlo digitado en el recuadro amarillo. 
          .lg-hotspot.lg-hotspot--1.lg-mobile1-3(style="top: 7.5%; left: 81.5%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 3 .00000C
              p Firma del usuario activo en esta pantalla de 
                strong Amadeus.
          .lg-hotspot.lg-hotspot--1.lg-mobile1-4(style="top: 7.5%; left: 86%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 4. 
                italic-strong Office ID: 
                strong BOGXX0000 
              p Código de la oficina en la que se está trabajando.
          .lg-hotspot.lg-hotspot--1.lg-mobile1-5(style="top: 7.5%; left: 97.5%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 5. 
                italic-strong Logout 
              p Salir de 
                strong Amadeus 
                | de forma segura.
          .lg-hotspot.lg-hotspot--2.lg-mobile1-6(style="top: 7.5%; left: 1.2%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 6. 
                italic-strong Create NewPNR 
              p Crear reserva con un flujo ya estipulado por el sistema.
          .lg-hotspot.lg-hotspot--2.lg-mobile1-7(style="top: 13.2%; left: 1.2%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 7. 
                italic-strong Create New 
              p En este menú se encuentran formas de crear una reserva, puede ser de manera manual o con un sistema de flujo de reserva que ayuda con un paso a paso.
          .lg-hotspot.lg-hotspot--2.lg-mobile1-8(style="top: 19.2%; left: 1.2%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 8. 
                italic-strong Retrieve/Modify 
              p En este menú se hace la búsqueda de un código de reserva, de un tiquete electrónico, de un documento valor emitido por la aerolínea.
          .lg-hotspot.lg-hotspot--2.lg-mobile1-9(style="top: 25.2%; left: 1.2%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 9. 
                italic-strong Queue 
              p Se utiliza para enviar información a la cola de verificación.
          .lg-hotspot.lg-hotspot--2.lg-mobile1-10(style="top: 31.5%; left: 1.2%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 10. 
                italic-strong Settings 
              p En este menú se actualiza la contraseña.
          .lg-hotspot.lg-hotspot--2.lg-mobile1-11(style="top: 37.5%; left: 1.2%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 11. 
                italic-strong Calculate and Convert 
              p En este menú se encuentran varias funciones complementarias que ayudan a tener información adicional como:
              ul.mt-2.lista-ul--color.lista-check.mb-0
                li.mb-0
                  i.fas.fa-check
                  | Convertidor de moneda.
                li.mb-0
                  i.fas.fa-check
                  | Tarifas de exceso de equipaje.
                li.mb-0
                  i.fas.fa-check
                  | Calculador de millas.
                li.mb-0
                  i.fas.fa-check
                  | Información de impuestos.
                li.mb-0
                  i.fas.fa-check
                  | Convertidor de hora (revisar hora local en otros países o ciudades).       
          .lg-hotspot.lg-hotspot--2.lg-mobile1-12(style="top: 43.5%; left: 1.2%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 12. 
                italic-strong Tools 
              p En este menú hay varias funciones complementarias para la labor diaria:
              ul.mt-2.lista-ul--color.lista-check.mb-0
                li.mb-0
                  i.fas.fa-check
                  p
                    italic-strong Amadeus Information System: 
                    | información del sistema.
                li.mb-0
                  i.fas.fa-check
                  p
                    italic-strong Sales Report: 
                    | revisar reporte de ventas.
                li.mb-0
                  i.fas.fa-check
                  p
                    italic-strong Cryptic Window: 
                    | pantalla de comandos.
                li.mb-0
                  i.fas.fa-check
                  p
                    italic-strong Copy PNR: 
                    | crear una copia de un PNR.   
                li.mb-0
                  i.fas.fa-check
                  p
                    italic-strong Flight Information:   
                    | información operacional de un vuelo.
                li.mb-0
                  i.fas.fa-check
                  p
                    italic-strong E ticket and Invoice Report:   
                    | reporte de tiquetes y facturas emitidas.
                li.mb-0
                  i.fas.fa-check
                  p
                    italic-strong Flight Loading List:   
                    | información detallada de un vuelo; sillas ocupadas, sillas vacías; pasajeros adultos, niños, etc.
                li.mb-0
                  i.fas.fa-check
                  p
                    italic-strong Retrieve Passanger List:   
                    | lista de pasajeros confirmados en el vuelo.
                li.mb-0
                  i.fas.fa-check
                  p
                    italic-strong Corporative Profile: 
                    | aplica para convenios corporativos y su información de viajes.
                li.mb-0
                  i.fas.fa-check
                  p
                    italic-strong Scratch Pad: 
                    |  block de notas.
                li.mb-0
                  i.fas.fa-check
                  p
                    italic-strong Timatic: 
                    | herramienta utilizada para verificar documentación de viaje.
                li.mb-0
                  i.fas.fa-check
                  p
                    italic-strong Minimum Connecting Time: 
                    | tiempos mínimos de conexión entre un vuelo y otro.
                li.mb-0
                  i.fas.fa-check
                  p
                    italic-strong PNR Recall: 
                    | recordar un código de reserva. 
          .lg-hotspot.lg-hotspot--2.lg-mobile1-13(style="top: 49.5%; left: 1.2%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 13. 
                italic-strong Links 
              p Hace referencia a todos los links que pueda necesitar en la labor diaria, se anclan a este sistema para tener todo en la misma plataforma.
          .lg-hotspot.lg-hotspot--2.lg-mobile1-14(style="top: 94.4%; left: 1.2%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 14. 
                italic-strong Home 
              p Pantalla principal donde se encuentran los menús de navegación en el sistema.                                               
          


    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-9
        .tabla-a.color-acento-contenido
          table
            thead.amarillo
              tr
                th.py-3.casilla1
                  h3.mb-0 Información en la imagen
                th.py-3
                  h3.mb-0 Explicación
            tbody
              tr
                td
                  strong 1. Search PNR
                td En esta opción se puede buscar un código de reserva.
              tr
                td
                  strong 2. Retrieve
                td Este botón trae la información de la reserva luego de haberlo digitado en el recuadro amarillo.
              tr
                td 
                  strong 3. 00000C
                td Firma del usuario activo en esta pantalla de Amadeus.
              tr
                td 
                  strong 4. Office ID:BOGXX0000
                td Código de la oficina en la que se está trabajando.   
              tr
                td 
                  strong 5. Logout
                td Salir de Amadeus de forma segura.  
              tr
                td 
                  strong 6. Create NewPNR
                td Crear reserva con un flujo ya estipulado por el sistema.  
              tr
                td 
                  strong 7. Create New
                td En este menú se encuentran formas de crear una reserva, puede ser de manera manual o con un sistema de flujo de reserva que ayuda con un paso a paso.  
              tr
                td 
                  strong 8. Retrieve/Modify
                td En este menú se hace la búsqueda de un código de reserva, de un tiquete electrónico, de un documento valor emitido por la aerolínea.  
              tr
                td 
                  strong 9. Queue
                td Se utiliza para enviar información a la cola de verificación.  
              tr
                td 
                  strong 10. Settings
                td En este menú se actualiza la contraseña.  
              tr
                td 
                  strong 11. Calculate and Convert
                td En este menú se encuentran varias funciones complementarias que ayudan a tener información adicional como:
                  ul.mt-2.lista-ul--color.lista-check.mb-0
                    li.mb-0
                      i.fas.fa-check
                      | Convertidor de moneda.  
                    li.mb-0
                      i.fas.fa-check
                      | Tarifas de exceso de equipaje.
                    li.mb-0
                      i.fas.fa-check
                      | Calculador de millas.
                    li.mb-0
                      i.fas.fa-check
                      | Información de impuestos.    
                    li.mb-0
                      i.fas.fa-check
                      | Convertidor de hora (revisar hora local en otros países o ciudades).            
              tr
                td 
                  strong 12. Tools
                td En este menú hay varias funciones complementarias para la labor diaria:
                  ul.mt-2.lista-ul--color.lista-check.mb-0
                    li.mb-0
                      i.fas.fa-check
                      p.mb-0 
                        strong Amadeus Information System: 
                        | información del sistema.
                    li.mb-0
                      i.fas.fa-check
                      p.mb-0 
                        strong Sales Report: 
                        | revisar reporte de ventas.   
                    li.mb-0
                      i.fas.fa-check
                      p.mb-0 
                        strong Cryptic Window: 
                        | pantalla de comandos.
                    li.mb-0
                      i.fas.fa-check
                      p.mb-0 
                        strong Copy PNR: 
                        | crear una copia de un PNR.
                    li.mb-0
                      i.fas.fa-check
                      p.mb-0 
                        strong Flight Information: 
                        | información operacional de un vuelo. 
                    li.mb-0
                      i.fas.fa-check
                      p.mb-0
                        strong E ticket and Invoice Report: 
                        |  reporte de tiquetes y facturas emitidas. 
                    li.mb-0
                      i.fas.fa-check
                      p.mb-0 
                        strong Flight Loading List: 
                        | información detallada de un vuelo; sillas ocupadas, sillas vacías; pasajeros adultos, niños, etc.                
                    li.mb-0
                      i.fas.fa-check
                      p.mb-0 
                        strong Retrieve Passanger List: 
                        | lista de pasajeros confirmados en el vuelo. 
                    li.mb-0
                      i.fas.fa-check
                      p.mb-0 
                        strong Corporative Profile: 
                        | aplica para convenios corporativos y su información de viajes.
                    li.mb-0
                      i.fas.fa-check
                      p.mb-0 
                        strong Scratch Pad: 
                        | block de notas. 
                    li.mb-0
                      i.fas.fa-check
                      p.mb-0 
                        strong Timatic:
                        | herramienta utilizada para verificar documentación de viaje. 
                    li.mb-0
                      i.fas.fa-check
                      p.mb-0 
                        strong Minimum Connecting Time:
                        | tiempos mínimos de conexión entre un vuelo y otro.     
                    li.mb-0
                      i.fas.fa-check
                      p.mb-0 
                        strong PNR Recall:
                        | recordar un código de reserva.
              tr
                td 
                  strong 13. Links
                td Hace referencia a todos los links que pueda necesitar en la labor diaria, se anclan a este sistema para tener todo en la misma plataforma.  
              tr
                td 
                  strong 14. Home
                td Pantalla principal donde se encuentran los menús de navegación en el sistema.                      


    p.mb-4(data-aos="fade") Para empezar a manejar el sistema es necesario conocer una serie de entradas básicas que se requieren para funciones específicas y que son constantes para navegar correctamente en todas las opciones que ofrece 
      strong Amadeus
      |, esto es:

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-9
        .tabla-a.color-acento-contenido
          table
            thead.amarillo
              tr
                th.py-3.casilla1
                  h3.mb-0 Entrada
                th.py-3
                  h3.mb-0 Respuesta del sistema
            tbody
              tr
                td.text-center 
                  strong ET
                td.text-center Cierra y guarda la reserva.
              tr
                td.text-center 
                  strong ER
                td.text-center Cierra, guarda y despliega nuevamente la reserva.
              tr
                td.text-center 
                  strong IG
                td.text-center Se utiliza, en varios casos, para ver una reserva a la cual se le hizo modificaciones pero que se quieren deshacer, o no guardar, se cierra con esta entrada y la deja como estaba originalmente o en un código de reserva solo para revisar información puntual y salir de ella sin hacer ninguna modificación.
              tr
                td.text-center 
                  strong IR
                td.text-center Ignora las modificaciones y despliega la reserva nuevamente.
              tr
                td.text-center 
                  strong RT
                td.text-center Esta entrada tiene varios usos, uno de ellos es volver a la pantalla principal de la reserva.
                  br
                  br       
                  | Otro como comando para abrir un código de reserva.

    Separador


    // 1.1
    #t_1_1.titulo-segundo(data-aos="fade-right")
      .h2 1.1.  Proceso de reservas

    p.mb-4(data-aos="fade") En la creación de un PNR 
      italic (Passenger Name Record) 
      | o registro de información de viaje de un pasajero, es indispensable tener en cuenta sus características principales, entre esta información los códigos que están presentes en ella y los comandos que se requieren para poder crearla, como son:  

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-9
        .tabla-a.color-acento-contenido
          table
            thead.amarillo
              tr
                th.py-3
                  h3.mb-0 Campos para PNR
                th.py-3
                  h3.mb-0 Entradas Amadeus
            tbody
              tr
                td.text-center 
                  strong Ingreso al sistema
                td.text-center 
                  strong Firma y contraseña
              tr
                td.text-center 
                  strong Nombre del pasajero
                td.text-center 
                  strong NM 
              tr
                td.text-center 
                  strong Itinerario / Disponibilidad
                td.text-center 
                  strong AN
              tr
                td.text-center 
                  strong Teléfono
                td.text-center 
                  strong AP
              tr
                td.text-center 
                  strong Ticket Status / Estado de emisión
                td.text-center 
                  strong TL
              tr
                td.text-center 
                  strong Referencia
                td.text-center 
                  strong RF                
              
    AcordeonB.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta-naranja")
      .row.px-lg-5(titulo="Nombre en PNR")
        p.mb-4 Ingreso de los nombres de los pasajeros a la reserva, la constante en esta transacción es 
          strong NM1 
          | seguido del apellido, / y el nombre, se debe tener en cuenta el MR, MRS, MISS, MS no es un campo obligatorio, pero se procura colocar. Las abreviaciones CHD 
          italic (Child) 
          | e INF 
          italic (Infant) 
          | son obligatorias. A continuación, se presenta un ejemplo:
        .tabla-a.color-acento-contenido.tabla-blanca.mb-4
          table
            thead
              tr.p-0.m-0
                th.p-0.m-0
                th.p-0.m-0 
            tbody
              tr
                td.text-center Comando mandatorio+#pax+apellido/nombre+tipopax (ADT) si el pasajero es adulto
                td.text-center 
                  strong NM1
                  | AVILA/CLAUDIA MRS(ADT)
              tr
                td.text-center Pasajero niño (CHD)
                td.text-center 
                  strong NM1
                  | AVILA/CLAUDIA(CHD)
              tr
                td.text-center Adulto con infante mismo apellido (INF)
                td.text-center 
                  strong NM1
                  | AVILA/CLAUDIA(INF/MATIAS/12MAY19) 
              tr
                td.text-center Adulto con infante diferente apellido
                td.text-center 
                  strong NM1
                  | AVILA/CLAUDIA(INFMUNOZ/MATIAS/12MAY19)             
        ul.lista-ul--color.lista-check.mb-0
          li.mb-0
            i.fas.fa-check
            | Es importante señalar que el sistema no recibe la letra Ñ por lo cual debe reemplazarse con la N.
          li.mb-0
            i.fas.fa-check
            p.mb-0 Los nombres compuestos deben ir sin espacios, 
              strong NM1AVILADEMUNOZ/CLAUDIA(ADT).
          li.mb-0
            i.fas.fa-check
            | Los nombres y apellidos se deben ingresar como está en el documento.
      .row.px-lg-5(titulo="Contacto en PNR")
        p.mb-4 Se utiliza para ingresar la mayor cantidad de contactos de los pasajeros, es muy importante, ya que estos son los canales por los cuales la aerolínea puede contactar al cliente e informarle sobre novedades en los vuelos, cambios operacionales, vencimiento para la emisión del tiquete, etc. La constante para este elemento es 
          strong AP, 
          | seguido de la información como en el recuadro a continuación:
        .tabla-a.color-acento-contenido.tabla-blanca.mb-4
          table
            thead
              tr.p-0.m-0
                th.p-0.m-0
                th.p-0.m-0 
            tbody
              tr
                td.text-center Comando mandatorio+teléfono
                td.text-center 
                  strong AP
                  | 1112233
              tr
                td.text-center Comando mandatorio+teléfono (H)(Contacto de casa)
                td.text-center 
                  strong AP
                  | 1112233-
                  strong H
              tr
                td.text-center Comando mandatorio+teléfono (B)(Contacto de oficina)
                td.text-center 
                  strong AP
                  | 1112233-
                  strong B
              tr
                td.text-center Comando mandatorio+teléfono (M)(Contacto de móvil o celular)
                td.text-center 
                  strong AP
                  | 3111112233-
                  strong M
              tr
                td.text-center Comando mandatorio+teléfono (E) (Contacto de correo electrónico)
                td.text-center 
                  strong AP
                  | cmar@hotmail.com
                  strong E            
      .row.px-lg-5(titulo="Itinerario PNR, Vista de disponibilidad de vuelos")
        p.mb-4 Es el despliegue de vuelos en una ruta y fecha específicos, el sistema mostrará las diferentes opciones existentes para llevar al pasajero a su destino, la constante normalmente es 
          strong AN
          | ; sin embargo, puede variar dependiendo de lo que se solicite al sistema, por ejemplo:
        .tabla-a.color-acento-contenido.tabla-blanca.mb-4
          table
            thead
              tr.p-0.m-0
                th.p-0.m-0
                th.p-0.m-0 
            tbody
              tr
                td.text-center Comando mandatorio+ fecha de viaje (mes en inglés) +ciudad de origen + ciudad destino
                td.text-center 
                  strong AN
                  | 16DECBOGMDE        
              tr
                td.text-center Despliegue por hora de vuelo
                td.text-center 
                  strong AD
              tr
                td.text-center Despliegue por hora de llegada
                td.text-center 
                  strong AA
              tr
                td.text-center Despliegue por tiempo transcurrido entre hora de salida y llegada
                td.text-center 
                  strong AE            

    .row.tarjeta.tarjeta-suave.justify-content-center.py-4.mb-5
      .col-lg-10
        p.mb-4(data-aos="fade") El sistema, habitualmente, presenta la disponibilidad de vuelos en el siguiente orden:
        .row.justify-content-center.mb-4
          .col-lg-10
            .tabla-a.color-acento-contenido
              table
                thead.amarillo
                  tr
                    th.py-3.casilla1
                      h3.mb-0 Tipo de vuelo
                    th.py-3
                      h3.mb-0 Respuesta del sistema
                tbody
                  tr
                    td.text-center 
                      strong Sin paradas
                    td.text-center Sin paradas en el transcurso del vuelo.
                  tr
                    td.text-center 
                      strong Directo
                    td.text-center Vuelo con paradas intermedias, manteniendo el mismo # de vuelo y equipo de aeronave.
                  tr
                    td.text-center 
                      strong En conexión
                    td.text-center Vuelo con paradas intermedias con cambio de aeronave y # de vuelo.  
        

        .row.mb-5.justify-content-md-center
          .container.lg-hotspot2.col-lg-11.col-12
            .lg-container.lg-hotspot2
              figure
                img.lg-image(src="@/assets/curso/tema1-1-hotspot.jpg", alt="Información en el despliegue de una disponibilidad")
              .lg-hotspot.lg-hotspot--2.lg-mobile2-1(style="top: 23%; left: 27%;")  
                .lg-hotspot__button(@mouseover="mostrarIndicador = false")
                  .indicador--click(v-if="mostrarIndicador")
                .lg-hotspot__label.p-4
                  h4 
                    strong 1. AN20JUNBOGMIA
                  p Repetición de la entrada.
              .lg-hotspot.lg-hotspot--2.lg-mobile2-2(style="top: 26.5%; left: 41.5%;")  
                .lg-hotspot__button
                .lg-hotspot__label.p-4
                  h4 
                    strong 2. MIA MIAMI USFL
                  p Destino en código, nombre, código de país y de estado.   
              .lg-hotspot.lg-hotspot--1.lg-mobile2-3(style="top: 26.5%; left: 75%;")  
                .lg-hotspot__button
                .lg-hotspot__label.p-4
                  h4 
                    strong 3. 4
                  p Cantidad de días entre la fecha que se pide la disponibilidad y la fecha de viaje.
              .lg-hotspot.lg-hotspot--1.lg-mobile2-4(style="top: 26.5%; left: 76.4%;")  
                .lg-hotspot__button
                .lg-hotspot__label.p-4
                  h4 
                    strong 4. SU
                  p Día de la semana en inglés SU:SUNDAY:DOMINGO.
              .lg-hotspot.lg-hotspot--1.lg-mobile2-5(style="top: 26.5%; left: 78.6%;")  
                .lg-hotspot__button
                .lg-hotspot__label.p-4
                  h4 
                    strong 5. 20JUN
                  p Fecha de salida del vuelo.
              .lg-hotspot.lg-hotspot--1.lg-mobile2-6(style="top: 26.5%; left: 83.3%;")  
                .lg-hotspot__button
                .lg-hotspot__label.p-4
                  h4 
                    strong 6. 0000
                  p Hora de salida del vuelo, si no se especifica una hora el sistema automáticamente inicia la búsqueda desde las 00:00.
              .lg-hotspot.lg-hotspot--2.lg-mobile2-7(style="top: 33.3%; left: 27.5%;")  
                .lg-hotspot__button
                .lg-hotspot__label.p-4
                  h4 
                    strong 7. 1
                  p Número de la línea.
              .lg-hotspot.lg-hotspot--2.lg-mobile2-8(style="top: 33.3%; left: 30%;")  
                .lg-hotspot__button
                .lg-hotspot__label.p-4
                  h4 
                    strong 8. AV006
                  p Código de la aerolínea y número de vuelo.   
              .lg-hotspot.lg-hotspot--2.lg-mobile2-9(style="top: 33.3%; left: 36.7%;")  
                .lg-hotspot__button
                .lg-hotspot__label.p-4
                  h4 
                    strong 9. C4 J4 Y9 B9 M9 H9 Q9 V9
                  p Clase de servicio y código de status o sillas disponibles. 
              .lg-hotspot.lg-hotspot--1.lg-mobile2-10(style="top: 33.3%; left: 53.5%;")  
                .lg-hotspot__button
                .lg-hotspot__label.p-4
                  h4 
                    strong 10. BOG 1 MIA
                  p Código del aeropuerto de salida y el número de la terminal del que sale el vuelo y código de la ciudad destino.        
              .lg-hotspot.lg-hotspot--1.lg-mobile2-11(style="top: 33.3%; left: 63%;")  
                .lg-hotspot__button
                .lg-hotspot__label.p-4
                  h4 
                    strong 11. 0750
                  p Hora de salida del vuelo (horario 24 horas). 
              .lg-hotspot.lg-hotspot--1.lg-mobile2-12(style="top: 33.3%; left: 69.2%;")  
                .lg-hotspot__button
                .lg-hotspot__label.p-4
                  h4 
                    strong 12. 1235
                  p Hora de llegada al destino (hora local).
              .lg-hotspot.lg-hotspot--1.lg-mobile2-13(style="top: 33.3%; left: 74.2%;")  
                .lg-hotspot__button
                .lg-hotspot__label.p-4
                  h4 
                    strong 13. E0
                  p 
                    strong E: 
                    | Tiquete electrónico.
                    strong 0: 
                    | Indicador de paradas.   
              .lg-hotspot.lg-hotspot--1.lg-mobile2-14(style="top: 33.3%; left: 76.5%;")  
                .lg-hotspot__button
                .lg-hotspot__label.p-4
                  h4 
                    strong 14. 330
                  p Código del equipo de aeronave que opera la ruta, en este caso AirBus330.
              .lg-hotspot.lg-hotspot--1.lg-mobile2-15(style="top: 33.3%; left: 83.5%;")  
                .lg-hotspot__button
                .lg-hotspot__label.p-4
                  h4 
                    strong 15. 3:45
                  p Duración del vuelo.


        .row.justify-content-center.mb-4
          .col-lg-10.tarjeta-borde-morada.p-4
            p.text-center.mb-0 En la imagen anterior hay información en el despliegue de una disponibilidad: se solicita disponibilidad para el día 20 de junio en la ruta Bogotá – Miami.

        .row.justify-content-center
          .col-lg-10
            .tabla-a.color-acento-contenido
              table
                thead.amarillo
                  tr
                    th.py-3.casilla1
                      h3.mb-0 Información en la imagen
                    th.py-3
                      h3.mb-0 Explicación
                tbody
                  tr
                    td.text-center 
                      strong 1. **AN20JUNBOGMIA
                    td.text-center Repetición de la entrada.
                  tr
                    td.text-center 
                      strong 2. MIA MIAMI USFL
                    td.text-center Destino en código, nombre, código de país y de estado.
                  tr
                    td.text-center 
                      strong 3.4
                    td.text-center Cantidad de días entre la fecha que se pide la disponibilidad y la fecha de viaje.
                  tr
                    td.text-center 
                      strong 4. SU
                    td.text-center Día de la semana en inglés SU:SUNDAY:DOMINGO.
                  tr
                    td.text-center 
                      strong 5. 20JUN
                    td.text-center Fecha de salida del vuelo.
                  tr
                    td.text-center 
                      strong 6. 0000
                    td.text-center Hora de salida del vuelo, si no se especifica una hora el sistema automáticamente inicia la búsqueda desde las 00:00.
                  tr
                    td.text-center 
                      strong 7. 1
                    td.text-center Número de la línea.
                  tr
                    td.text-center 
                      strong 8. AV006
                    td.text-center Código de la aerolínea y número de vuelo.
                  tr
                    td.text-center 
                      strong 9. C4 J4 Y9 B9 M9 H9 Q9 V9
                    td.text-center Clase de servicio y código de status o sillas disponibles.
                  tr
                    td.text-center 
                      strong 10. BOG 1 MIA
                    td.text-center Código del aeropuerto de salida y el número de la terminal del que sale el vuelo y código de la ciudad destino.
                  tr
                    td.text-center 
                      strong 11. 0750
                    td.text-center Hora de salida del vuelo (horario 24 horas).
                  tr
                    td.text-center 
                      strong 12. 1235
                    td.text-center Hora de llegada al destino (hora local).
                  tr
                    td.text-center 
                      strong 13. E0
                    td.text-center E: Tiquete Electrónico 0: indicador de paradas.
                  tr
                    td.text-center 
                      strong 14. 330
                    td.text-center Código del equipo de aeronave que opera la ruta, en este caso AirBus330.
                  tr
                    td.text-center 
                      strong 15. 3:45
                    td.text-center Duración del vuelo.                            

    p.mb-4(data-aos="fade") En un despliegue de disponibilidad también se pueden encontrar vuelos que representan acuerdos entre aerolíneas. 
      strong.etiqueta Están demarcados en el sistema así:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Los vuelos en Code Share o en español en código compartido" :icono="require('@/assets/curso/tema1-1-pestana1.svg')")
        .row.justify-content-center
          .col-lg-10
            h5 Los vuelos en Code Share o en español en código compartido
            p.mb-4 La compañía que aparece en el despliegue es la que vende los cupos, y se llama 
              italic Marketing Carrier, 
              | pero el vuelo es operado por otra aerolínea y se llama 
              italic Operating Carrier. 
              | En el sistema se identifica por los dos puntos ( : ).
            figure
              img(src="@/assets/curso/tema1-1-pestana1.jpg", alt="Los vuelos en Code Share o en español en código compartido")
      .py-4.py-md-5(titulo="*Asterisco" :icono="require('@/assets/curso/tema1-1-pestana2.svg')")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h5 *Asterisco
            p Existe un acuerdo de 
              italic Leased / Blocked Space 
              | o espacios bloqueados, que es cuando una línea aérea arrienda o alquila cierta cantidad de asientos de su vuelo a una o más compañías. La compañía que cede los lugares se denomina 
              italic Operating Carrier 
              | y la que toma los espacios en alquiler, 
              italic Marketing Carrier 
              | y se identifica con los dos puntos que preceden al código de línea aérea. Cada línea aérea muestra su vuelo en los despliegues y controla sus lugares desde su sistema de inventario, pero en realidad es un solo vuelo el que opera.
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-1-pestana2.png', alt='Imagen decorativa')
      .py-4.py-md-5(titulo="Acuerdo interlínea" :icono="require('@/assets/curso/tema1-1-pestana3.svg')")
        .row.justify-content-center
          .col-lg-10
            h5 Acuerdo interlínea
            p.mb-4 Es un acuerdo comercial entre dos aerolíneas la cual permite vender segmentos de la otra, manteniendo su propio código y permitiéndole identificar fácilmente a la compañía operadora.
            figure
              img(src="@/assets/curso/tema1-1-pestana3.jpg", alt="Acuerdo interlínea")

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .bloque-texto-a.color-acento-contenido.p-4 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4
                h4 Reserva de segmento de Vuelo
                p.mb-0 Es la forma en que le solicita al sistema en qué vuelo y cuántos cupos hay, la constante es 
                  strong SS 
                  | más una serie de información que depende de lo que requiera el cliente, se puede solicitar de esta manera siempre que se mantenga la misma clase para todo el itinerario:
            .col-lg-4
              ul.lista-ul--color.lista-circulo
                li.mb-0
                  i.fas.fa-circle
                  p.mb-0
                    strong SS Código de transacción.
                li.mb-0
                  i.fas.fa-circle
                  p.mb-0
                    strong 1 Cantidad de lugares.   
                li.mb-0
                  i.fas.fa-circle
                  p.mb-0
                    strong Y Clase de servicio. 
                li.mb-0
                  i.fas.fa-circle
                  p.mb-0
                    strong 2 Número de línea a partir del despliegue.       

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-9
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr.p-0.m-0
                th.p-0.m-0
                th.p-0.m-0 
            tbody
              tr
                td.text-center Comando mandatorio+# de asientos+ clase de servicio+ # de segmento.
                td.text-center 
                  strong SS
                  | 1
                  strong Y
                  | 1

    p.mb-4(data-aos="fade") Los estatus de un cupo pueden variar según sea el caso, el estatus puede cambiar después de cerrar la reserva según la disponibilidad del vuelo. Por ejemplo:

    .row.justify-content-center.mb-4(data-aos="fade-up")
      .col-lg-9
        .tabla-a.color-acento-contenido
          table
            thead.amarillo
              tr
                th.py-3.casilla1
                  h3.mb-0 Código
                th.py-3
                  h3.mb-0 Status
                th.py-3.casilla1
                  h3.mb-0 Respuesta de sistema  
            tbody
              tr
                td.text-center 
                  strong SS
                td.text-center Clase disponible
                td.text-center HK
              tr
                td.text-center 
                  strong LK
                td.text-center Clase disponible
                td.text-center HK
              tr
                td.text-center 
                  strong HK
                td.text-center Clase disponible y confirmado
                td.text-center HK
              tr
                td.text-center 
                  strong RR
                td.text-center Clase disponible y reconfirmado
                td.text-center RR
              tr
                td.text-center 
                  strong LL
                td.text-center Lista de espera
                td.text-center HL
              tr
                td.text-center 
                  strong SA
                td.text-center 
                  p 
                    italic Stand by
                td.text-center HN          
              tr
                td.text-center 
                  strong NN
                td.text-center A solicitar
                td.text-center HL
              tr
                td.text-center 
                  strong HL
                td.text-center Lista de espera
                td.text-center HL
              tr
                td.text-center 
                  strong DK
                td.text-center Espacio confirmado
                td.text-center HK
              tr
                td.text-center 
                  strong DW
                td.text-center Lista de espera
                td.text-center HL      

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        figure
          img(src="@/assets/curso/tema1-1-imagen.jpg", alt="ruta Bogotá – Medellín")

    .row.justify-content-center.mb-5
      .col-lg-8.tarjeta-borde-morada.p-4
        p.text-center.mb-0 En la imagen anterior se observa que en la ruta Bogotá – Medellín – Bogotá, el estatus de los cupos es HK, es decir, confirmado, en este ejemplo está HK1 porque la reserva es solo para 1 persona, Claudia Ávila, sin embargo, si fueran más, este número variará según el número de pasajeros. 

    p.mb-4(data-aos="fade") En algunos casos puntuales es necesario utilizar segmentos informativos tales como:

    .row.mb-3
      .col-lg-8.mb-4(data-aos="fade-right")
        .row.tarjeta-borde-naranja.p-4.mb-3.justify-content-center
          .col-lg-2.col-5.mb-3
            img(src="@/assets/curso/tema1-1-icono1.svg", alt="Arribo desconocido ARNK (Arrival Unknown)")
          .col-lg-10
            h5 Arribo desconocido ARNK (Arrival Unknown)
            p Este segmento indica que no se conoce la forma ni la fecha en que el pasajero se trasladó desde la ciudad de llegada del segmento previo hasta la ciudad de partida del segmento siguiente, podría ser que el pasajero se desplazó por sus propios medios auto, tren, bus, etc.
            p.mb-0 El ejemplo más común es cuando el pasajero toma un tiquete Bogotá-Miami/Orlando-Bogotá, en este ejemplo hay un ARNK ya que en la mayoría de los casos las personas alquilan coche para llegar de Miami a Orlando y tomar el vuelo de regreso.
        .row.tarjeta-borde-naranja.p-4.justify-content-center
          .col-lg-2.col-5.mb-3
            img(src="@/assets/curso/tema1-1-icono2.svg", alt="Arribo conocido")
          .col-lg-10
            h5 Arribo conocido
            p.mb-0 Son los vuelos que forman parte del itinerario, pero no han sido reservados a través de Amadeus razón por la cual se ingresará al sistema como un elemento OSI. 
      .col-lg-4.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1-1-imagen1.png", alt="Imagen decorativa")

    p.mb-4(data-aos="fade") Estos segmentos de información no son obligatorios, pero aseguran que el PNR contenga la mayor cantidad de detalles sobre el itinerario del pasajero, como los que se muestran a continuación:

    TabsC.color-acento-contenido.mb-5(data-aos="fade-down")
      .py-3.py-md-4.px-lg-5(titulo="Tiempo límite de la reserva")
        h5 Tiempo límite de la reserva
        p.mb-4 Hace referencia al tiempo máximo que tiene la reserva para comprar el tiquete, puede ser: TL (tiempo límite); XL (cancelación automática), OK (pagado), como se ejemplifica a continuación:
        .row.justify-content-center.mb-4(data-aos="fade-down")
          .col-lg-9
            .tabla-a.color-acento-contenido.mb-4
              table
                thead
                  tr.p-0.m-0
                    th.p-0.m-0
                    th.p-0.m-0 
                tbody
                  tr
                    td.text-center Código mandatorio+indicador+fecha
                    td.text-center 
                      strong TKTL
                      | 16DEC
                  tr
                    td.text-center Código mandatorio indicador (billete pago)
                    td.text-center 
                      strong TKOK
      .py-3.py-md-4.px-lg-5(titulo="Contacto de referencia")
        h5 Contacto de referencia
        p.mb-4 En este campo se referencia el nombre de la persona que ha solicitado la creación, modificación o cancelación de una reserva. La constante es RF aparece en la parte activa de la reserva así:
        .row.justify-content-center.mb-4(data-aos="fade-down")
          .col-lg-9
            .tabla-a.color-acento-contenido.mb-4
              table
                thead
                  tr.p-0.m-0
                    th.p-0.m-0
                    th.p-0.m-0 
                tbody
                  tr
                    td.text-center Código mandatorio + nombre quien hace la reserva o alguna modificación
                    td.text-center 
                      strong RF
                      | ClaudiaA
      .py-3.py-md-4.px-lg-5(titulo="Otros campos en el PNR")
        h5 Otros campos en el PNR
        p.mb-4 Estos campos son para agregar notas o información relevante a la reserva, se puede colocar de dos maneras:
        ul.lista-ul--color.lista-circulo.px-lg-4
          li
            i.fas.fa-circle
            p
              strong OSI: 
              | son notas que se envían a una línea aérea específica o a todas las compañías presentes en el itinerario. La información transmitida no requiere respuesta o acción por parte de las líneas aéreas, es más una información importante de carácter informativo. La constante es 
              strong OS
              |, el código de una línea aérea específica o YY (en caso de que la información se quiera enviar a todas las aerolíneas reservadas en el PNR) más el mensaje que se requiera transmitir.
          li
            i.fas.fa-circle
            p
              strong REMARK: 
              | son notas que se envían para uso interno, estas solo las pueden visualizar las líneas aéreas que manejen Amadeus como sistema de reservas “System Users”. La constante es 
              strong RM 
              | seguido del mensaje a transmitir.
        .row.justify-content-center.mb-4(data-aos="fade-down")
          .col-lg-9
            .tabla-a.color-acento-contenido.mb-4
              table
                thead
                  tr.p-0.m-0
                    th.p-0.m-0
                    th.p-0.m-0 
                tbody
                  tr
                    td.text-center 
                      strong OS 
                      | + mensaje
                    td.text-center 
                      strong OS 
                      | PAX VIP MIEMBRO JUNTA DIRECTIVA  
                  tr
                    td.text-center 
                      strong RM 
                      | + mensaje
                    td.text-center 
                      strong RM 
                      | PAX SS MAXIMA COLABORACION ADT MAYOR                  
             
    p.mb-4(data-aos="fade") Ejemplo de cómo se ve una reserva ya creada en Amadeus:

    .row.mb-5.justify-content-md-center
      .container.lg-hotspot3.col-lg-11.col-12
        .lg-container.lg-hotspot3
          figure
            img.lg-image(src="@/assets/curso/tema1-1-hotspot2.jpg", alt="Ejemplo de cómo se ve una reserva ya creada en Amadeus")
          .lg-hotspot.lg-hotspot--2.lg-mobile3-1(style="top: 35%; left: 26%;")  
            .lg-hotspot__button(@mouseover="mostrarIndicador = false")
              .indicador--click(v-if="mostrarIndicador")
            .lg-hotspot__label.p-4
              h4 
                strong 1. RP/BOGXX0000/BOGXX0000
              p Código de la oficina u office ID donde se creó la reserva.
          .lg-hotspot.lg-hotspot--1.lg-mobile3-2(style="top: 35%; left: 57.5%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 2. 0C/GS
              p Código de la firma o usuario que creó la reserva.  
          .lg-hotspot.lg-hotspot--1.lg-mobile3-3(style="top: 35%; left: 64%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 3. 16JUN21/2357Z
              p Fecha y hora en la que se creó la reserva, aparece con una Z al final de la hora, ya que es hora zulú, para la hora colombiana se resta 5 horas de este horario y esa es la hora que quedó realizada.
          .lg-hotspot.lg-hotspot--1.lg-mobile3-4(style="top: 35%; left: 79.2%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 4. 36VM65
              p Código de reserva, récord localizador o PNR. 
          .lg-hotspot.lg-hotspot--1.lg-mobile3-5(style="top: 39.3%; left: 30%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 5. AVILA/CLAUDIA
              p Apellidos y nombres del pasajero.
          .lg-hotspot.lg-hotspot--2.lg-mobile3-6(style="top: 43.3%; left: 30.5%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 6. AV8426
              p Aerolínea y número de vuelo del vuelo de ida.  
          .lg-hotspot.lg-hotspot--2.lg-mobile3-7(style="top: 43.3%; left: 37.2%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 7. S
              p Clase en la que se reservó el cupo.
          .lg-hotspot.lg-hotspot--2.lg-mobile3-8(style="top: 43.3%; left: 39.2%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 8. 15JUL
              p Fecha de viaje del segmento de IDA.      
          .lg-hotspot.lg-hotspot--2.lg-mobile3-9(style="top: 43.3%; left: 44.7%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 9. 4
              p Día de la semana en número (jueves).        
          .lg-hotspot.lg-hotspot--2.lg-mobile3-10(style="top: 43.3%; left: 46.6%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 10. BOGMDE
              p Hace referencia a la ruta de ese trayecto, en este caso Bogotá-Medellín.             
          .lg-hotspot.lg-hotspot--1.lg-mobile3-11(style="top: 43.3%; left: 53%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 11. HK1
              p Es el estatus del cupo en el vuelo, en este caso confirma 1 cupo.
          .lg-hotspot.lg-hotspot--1.lg-mobile3-12(style="top: 43.3%; left: 65.2%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 12. 0500
              p Hora de salida del vuelo.
          .lg-hotspot.lg-hotspot--1.lg-mobile3-13(style="top: 43.3%; left: 69.9%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 13. 0603
              p Hora de llegada del vuelo a destino (HORA LOCAL).        
          .lg-hotspot.lg-hotspot--2.lg-mobile3-14(style="top: 47.4%; left: 30.5%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 14. AV8435
              p Aerolínea y número de vuelo del vuelo de regreso.
          .lg-hotspot.lg-hotspot--2.lg-mobile3-15(style="top: 47.4%; left: 37.2%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 15. S
              p Clase en la que se reservó el cupo.
          .lg-hotspot.lg-hotspot--2.lg-mobile3-16(style="top: 47.4%; left: 39.2%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 16. 20JUL
              p Fecha de viaje del segmento de REGRESO.     
          .lg-hotspot.lg-hotspot--2.lg-mobile3-17(style="top: 47.4%; left: 44.7%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 17. 2
              p Día de la semana en número (martes).      
          .lg-hotspot.lg-hotspot--2.lg-mobile3-18(style="top: 47.4%; left: 46.6%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 18. MDEBOG
              p Hace referencia a la ruta de ese trayecto, en este caso Medellín-Bogotá.
          .lg-hotspot.lg-hotspot--1.lg-mobile3-19(style="top: 47.4%; left: 53%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 19. HK1
              p Es el estatus del cupo en el vuelo, en este caso confirma 1 cupo.
          .lg-hotspot.lg-hotspot--1.lg-mobile3-20(style="top: 47.4%; left: 65.2%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 20. 0618
              p Hora de salida del vuelo.
          .lg-hotspot.lg-hotspot--1.lg-mobile3-21(style="top: 47.4%; left: 69.9%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 21. 0710
              p Hora de llegada del vuelo a destino.
          .lg-hotspot.lg-hotspot--1.lg-mobile3-22(style="top: 51.8%; left: 29.8%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 22. AP H8077894-H
              p Contacto de casa del pasajero.
          .lg-hotspot.lg-hotspot--2.lg-mobile3-23(style="top: 55.9%; left: 32.8%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 23. 3123000001-M
              p Contacto móvil del pasajero.
          .lg-hotspot.lg-hotspot--2.lg-mobile3-24(style="top: 60.1%; left: 29.8%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 24.TKOK16JUN/BOGXX0000//ETAV
              p Tiempo límite de la reserva, en este caso TKOK porque el cliente va a hacer la compra del tiquete.           
          .lg-hotspot.lg-hotspot--2.lg-mobile3-25(style="top: 64.4%; left: 29.8%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 25. SSR WCHR AV HK1/S2
              p Servicio especial de Silla de Ruedas HK1: servicio confirmado, S2: para el segmento 2 de la reserva, es decir, la ruta BOGMDE.
          .lg-hotspot.lg-hotspot--2.lg-mobile3-26(style="top: 68.5%; left: 29.8%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 26. SSR WCHR AV HK1/S3
              p Servicio especial de Silla de Ruedas HK1: servicio confirmado, S2: para el segmento 2 de la reserva, es decir, la ruta MDEBOG.
          .lg-hotspot.lg-hotspot--2.lg-mobile3-27(style="top: 77.1%; left: 29.8%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 27. FE PAX /C1-2 NONREFUNDABLE/ CHANGESNOT PERMITTED /NO ENDORSE/S2-3
              p Endosos del tiquete con algunas restricciones de la tarifa C1-2: cupón 1-2 NO REFUNDABLE (no reembolsable) /CHANGESNOTPERMITED (cambios no permitidos)/ NOENDORSE (no endosable)
          .lg-hotspot.lg-hotspot--2.lg-mobile3-28(style="top: 39.3%; left: 27.2%;")  
            .lg-hotspot__button
            .lg-hotspot__label.p-4
              h4 
                strong 28. 1-11
              p Líneas de información de la reserva.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-9
        .tabla-a.color-acento-contenido
          table
            thead.amarillo
              tr
                th.py-3.casilla1
                  h3.mb-0 Información en la imagen
                th.py-3
                  h3.mb-0 Explicación
            tbody
              tr
                td
                  strong 1. RP/BOGXX0000/BOGXX0000
                td Código de la oficina u office ID donde se creó la reserva.
              tr
                td
                  strong 2. 0C/GS
                td Código de la firma o usuario que creó la reserva.
              tr
                td
                  strong 3.16JUN21/2357Z
                td Fecha y hora en la que se creó la reserva, aparece con una Z al final de la hora, ya que es hora zulú, para la hora colombiana se resta 5 horas de este horario y esa es la hora que quedó realizada. 
              tr
                td
                  strong 4. 36VM65
                td Código de reserva, récord localizador o PNR.
              tr
                td
                  strong 5. AVILA/CLAUDIA
                td Apellidos y nombres del pasajero.
              tr
                td
                  strong 6. AV8426
                td Aerolínea y número de vuelo del vuelo de ida.
              tr
                td
                  strong 7. S
                td Clase en la que se reservó el cupo.
              tr
                td
                  strong 8. 15JUL
                td Fecha de viaje del segmento de IDA.
              tr
                td
                  strong 9. 4
                td Día de la semana en número (jueves).
              tr
                td
                  strong 10. BOGMDE
                td Hace referencia a la ruta de ese trayecto, en este caso Bogotá-Medellín.
              tr
                td
                  strong 11. HK1
                td Es el estatus del cupo en el vuelo, en este caso confirma 1 cupo.
              tr
                td
                  strong 12. 0500
                td Hora de salida del vuelo.
              tr
                td
                  strong 13. 0603
                td Hora de llegada del vuelo a destino (HORA LOCAL).
              tr
                td
                  strong 14. AV8435
                td Aerolínea y número de vuelo del vuelo de regreso.
              tr
                td
                  strong 15. S
                td Clase en la que se reservó el cupo.
              tr
                td
                  strong 16. 20JUL
                td Fecha de viaje del segmento de REGRESO.
              tr
                td
                  strong 17. 2
                td Día de la semana en número (martes).
              tr
                td
                  strong 18. MDEBOG
                td Hace referencia a la ruta de ese trayecto, en este caso Medellín-Bogotá.
              tr
                td
                  strong 19. HK1
                td Es el estatus del cupo en el vuelo, en este caso confirma 1 cupo.
              tr
                td
                  strong 20. 0618
                td Hora de salida del vuelo.
              tr
                td
                  strong 21. 0710
                td Hora de llegada del vuelo a destino.
              tr
                td
                  strong 22. AP H8077894-H
                td Contacto de casa del pasajero.
              tr
                td
                  strong 23. 3123000001-M
                td Contacto móvil del pasajero.
              tr
                td
                  strong 24.TKOK16JUN/BOGXX0000//ETAV
                td Tiempo límite de la reserva, en este caso TKOK porque el cliente va a hacer la compra del tiquete.
              tr
                td
                  strong 25. SSR WCHR AV HK1/S2
                td Servicio especial de Silla de Ruedas HK1: servicio confirmado, S2: para el segmento 2 de la reserva, es decir, la ruta BOGMDE.
              tr
                td
                  strong 26. SSR WCHR AV HK1/S3
                td Servicio especial de Silla de Ruedas HK1: servicio confirmado, S2: para el segmento 2 de la reserva, es decir, la ruta MDEBOG.
              tr
                td
                  strong 27. FE PAX /C1-2 NONREFUNDABLE/ CHANGESNOT PERMITTED /NO ENDORSE/S2-3
                td Endosos del tiquete con algunas restricciones de la tarifa C1-2: cupón 1-2 NO REFUNDABLE (no reembolsable) /CHANGESNOTPERMITED (cambios no permitidos)/ NOENDORSE (no endosable)
              tr
                td
                  strong 28. 1-11
                td Líneas de información de la reserva.            

      Separador        


    // 1.2
    #t_1_2.titulo-segundo(data-aos="fade-right")
      .h2 1.2.	Solicitud de servicios especiales

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .bloque-texto-a.color-acento-contenido.p-4 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4
                p Las compañías aéreas ofrecen a los pasajeros opciones de servicios especiales que hacen el viaje más fácil o placentero para ellos, o simplemente requieren asistencia de algún modo. Se puede utilizar para alguna comida especial, asistencia en silla de ruedas, transporte de mascotas tanto en cabina como en bodega, etc.
            .col-lg-4
              img(src="@/assets/curso/tema1-2-imagen.svg", alt="Imagen decorativa")
  
    p.mb-4(data-aos="fade") Existen gran variedad de servicios, dentro de los más solicitados tenemos:   

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-9
        .tabla-a.color-acento-contenido
          table
            thead.amarillo.text-center
              tr
                th.py-3
                  h3.mb-0 (SSR) Servicios especiales
                th.py-3
                  h3.mb-0 Código del servicio
            tbody.text-center
              tr
                td Pasajero invidente
                td
                  strong BLND
              tr
                td Equipaje frágil
                td
                  strong FRAG
              tr
                td Silla de ruedas
                td
                  strong WCHC
              tr
                td Comida diabéticos
                td
                  strong DBML
              tr
                td Comida vegetariana
                td
                  strong VGML
              tr
                td Comida baja en colesterol
                td
                  strong LOCH
              tr
                td Comida baja en Calorías
                td
                  strong LCAL                        

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-9
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr.p-0.m-0
                th.p-0.m-0
                th.p-0.m-0 
            tbody
              tr
                td.text-center Servicio especial
                td.text-center 
                  strong SR+ 
                  | Código del servicio/ # de pasajero
              tr
                td.text-center DBML (comida diabética)
                td.text-center 
                  strong SR DBML/P1
              tr
                td.text-center Explicación
                td.text-center Solicitando comida para diabéticos.    

    .row.justify-content-center.mb-5
      .col-lg-8.tarjeta-borde-morada.p-4
        p.text-center.mb-0 En este ejemplo, la línea 7 – 8 indica que este pasajero solicitó una silla de ruedas hasta la puerta del avión, tanto para el vuelo BOGOTÁ-MEDELLÍN como para el regreso MEDELLÍN-BOGOTÁ. 

    .row.justify-content-center
      .col-lg-10
        figure(data-aos="fade")
          img(src="@/assets/curso/tema1-2-figura.jpg", alt="Pantallazo amadeus")

    Separador  


    // 1.3
    #t_1_3.titulo-segundo(data-aos="fade-right")
      .h2 1.3.	Modificaciones y Cancelaciones

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-naranja.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-5.mb-4.mb-lg-0
              h4.mb-0 Dentro de las opciones que muestra Amadeus, se tiene la posibilidad de modificar información dentro de una reserva de acuerdo con solicitud del cliente, por ello se puede modificar:
            .col-lg-7
              .bloque-texto-a__texto.p-4
                ul.lista-ul--color.lista-circulo.mb-0
                  li.mb-0
                    i.fas.fa-circle
                    | Itinerario (ruta, hora, fecha).
                  li.mb-0
                    i.fas.fa-circle
                    | Datos de contacto.
                  li.mb-0
                    i.fas.fa-circle
                    | Notas dentro de la reserva.
                  li.mb-0
                    i.fas.fa-circle
                    | Clase en la que se reserva o si es en la cabina del avión.
                  li.mb-0
                    i.fas.fa-circle
                    | Nombre de pasajero.

    p.mb-4(data-aos="fade") Para esto se debe ingresar la siguiente entrada dependiendo de la modificación:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-9
        .tabla-a.color-acento-contenido
          table
            thead.amarillo.text-center
              tr
                th.py-3
                  h3.mb-0 Entrada de modificación
                th.py-3
                  h3.mb-0 Respuesta del sistema
            tbody.text-center
              tr
                td 
                  strong 5 (línea en la reserva) /OK
                td
                  strong Cambio el estatus a OK.
              tr
                td 
                  strong 4 (línea en la reserva) BOG 2238464-H
                td
                  strong Cambia el contacto en la reserva.
              tr
                td 
                  strong 1/1AVILARAMIREZ/CLAUDIAMARCELA
                td
                  strong Cambia el nombre en la reserva.       

    p.mb-4(data-aos="fade") Después de realizar cualquier modificación dentro de la reserva, se debe ingresar el elemento 
      strong recibido 
      | de 
      strong RF 
      | indicando el nombre de la persona que ha solicitado la modificación, antes de dar el fin de transacción ET o ER. 


    .row.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-naranja.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-5.mb-4.mb-lg-0
              h4.mb-0 Para la cancelación de un elemento de la reserva solo se utiliza la entrada XE seguida del número de la línea a eliminar del PNR.
            .col-lg-7
              .bloque-texto-a__texto.p-4
                ul.lista-ul--color.lista-circulo.mb-0
                  li.mb-0
                    i.fas.fa-circle
                    p.mb-0
                      strong XE4: 
                      | Elimina la línea 4 de la reserva.
                  li.mb-0
                    i.fas.fa-circle
                    p.mb-0
                      strong X1-4: 
                      | Elimina desde el elemento 1 al 4.
                  li.mb-0
                    i.fas.fa-circle
                    p.mb-0
                      strong X2;4: 
                      | Elimina el elemento 2 y el 4.
    
    p.mb-4(data-aos="fade")  En este ejemplo, se realiza un cambio en el contacto de la línea 4.

    .row.justify-content-center.mb-5
      .col-lg-10
        figure(data-aos="fade")
          img(src="@/assets/curso/tema1-3-figura.jpg", alt="Pantallazo amadeus")

    p.mb-4(data-aos="fade") 
      strong ENTRADA: 4/BOG8113930-H

    .row.justify-content-center
      .col-lg-10
        figure(data-aos="fade")
          img(src="@/assets/curso/tema1-3-figura2.jpg", alt="Pantallazo amadeus")

    Separador


    // 1.4
    #t_1_4.titulo-segundo(data-aos="fade-right")
      .h2 1.4.	Historial de un PNR (Passenger Name Record)

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-naranja.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-5.mb-4.mb-lg-0
              h4.mb-0 Cada código de reserva lleva un histórico de su información, el registro desde la creación de la misma y de las modificaciones y cancelaciones que se hayan realizado. 
            .col-lg-7
              .bloque-texto-a__texto.p-4
                p En la historia del PNR el sistema registra lo siguiente:
                ul.lista-ul--color.lista-circulo.mb-0
                  li.mb-0
                    i.fas.fa-circle
                    | Las transacciones realizadas por los agentes desde su inicio.
                  li.mb-0
                    i.fas.fa-circle
                    | Las transacciones de los proveedores, si aplica.
                  li.mb-0
                    i.fas.fa-circle
                    | Las transacciones manuales, automáticas de colas y emisión de documentos.


    p.mb-4(data-aos="fade") Cada vez que un PNR es modificado, la línea de encabezamiento muestra la fecha y la hora Z (GMT) en que la modificación fue realizada.

    p.mb-4(data-aos="fade") La entrada para visualizar la historia de reserva es: 
      strong RH
      | , el sistema responde con una serie de información que se lee de la siguiente manera:

    .row.justify-content-center
      .col-lg-10
        ul.lista-ul--color.lista-circulo
          li
            i.fas.fa-circle
            | En la primera línea aparece la información como en la pantalla principal de la reserva.
          li
            i.fas.fa-circle
            | Cada transacción dentro de la reserva está numerada, el número de cada elemento indica: cuándo se realizó la actividad y reciben el nombre de actualización: 000 si fueron efectuadas en el momento de la creación de la reserva original, 001 después de la primera recuperación del PNR 002 después de la segunda recuperación, y así sucesivamente.
          li
            i.fas.fa-circle
            strong ON
            |, es el código que indica los nombres originales ingresados en la reserva.
          li
            i.fas.fa-circle
            strong OS
            |, código asignado a los segmentos de vuelo ingresados originalmente en la reserva.
          li
            i.fas.fa-circle
            strong SA
            |, código de elementos adicionados.
          li
            i.fas.fa-circle
            strong SX
            |, código de elementos cancelados. 
          li.mb-4
            i.fas.fa-circle
            | Otros códigos para entender la historia de una reserva son los siguientes:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-9
        .tabla-a.color-acento-contenido
          table
            thead.amarillo.text-center
              tr
                th.py-3.casilla1
                  h3.mb-0 Entrada
                th.py-3
                  h3.mb-0 Respuesta del sistema
            tbody.text-center
              tr
                td 
                  strong RH
                td
                  strong Historia de la reserva sin la información de Queues.
              tr
                td 
                  strong RH/ALL
                td
                  strong Historia de la reserva completa.
              tr
                td 
                  strong RHQ
                td
                  strong Historial de Queues en la reserva.  
              tr
                td 
                  strong RT
                td
                  p
                    strong Parte que está activa en ese código de reserva / refrescar o regresar a reserva.
                  p.mb-0
                    strong Abrir un código de reserva, la constante RT seguido del código de reserva para poder desplegarla. 
              tr
                td 
                  strong RHA
                td
                  strong Historial de reserva que despliega solo los segmentos aéreos. 
              tr
                td 
                  strong RHG
                td
                  strong Historial de reserva con referencia a las notas OSI y los servicios SSR. 
              tr
                td 
                  strong RHN
                td
                  strong Historial de los nombres de los pasajeros.
              tr
                td 
                  strong RHK
                td
                  strong Historial de reserva de los elementos 
                  italic-strong e-ticket.     
              tr
                td 
                  strong RHJ
                td
                  strong Historial de reserva de los elementos de contacto.     
              tr
                td 
                  strong RHR
                td
                  strong Historial de reserva de los elementos de notas RM y RC.     
              tr
                td 
                  strong RHC
                td
                  strong Historial de reserva de los elementos de alquiler de auto.     
              tr
                td 
                  strong RHH
                td
                  strong Historial de reserva de los elementos de reservas hoteleras.     
              tr
                td 
                  strong RHX
                td
                  strong Historial de reserva de los elementos de renta de carro y reservas hoteleras.       
              tr
                td 
                  strong RHF
                td
                  strong Historial de reserva de los elementos de tarifa.  
              tr
                td 
                  strong RH005
                td
                  strong Visualizar la historia a partir de esa actualización.                                         

    
    p.mb-4(data-aos="fade") Ejemplo de historia de reserva:

    .row.justify-content-center.mb-4
      .col-lg-10
        figure(data-aos="fade")
          img(src="@/assets/curso/tema1-4-figura.jpg", alt="Pantallazo amadeus")

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        figure.mb-3
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        //-.tarjeta.color-degrade.p-3
          .row.justify-content-around.align-items-center
            .col-1
            .col-3.col-sm-3.col-lg-2
              img.px-lg-3(src="@/assets/curso/tema1-4-cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Video inicio - Reserva
                  p.text-small.mb-0 A manera de explicación sobre la plataforma Amadeus, se  
                    br
                    | presenta el siguiente video; se recomienda su descarga.
                .col-sm-auto.px-lg-4
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

</template>

<script>
import AcordeonB from '../components/AcordeonB'
export default {
  name: 'Tema1',
  components: {
    AcordeonB,
  },
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    datosSlyder: [
      {
        texto: 'Ingresar su <b>firma</b> o su <b><i>USERNAME</b></i>. ',
        imagen: require('@/assets/curso/tema1-slider1.jpg'),
      },
      {
        texto:
          'Ingresar el <b>código de oficina</b> u <b><i>OFFICE ID</b></i>. ',
        imagen: require('@/assets/curso/tema1-slider2.jpg'),
      },
      {
        texto: 'Ingresar la <b>contraseña</b> o <b><i>PASSWORD</b></i>. ',
        imagen: require('@/assets/curso/tema1-slider3.jpg'),
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
    min-width: 270px
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
    &__label
      min-width: 200px
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
  top: 26px
  right: -30px
.lg-hotspot--2 .lg-hotspot__label
  top: 26px
  left: 20px


.lg-mobile1-1 .lg-hotspot__button
  height: 24px
  width: 77px
.lg-mobile1-2 .lg-hotspot__button
  height: 24px
  width: 65px
.lg-mobile1-3 .lg-hotspot__button
  height: 24px
  width: 43px
.lg-mobile1-4 .lg-hotspot__button
  height: 24px
  width: 111px
.lg-mobile1-5 .lg-hotspot__button
  height: 24px
  width: 12px
.lg-mobile1-6 .lg-hotspot__button
  height: 24px
  width: 84px
.lg-mobile1-7 .lg-hotspot__button
  height: 24px
  width: 67px
.lg-mobile1-8 .lg-hotspot__button
  height: 24px
  width: 89px
.lg-mobile1-9 .lg-hotspot__button
  height: 24px
  width: 42px
.lg-mobile1-10 .lg-hotspot__button
  height: 24px
  width: 49px
.lg-mobile1-11 .lg-hotspot__button
  height: 24px
  width: 118px
.lg-mobile1-11 .lg-hotspot__label
  min-width: 750px
.lg-mobile1-12 .lg-hotspot__button
  height: 24px
  width: 35px
.lg-mobile1-12 .lg-hotspot__label
  min-width: 800px
.lg-mobile1-13 .lg-hotspot__button
  height: 24px
  width: 37px
.lg-mobile1-14 .lg-hotspot__button
  height: 24px
  width: 138px

.lg-mobile2-1 .lg-hotspot__button
  height: 16px
  width: 90px
.lg-mobile2-2 .lg-hotspot__button
  height: 16px
  width: 90px
.lg-mobile2-3 .lg-hotspot__button
  height: 16px
  width: 12px
.lg-mobile2-4 .lg-hotspot__button
  height: 16px
  width: 19px
.lg-mobile2-5 .lg-hotspot__button
  height: 16px
  width: 39px
.lg-mobile2-6 .lg-hotspot__button
  height: 16px
  width: 32px
.lg-mobile2-7 .lg-hotspot__button
  height: 16px
  width: 17px
.lg-mobile2-8 .lg-hotspot__button
  height: 16px
  width: 53px
.lg-mobile2-9 .lg-hotspot__button
  height: 16px
  width: 132px
.lg-mobile2-10 .lg-hotspot__button
  height: 16px
  width: 69px
.lg-mobile2-11 .lg-hotspot__button
  height: 16px
  width: 37px
.lg-mobile2-12 .lg-hotspot__button
  height: 16px
  width: 37px
.lg-mobile2-13 .lg-hotspot__button
  height: 16px
  width: 18px
.lg-mobile2-14 .lg-hotspot__button
  height: 16px
  width: 24px
.lg-mobile2-15 .lg-hotspot__button
  height: 16px
  width: 38px


.lg-mobile3-1 .lg-hotspot__button
  height: 18px
  width: 206px
.lg-mobile3-2 .lg-hotspot__button
  height: 18px
  width: 57px
.lg-mobile3-3 .lg-hotspot__button
  height: 18px
  width: 128px
.lg-mobile3-4 .lg-hotspot__button
  height: 18px
  width: 60px
.lg-mobile3-5 .lg-hotspot__button
  height: 18px
  width: 124px
.lg-mobile3-6 .lg-hotspot__button
  height: 18px
  width: 64px
.lg-mobile3-7 .lg-hotspot__button
  height: 18px
  width: 18px
.lg-mobile3-8 .lg-hotspot__button
  height: 18px
  width: 52px
.lg-mobile3-9 .lg-hotspot__button
  height: 18px
  width: 17px
.lg-mobile3-10 .lg-hotspot__button
  height: 18px
  width: 61px
.lg-mobile3-11 .lg-hotspot__button
  height: 18px
  width: 37px
.lg-mobile3-12 .lg-hotspot__button
  height: 18px
  width: 44px
.lg-mobile3-13 .lg-hotspot__button
  height: 18px
  width: 44px
.lg-mobile3-14 .lg-hotspot__button
  height: 18px
  width: 64px
.lg-mobile3-15 .lg-hotspot__button
  height: 18px
  width: 18px
.lg-mobile3-16 .lg-hotspot__button
  height: 18px
  width: 52px
.lg-mobile3-17 .lg-hotspot__button
  height: 18px
  width: 17px
.lg-mobile3-18 .lg-hotspot__button
  height: 18px
  width: 61px
.lg-mobile3-19 .lg-hotspot__button
  height: 18px
  width: 37px
.lg-mobile3-20 .lg-hotspot__button
  height: 18px
  width: 44px
.lg-mobile3-21 .lg-hotspot__button
  height: 18px
  width: 44px
.lg-mobile3-22 .lg-hotspot__button
  height: 18px
  width: 127px
.lg-mobile3-23 .lg-hotspot__button
  height: 18px
  width: 116px
.lg-mobile3-24 .lg-hotspot__button
  height: 18px
  width: 244px
.lg-mobile3-25 .lg-hotspot__button
  height: 18px
  width: 172px
.lg-mobile3-26 .lg-hotspot__button
  height: 18px
  width: 172px
.lg-mobile3-27 .lg-hotspot__button
  height: 37px
  width: 500px
.lg-mobile3-28 .lg-hotspot__button
  height: 224px
  width: 23px


/* PC LARGE */
@media (min-width: 721px)
  .container.lg-hotspot1
    width: 978px
  .lg-hotspot1 .lg-image
    width: 955px
  .lg-container.lg-hotspot1
    width: 955px
  .container.lg-hotspot2
    width: 815px
  .lg-hotspot2 .lg-image
    width: 792px
  .lg-container.lg-hotspot2
    width: 792px
  .container.lg-hotspot3
    width: 978px
  .lg-hotspot3 .lg-image
    width: 955px
  .lg-container.lg-hotspot3
    width: 955px
/* MOBILE */
@media (max-width: 720px)

  .container.lg-hotspot1
    width: 345px
  .lg-hotspot1 .lg-image
    width: 320px
  .lg-container.lg-hotspot1
    width: 320px
  .container.lg-hotspot2
    width: 345px
  .lg-hotspot2 .lg-image
    width: 320px
  .lg-container.lg-hotspot2
    width: 320px
  .container.lg-hotspot3
    width: 345px
  .lg-hotspot3 .lg-image
    width: 320px
  .lg-container.lg-hotspot3
    width: 320px


  .lg-hotspot__button
    border: 1.2px solid #FFB74D

  .lg-hotspot--1 .lg-hotspot__label
    top: 11px
    right: -15px
  .lg-hotspot--2 .lg-hotspot__label
    top: 10px
    left: 8px

  .lg-mobile1-1
    top: 6.5% !important
    left: 17% !important
    .lg-hotspot__button
      height: 10px
      width: 33px
  .lg-mobile1-2
    top: 6.5% !important
    left: 50% !important
    .lg-hotspot__button
      height: 10px
      width: 24px
  .lg-mobile1-3
    top: 6.5% !important
    left: 79.5% !important
    .lg-hotspot__button
      height: 10px
      width: 20px
  .lg-mobile1-4
    top: 6.5% !important
    left: 85% !important
    .lg-hotspot__button
      height: 10px
      width: 27px
  .lg-mobile1-5
    top: 6.5% !important
    left: 93% !important
    .lg-hotspot__button
      height: 10px
      width: 12px
  .lg-mobile1-6
    top: 6.5% !important
    left: 4% !important
    .lg-hotspot__button
      height: 8px
      width: 29px
  .lg-mobile1-7
    top: 13% !important
    left: 3.5% !important
    .lg-hotspot__button
      height: 8px
      width: 24px
  .lg-mobile1-8
    top: 18.2% !important
    left: 3.5% !important
    .lg-hotspot__button
      height: 9px
      width: 32px
  .lg-mobile1-9
    top: 25% !important
    left: 3.5% !important
    .lg-hotspot__button
      height: 8px
      width: 24px
  .lg-mobile1-10
    top: 31% !important
    left: 3.5% !important
    .lg-hotspot__button
      height: 8px
      width: 24px
  .lg-mobile1-11
    top: 37% !important
    left: 3.5% !important
    .lg-hotspot__button
      height: 8px
      width: 42px
    .lg-hotspot__label
      min-width: 300px
  .lg-mobile1-12
    top: 43% !important
    left: 3.5% !important
    .lg-hotspot__button
      height: 8px
      width: 18px
    .lg-hotspot__label
      min-width: 300px
  .lg-mobile1-13
    top: 49.5% !important
    left: 3.5% !important
    .lg-hotspot__button
      height: 8px
      width: 19px
  .lg-mobile1-14
    top: 94.5% !important
    left: 3.5% !important
    .lg-hotspot__button
      height: 8px
      width: 33px

  .lg-mobile2-1
    top: 23% !important
    left: 27% !important
    .lg-hotspot__button
      height: 7px
      width: 39px
  .lg-mobile2-2
    top: 26.5% !important
    left: 41.5% !important
    .lg-hotspot__button
      height: 7px
      width: 40px
  .lg-mobile2-3
    top: 26.5% !important
    left: 73.5% !important
    .lg-hotspot__button
      height: 7px
      width: 7px
  .lg-mobile2-4
    top: 26.5% !important
    left: 75.2% !important
    .lg-hotspot__button
      height: 7px
      width: 8px
  .lg-mobile2-5
    top: 26.5% !important
    left: 77.2% !important
    .lg-hotspot__button
      height: 7px
      width: 17px
  .lg-mobile2-6
    top: 26.5% !important
    left: 82.1% !important
    .lg-hotspot__button
      height: 7px
      width: 12px
  .lg-mobile2-7
    top: 33.3% !important
    left: 28% !important
    .lg-hotspot__button
      height: 7px
      width: 9px
  .lg-mobile2-8
    top: 33.3% !important
    left: 31% !important
    .lg-hotspot__button
      height: 7px
      width: 21px
  .lg-mobile2-9
    top: 33.3% !important
    left: 37.1% !important
    .lg-hotspot__button
      height: 7px
      width: 53px
  .lg-mobile2-10
    top: 33.3% !important
    left: 53% !important
    .lg-hotspot__button
      height: 7px
      width: 28px
  .lg-mobile2-11
    top: 33.3% !important
    left: 62.5% !important
    .lg-hotspot__button
      height: 7px
      width: 15px
  .lg-mobile2-12
    top: 33.3% !important
    left: 68.5% !important
    .lg-hotspot__button
      height: 7px
      width: 15px
  .lg-mobile2-13
    top: 33.3% !important
    left: 73% !important
    .lg-hotspot__button
      height: 7px
      width: 8px
  .lg-mobile2-14
    top: 33.3% !important
    left: 75.2% !important
    .lg-hotspot__button
      height: 7px
      width: 10px
  .lg-mobile2-15
    top: 33.3% !important
    left: 82% !important
    .lg-hotspot__button
      height: 7px
      width: 15px

  .lg-mobile3-1
    top: 35% !important
    left: 26.5% !important
    .lg-hotspot__button
      height: 7px
      width: 72px
  .lg-mobile3-2
    top: 35% !important
    left: 56.7% !important
    .lg-hotspot__button
      height: 7px
      width: 20px
  .lg-mobile3-3
    top: 35% !important
    left: 63.5% !important
    .lg-hotspot__button
      height: 7px
      width: 43px
  .lg-mobile3-4
    top: 35% !important
    left: 77.2% !important
    .lg-hotspot__button
      height: 7px
      width: 25px
  .lg-mobile3-5
    top:  !important
    left: 30.8% !important
    .lg-hotspot__button
      height: 7px
      width: 43px
  .lg-mobile3-6
    top:  !important
    left: 30.8% !important
    .lg-hotspot__button
      height: 7px
      width: 24px
  .lg-mobile3-7
    top:  !important
    left: 37.5% !important
    .lg-hotspot__button
      height: 7px
      width: 7px
  .lg-mobile3-8
    top:  !important
    left: 39.4% !important
    .lg-hotspot__button
      height: 7px
      width: 19px
  .lg-mobile3-9
    top:  !important
    left:  !important
    .lg-hotspot__button
      height: 7px
      width: 7px
  .lg-mobile3-10
    top:  !important
    left:  !important
    .lg-hotspot__button
      height: 7px
      width: 21px
  .lg-mobile3-11
    top:  !important
    left: 52.7% !important
    .lg-hotspot__button
      height: 7px
      width: 13px
  .lg-mobile3-12
    top:  !important
    left: 64% !important
    .lg-hotspot__button
      height: 7px
      width: 17px
  .lg-mobile3-13
    top:  !important
    left: 68.7% !important
    .lg-hotspot__button
      height: 7px
      width: 16px
  .lg-mobile3-14
    top:  !important
    left: 30.8% !important
    .lg-hotspot__button
      height: 7px
      width: 24px
  .lg-mobile3-15
    top:  !important
    left: 37.5% !important
    .lg-hotspot__button
      height: 7px
      width: 7px
  .lg-mobile3-16
    top:  !important
    left: 39.4% !important
    .lg-hotspot__button
      height: 7px
      width: 19px
  .lg-mobile3-17
    top:  !important
    left:  !important
    .lg-hotspot__button
      height: 7px
      width: 7px
  .lg-mobile3-18
    top:  !important
    left:  !important
    .lg-hotspot__button
      height: 7px
      width: 21px
  .lg-mobile3-19
    top:  !important
    left: 52.7% !important
    .lg-hotspot__button
      height: 7px
      width: 13px
  .lg-mobile3-20
    top:  !important
    left: 64% !important
    .lg-hotspot__button
      height: 7px
      width: 17px
  .lg-mobile3-21
    top:  !important
    left: 68.7% !important
    .lg-hotspot__button
      height: 7px
      width: 16px
  .lg-mobile3-22
    top:  !important
    left: 30.8% !important
    .lg-hotspot__button
      height: 7px
      width: 44px
  .lg-mobile3-23
    top:  !important
    left: 33.2% !important
    .lg-hotspot__button
      height: 7px
      width: 40px
  .lg-mobile3-24
    top:  !important
    left: 30.8% !important
    .lg-hotspot__button
      height: 7px
      width: 82px
  .lg-mobile3-25
    top:  !important
    left: 30.8% !important
    .lg-hotspot__button
      height: 7px
      width: 59px
  .lg-mobile3-26
    top:  !important
    left: 30.8% !important
    .lg-hotspot__button
      height: 7px
      width: 59px
  .lg-mobile3-27
    top: 77.1% !important
    left: 30.8% !important
    .lg-hotspot__button
      height: 13px
      width: 167px
  .lg-mobile3-28
    top: 39.3% !important
    left: 28% !important
    .lg-hotspot__button
      height: 76px
      width: 10px
</style>
