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

<style lang="sass" scoped></style>
