<script>

export default {
   components: {

   },
   data() {
      return {
         sidebarOpen: false
      }
   },
   methods: {
      toggleSidebar() {
         this.sidebarOpen = !this.sidebarOpen;
      }
   },
};

</script>

<template>
   <div class="bg-gray-800 p-4">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
         <!-- Ícone à esquerda -->
         <div class="flex items-center">
            <svg class="block h-6 w-6 text-white cursor-pointer" @click="toggleSidebar" fill="none" viewBox="0 0 24 24"
               stroke-width="1.5" stroke="currentColor" aria-hidden="true">
               <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
         </div>

         <!-- Barra lateral -->
         <div class="fixed inset-y-0 left-0 w-64 bg-neutral-900 text-white p-4"
            :class="{ 'translate-x-0': sidebarOpen, '-translate-x-full': !sidebarOpen }">
            <!-- Ícone para fechar a sidebar -->
            <svg v-if="sidebarOpen" @click="toggleSidebar"
               class="absolute top-4 right-4 h-6 w-6 text-white cursor-pointer" fill="none" viewBox="0 0 24 24"
               stroke-width="1.5" stroke="currentColor" aria-hidden="true">
               <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <!-- Conteúdo da barra lateral -->
            <p class="text-white">Conteúdo da barra lateral</p>
         </div>

         <!-- Pesquisa no centro -->
         <div class="flex-1 flex justify-center px-2">
            <input type="text" placeholder="Pesquisar locais"
               class="w-9/12 bg-gray-700 text-white border-2 border-gray-600 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500">
         </div>

         <!-- Ícones à direita -->
         <div class="flex items-center space-x-4">
            <button class="text-white p-2 focus:outline-none">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                     d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
               </svg>


            </button>
            <button class="text-white p-2 focus:outline-none">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                     d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
               </svg>

            </button>
         </div>
      </div>
   </div>

</template>

<style scoped>

</style>
