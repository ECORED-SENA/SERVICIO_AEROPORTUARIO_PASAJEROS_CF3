<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Otros beneficios aéreos

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema4.jpg", alt="Otros beneficios aéreos")  


    p.mb-5(data-aos="fade") Existe otro tipo de servicios adicionales que tienen las aerolíneas para aquellos que son de características particulares y requieren un manejo diferencial; entre ellos se encuentran el cliente corporativo, manejo de grupos y sus actuales programas de fidelización, los cuales se explican a continuación:

    SlyderE.tarjeta.tarjeta--gris.p-4.p-lg-5(indicadores="derecha", data-aos="fade-down")
      .row
        .col-md-6.mb-4.mb-md-0
          h4 Clientes corporativos
          p Son los clientes empresariales inscritos en los programas corporativos de las líneas aéreas, donde lo que se busca es optimizar el presupuesto de viajes de su organización y ayudar a encontrar las mejores opciones de viaje para las personas cuya única razón de viaje es por negocios.
            br
            | Está diseñado exclusivamente para organizaciones con necesidades de viaje, ya sea de nivel nacional o internacional; en este tipo de programas se dan beneficios adicionales entre ellos la acumulación de millas corporativas.
          p En la mayoría de los casos tiene atención personalizada, ya que tienen un ejecutivo comercial o asesor asignado por la aerolínea para cada empresa que cuente con este programa quien es el encargado de gestionar el programa, las peticiones de las compañías, responsable del asesoramiento.
        .col-md-6
          figure
            img(src='@/assets/curso/tema4-slider1.jpg', alt='Clientes corporativos')
      
      .row
        .col-md-6.mb-4.mb-md-0
          h4 Manejo de grupos
          p Este beneficio de las aerolíneas aplica para los eventos masivos, congresos, convenciones, eventos familiares de gran cantidad de personas, en donde las compañías les entregan beneficios, como cotizaciones puntuales para el grupo, según, itinerario, fechas, temporadas etc.
          p Normalmente las aerolíneas definen que cantidad de pasajeros consideran para que se pueda llamar viaje grupal, la mayoría suele tener como característica más de 10 pasajeros para aplicar a estos beneficios. 
        .col-md-6
          figure
            img(src='@/assets/curso/tema4-slider2.jpg', alt='Manejo de grupos') 
      
      .row
        .col-md-6.mb-4.mb-md-0
          h4 Programas de fidelización
          p Para las compañías aéreas es muy importante crear un lazo de fidelidad con sus pasajeros, crear una relación de valor en donde hay un beneficio para ambas partes, es una estrategia de marketing con el único interés de premiar el comportamiento de recompra por parte de los pasajeros, se busca que la persona sea fiel a la marca recibiendo con esto una serie de beneficios. Una de las mayores ventajas es la posibilidad que tienen los pasajeros de acumular millas por vuelos realizados, por compras con sus tarjetas de crédito, etc. Esta estrategia lo que ofrece a sus pasajeros es la posibilidad desde descuentos hasta tiquetes solo redimidos con millas. 
            br
            | Lo primero que se debe tener en cuenta es que cada aerolínea maneja su propio programa de lealtad, y cada programa es diferente, con diferentes características; por ejemplo, un tiquete ejecutivo da menos millas que uno en primera clase de las aerolíneas que manejan este tipo de cabina, y en muchas ocasiones, los tiquetes en promoción no acumulan millas.
        .col-md-6
          figure
            img(src='@/assets/curso/tema4-slider3.jpg', alt='Programas de fidelización')           








</template>

<script>
export default {
  name: 'Tema4',
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
