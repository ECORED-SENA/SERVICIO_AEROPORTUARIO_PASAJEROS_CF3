<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Cambio en boletos

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema3.jpg", alt="Cambio en boletos")  

    p(data-aos="fade") El billete de viaje o el boleto de pasaje aéreo es el documento válido, individual o colectivo, donde se consignan todos los datos de un pasajero y se considera como el contrato de transporte aéreo, que se adquiere de forma electrónica o por internet y es expedido o autorizado por la empresa transportista o por el agente autorizado.
    p.mb-4(data-aos="fade") Hay situaciones donde se debe cambiar el boleto aéreo para poder acceder a que le brinden el servicio de transporte, en algunas ocasiones por situaciones de la misma empresa aérea o los intermediarios y en otras ocasiones por decisión del pasajero por diversas situaciones que se le presentan. Encontrando: 

    TabsC.color-acento-contenido
      .py-3.py-md-4(titulo="Cambios voluntarios")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h5 Cambios voluntarios
            p Cambios voluntarios de boletos aéreos son todos aquellos que realiza el cliente, como se realiza a continuación:
            ul.lista-ul--color.lista-circulo
              li.mb-0 
                i.fas.fa-circle
                | El pasajero por motivos personales no puede viajar y para no solicitar reembolso, pide cambio de ruta.
              li.mb-0 
                i.fas.fa-circle
                | El pasajero decide viajar en otra fecha, pero por reglamentación de la tarifa debe pagar a una tarifa más alta ya que no hay cupo o las condiciones de la tarifa no permiten realizar el cambio con pago adicional o sin adicional.
              li.mb-0 
                i.fas.fa-circle
                | Cuando un cliente utiliza una porción del boleto y una parte de los tramos no son utilizados, y lo quiere cambiar en otra ruta, lo toma como parte de pago. 
              li.mb-0 
                i.fas.fa-circle
                | Cuando un pasajero tiene un boleto y no ha utilizado todo o una parte y se lo quiere ceder a otra persona.
              li 
                i.fas.fa-circle
                | Cuando el pasajero decide cambiar de tarifa económica a ejecutiva.     
          .col-md-5
            figure
              img(src='@/assets/curso/tema3-tabs1-1.png', alt='Cambios voluntarios')
      .py-3.py-md-4(titulo="Cambios involuntarios")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h5 Cambios involuntarios
            p Los cambios involuntarios de boletos aéreos son todos aquellos que son ajenos a la voluntad del cliente. Existen varios casos en los que el pasajero puede tener un cambio en su itinerario sin ser requerido por el pasajero, entre ellos:
            ul.lista-ul--color.lista-circulo
              li.mb-0
                i.fas.fa-circle
                | Cuando el pasajero detecte un error ortográfico y de posición de nombres o apellidos en su reserva y en su boleto se debe dirigir a la aerolínea o su intermediario para que le realicen el cambio de boleto, en este caso es una corrección. 
              li.mb-0
                i.fas.fa-circle
                | Cuando el pasajero por obligación tiene que realizar una o varias conexiones y surge la cancelación del vuelo o retraso en la operación del mismo, la compañía aérea lo puede enviar con otra aerolínea en ruta alterna, en este caso hay que cambiar el boleto con el Carrier de la aerolínea transportadora.
              li 
                i.fas.fa-circle
                | Cuando por cambios operacionales la aerolínea cambia el vuelo, lo cancela o lo retrasa. 
            p
              strong En estos casos la aerolínea debe asumir el cambio del tiquete sin generar costos adicionales.        
          .col-md-5
            figure
              img(src='@/assets/curso/tema3-tabs1-2.png', alt='Cambios involuntarios')        

    Separador


    // 3.1
    #t_3_1.titulo-segundo(data-aos="fade-right")
      .h2 3.1. Reembolsos

    .row.mb-4
      .col-lg-7.mb-4(data-aos="fade-right")
        p Los boletos tendrán una vigencia de 12 meses contados a partir de la fecha de su expedición, siempre y cuando la restricción de la tarifa no indique algo diferente.
        p Solo aplica para tarifas totalmente reembolsables, o reembolsables con penalidad, caso en el cual estarán sujetos a las disposiciones establecidas en la reglamentación específica de la tarifa.
        p La aerolínea no reembolsará los impuestos/tasas que por su naturaleza y/o reglamentaciones gubernamentales se consideren no reembolsables.
        p Los tiquetes expedidos por agencias de viajes deben hacer el reembolso de los tiquetes vendidos por ellos y no la línea aérea. 
      .col-lg-5.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema3-1-img.png", alt="Imagen decorativa")  

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .row.tarjeta-borde-naranja.p-4
          .col-md-9
            p Hay diferentes situaciones para que se solicite un reembolso de un boleto aéreo y estos pueden ser reembolsados total o parcialmente:
            ul.lista-ul--color.lista-circulo
              li.mb-0 
                i.fas.fa-circle
                | Cuando el cliente por motivos de fuerza mayor ya no pueda realizar el viaje. 
              li.mb-0 
                i.fas.fa-circle
                | Cuando un pasajero haya utilizado una parte del boleto aéreo y no utilice el restante. 
              li.mb-0 
                i.fas.fa-circle
                | Por muerte o enfermedad del destinatario original.
              li.mb-0 
                i.fas.fa-circle
                | Reembolso de boletos de pasajeros solicitado por agencia de viajes.
              li.mb-0
                i.fas.fa-circle
                | Pasajero privado de la libertad.         
          .col-md-3
            img.mb-0(src="@/assets/curso/tema3-1-img2.svg", alt="Imagen decorativa") 

    .row.justify-content-center.mb-5
      h4.mb-4(data-aos="fade-right") Tipos de reembolsos y clasificación
      .col-lg-10(data-aos="fade-down")
        figure.mb-5
          img(src="@/assets/curso/tema3-1-mapa-mental.svg", alt="Tipos de reembolsos y clasificación")

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-8
        .row.tarjeta-borde-morada.p-4
          p.mb-0 Los reembolsos voluntarios se presentan cuando el cliente solicita no viajar por decisión propia.     
    
    .row.justify-content-center.text-center.mb-5(data-aos="fade-down")
      .col-lg-8
        .row.naranja-fuerte.p-3.mb-4
          h3.mb-0 Voluntarios fuerza mayor
        .row.mb-4
          LineaTiempoD.color-primario.linea-amarillo-suave
            ul.lista-ul--color.lista-circulo.p-3(numero="1" titulo="Retracto") 
              li.mb-0 
                i.fas.fa-circle
                | Radicar como: LEY DE RETRACTO COLOMBIA. 
              li.mb-0 
                i.fas.fa-circle
                | Deberá ser ejercido dentro de las 48 horas siguientes a la operación de compra. 
              li.mb-0 
                i.fas.fa-circle
                | Para vuelos nacionales, entre el momento de la solicitud de reembolso y la fecha de inicio de viaje debe haber como mínimo 8 días calendario contados a partir del día siguiente a la solicitud.    
              li.mb-0 
                i.fas.fa-circle
                | Para vuelos internacionales, entre el momento de la solicitud de reembolso y la fecha de inicio de viaje debe haber como mínimo 15 días calendario contados a partir del día siguiente a la solicitud. 
              li.mb-0 
                i.fas.fa-circle
                | Adjuntar documentos de soporte que demuestren que se trata de una compra a distancia o no tradicional (por ejemplo: pantallazo de PSE, pantallazo de transferencia electrónica, etc.). 
              li.mb-0 
                i.fas.fa-circle
                | La aerolínea retendrá el menor valor entre: (i) el 10% del valor de la tarifa más el Q de combustible y un valor que la compañía asigne por reembolso en vuelos nacionales y en vuelos internacionales aplicando la TRM correspondiente al día en que se realizó la solicitud. 
              li.mb-0 
                i.fas.fa-circle
                | Aplica para formas de pago tarjeta de crédito y tarjeta débito.      
            ul.lista-ul--color.lista-circulo.p-3(numero="2" titulo="Desistimiento") 
              li.mb-0 
                i.fas.fa-circle
                | Radicar como: DESISTIMIENTO.
              li.mb-0 
                i.fas.fa-circle
                | Hasta un día antes de la fecha de inicio del viaje. 
              li.mb-0 
                i.fas.fa-circle
                | Aplica para todas las formas de pago.
              li.mb-0 
                i.fas.fa-circle
                | El valor para retener no podrá superar el 10% del valor de la tarifa (tarifa + Q Combustible).
              li.mb-0 
                i.fas.fa-circle
                | Para tarifas promocionales aplicará lo establecido en la regla tarifaria. 
              li.mb-0 
                i.fas.fa-circle    
                | Las empresas aéreas no reembolsarán el valor correspondiente a impuestos, tasas o contribuciones que por regulación sean no reembolsables.
            ul.lista-ul--color.lista-circulo.p-3(numero="3" titulo="Enfermedad") 
              li.mb-0 
                i.fas.fa-circle
                | Deben ingresar los soportes médicos que demuestren inhabilidad para viajar en las fechas previstas en el tiquete.
              li.mb-0 
                i.fas.fa-circle
                | Aplican las mismas condiciones si la enfermedad se presenta en personas hasta segundo grado de consanguinidad y primer grado de afinidad con el titular del boleto. 
              li.mb-0 
                i.fas.fa-circle
                | Así mismo, aplica para los acompañantes de viaje, los cuales deberán tener boleto en las mismas condiciones de fechas y rutas que la persona que sufrió la incapacidad médica.
            ul.lista-ul--color.lista-circulo.p-3(numero="4" titulo="Fallecimiento") 
              li.mb-0 
                i.fas.fa-circle
                | Aplican las mismas condiciones si el fallecimiento se presenta en personas de segundo grado de consanguinidad y primer grado de afinidad.
            ul.lista-ul--color.lista-circulo.p-3(numero="5" titulo="Negación de visa") 
              li.mb-0 
                i.fas.fa-circle
                | Adjuntando carta de negación de visa. 
              li.mb-0 
                i.fas.fa-circle
                | Aplica para tarifas no reembolsables y se descontará la penalidad de cambios que establezca la tarifa.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        .row.tarjeta-borde-morada.p-4
          p.mb-0 Los reembolsos involuntarios se presentan cuando el cliente solicita no viajar por decisión propia.

    .row.justify-content-center.text-center.mb-5(data-aos="fade-down")
      .col-lg-8
        .row.naranja-fuerte.p-3.mb-4
          h3.mb-0 Involuntarios fuerza mayor
        .row.mb-4
          LineaTiempoD.color-primario.linea-amarillo-suave
            ul.lista-ul--color.lista-circulo.p-3(numero="1" titulo="Cancelación de vuelos") 
              li.mb-0 
                i.fas.fa-circle
                | Debe ser validado con operaciones de vuelo de la compañía.
              li.mb-0 
                i.fas.fa-circle
                | Cuando exista comunicado de exoneración por parte de la VP Revenue Management, primará lo que diga el comunicado.
            ul.lista-ul--color.lista-circulo.p-3(numero="2" titulo="Cambio de itinerario") 
              li.mb-0 
                i.fas.fa-circle
                | Este tipo de reembolso involuntario es muy común ya que aparece cuando las líneas aéreas presentan un cambio operacional y por esta razón cambian la ruta del vuelo, la hora, el día y afecta las condiciones pactadas del boleto original.
            ul.lista-ul--color.lista-circulo.p-3(numero="3" titulo="Tiquetes o impuestos duplicados") 
              li.mb-0 
                i.fas.fa-circle
                | Se reembolsa el valor del segundo boleto emitido. 
              li.mb-0 
                i.fas.fa-circle
                | Si el cliente quiere que le reembolsen el primero entonces se maneja como reembolso voluntario (aplicando regla tarifaria). Excepción: cuando alguno de los boletos ya esté utilizado se reembolsará el boleto que esté sin uso.
              li.mb-0 
                i.fas.fa-circle
                | Para boletos parcialmente utilizados, el cálculo de la porción usada se realizará mediante prorrateo directo.  

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-8
        .row.tarjeta-borde-morada.p-4
          p Solicitudes de reembolsos de boletos por fuera de la vigencia aplicarán de acuerdo con las disposiciones legales y regulaciones específicas de cada país.
          p.mb-0 El agente efectuará un reembolso solamente de acuerdo con los manuales de tarifas, las condiciones de transporte y las instrucciones escritas del transportista. El agente solamente reembolsará documentos de tráfico emitidos por dicho agente.



</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass" scoped></style>
