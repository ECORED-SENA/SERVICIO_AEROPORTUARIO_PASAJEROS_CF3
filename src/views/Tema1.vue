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

    .row.justify-content-center(data-aos="fade-down")
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
              




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
