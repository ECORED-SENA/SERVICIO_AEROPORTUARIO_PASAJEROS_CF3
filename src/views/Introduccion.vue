<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-intro.jpg", alt="Introducción")  

    p.mb-4(data-aos="fade") Las aerolíneas se preocupan constantemente por mejorar la experiencia del pasajero desde el primer contacto con él, teniendo en cuenta que algunos viajeros presentan ansiedad incluso desde antes de la llegada al aeropuerto, así, lo que ellas buscan es crear un entorno de muchos factores dispuestos a brindar una experiencia de viaje completa, esto incluye no solo el tema de servicio al cliente, la preparación de sus empleados, sino también la implementación de las mejores herramientas tecnológicas para su labor.

    .row.mb-4
      .col-lg-7.mb-4(data-aos="fade-right")
        p La disposición por parte del agente y la asesoría impactan en su satisfacción y conllevan a la fidelización y el cumplimiento de los objetivos estratégicos de la organización. El servicio al cliente es el eje principal de la organización, donde se busca ofrecer una experiencia de viaje completa y además involucra en el transporte aéreo los diferentes servicios complementarios.
        .tarjeta-borde-morada.p-4
          p.mb-0
            strong Nota: 
            | las imágenes usadas aquí son tomadas del 
            italic software 
            | Amadeus, únicamente con fines educativos.
      .col-lg-5.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/intro-img.svg", alt="Imagen decorativa") 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
