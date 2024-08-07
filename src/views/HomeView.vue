<script>
import Navbar from "../components/Navbar.vue";
import WeahterCard from "../components/Weahter-Card.vue";

export default {
  components: {
   Navbar,
   WeahterCard,
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
        <WeahterCard></WeahterCard>
    </div>
   </main>
   
</template>

<style lang="scss" scoped>

</style>