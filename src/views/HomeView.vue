<script>
import Navbar from "../components/Navbar.vue";
import WeatherCard from "../components/Weather-Card.vue";
import Forecast from "../components/ContainerForecast.vue";

export default {
  components: {
   Navbar,
   WeatherCard,
   Forecast,
  },
  data() {
    return {
      /* key: value */
    }
  },
  computed: {
   /*  name() {
        return this.data 
    } */
  },
  methods: {
   /*  name() {
        
    } */
  },
}


</script>

<template>
   <Navbar></Navbar>

   <main>
    <div class="flex justify-center">
        <WeatherCard></WeatherCard>
    </div>
   </main>
   <Forecast></Forecast>
   
</template>

<style lang="scss" scoped>

</style>