<script>
import { useWeatherStore } from '@/stores/store';
import { changeBackgroundWeather } from '../js/Weather-Card';
import { ref, onMounted, watch } from 'vue';
import SideBar from "../components/SideBar.vue";

export default {
    components: {
        SideBar,
    },
    setup() {
        const store = useWeatherStore();
        const isSidebarOpen = ref(false);

        onMounted(() => {
            store.fetchCurrentWeather();
            store.getLocationAndFetchWeather();
        });

        watch(() => store.getCurrentWeather, (newVal) => {
            localStorage.setItem('CurrentWeather', JSON.stringify(newVal));
            changeBackgroundWeather();
        });

        const toggleSidebar = () => {
            isSidebarOpen.value = !isSidebarOpen.value;
            if (isSidebarOpen.value) {
                console.log('Sidebar is now open');
            } else {
                console.log('Sidebar is now closed');
            }
        };

        const handleSidebarClose = () => {
            isSidebarOpen.value = false; // Feche a sidebar quando o evento close for emitido
        };

        return {
            store,
            isSidebarOpen,
            toggleSidebar,
            handleSidebarClose,
        };

    },


    computed: {
        getCurrentWeather() {
            return this.store.getCurrentWeather;
        },
        getLocationName() {
            return this.store.getLocationName;
        },
        getWeatherDescription() {
            return this.store.getWeatherDescription;
        },
        getCountryName() {
            return this.store.getCountryName;
        },
        getHumidity() {
            return this.store.getHumidity;
        },
        getVisibility() {
            return this.store.getVisibility;
        },
        getWindSpeed() {
            return this.store.getWindSpeed;
        }
    },



};
</script>

<template>
    <div id="weatherBackground">
        <div class="flex w-full">
            <div class="flex flex-col p-16">
                <div class="flex gap-4">
                    <p class="font-montserrat font-light text-white text-xl uppercase" v-if="getLocationName">{{
                        getLocationName }}</p>
                    <p v-else>Carregando Localidade...</p>
                    <p class="font-montserrat font-light text-white text-xl uppercase" v-if="getCountryName">{{
                        getCountryName }}</p>
                    <p v-else>Carregando País...</p>
                </div>

                <h1 class="font-montserrat font-semibold text-white text-9xl" v-if="getCurrentWeather">{{
                        getCurrentWeather.toFixed(0) }}°C</h1>
                <p v-else>Carregando temperatura...</p>
            </div>
            <div class="flex items-center justify-end w-full">
                <p class="font-montserrat font-normal text-white text-xl capitalize vertical-lr mr-5"
                    v-if="getWeatherDescription">{{ getWeatherDescription }}</p>
                <p v-else>Carregando Descrição...</p>
            </div>
        </div>
        <div>
            <SideBar :isOpen="isSidebarOpen" @close="handleSidebarClose" />
            <div class="w-full flex justify-end items-end"> <!-- icon -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6 text-white mr-6 cursor-pointer" @click="toggleSidebar">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
        </div><!-- icon -->
        </div>
        <div class="flex justify-center pt-48">
            <div class="w-4/5 border border-white rounded-3xl flex">
                <div class="flex-1 border-r border-white p-4">
                    <p class="font-montserrat font-normal text-white text-xl text-center">Humidity</p>
                    <p class="font-montserrat font-medium text-white text-4xl text-center" v-if="getHumidity">{{
                        getHumidity }} %</p>
                    <p v-else>Carregando Humidade...</p>
                </div>
                <div class="flex-1 border-r border-white p-4">
                    <p class="font-montserrat font-normal text-white text-xl text-center">Visibility</p>
                    <p class="font-montserrat font-medium text-white text-4xl text-center" v-if="getVisibility">{{
                        getVisibility.toFixed(0) }} km</p>
                    <p v-else>Carregando Visibilidade...</p>
                </div>
                <div class="flex-1 p-4">
                    <p class="font-montserrat font-normal text-white text-xl text-center">Wind</p>
                    <p class="font-montserrat font-medium text-white text-4xl text-center" v-if="getWindSpeed">{{
                        getWindSpeed.toFixed(0) }} km/h</p>
                    <p v-else>Carregando Vento...</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
#weatherBackground {
    width: 100vw;
    height: 90vh;
    background-size: cover;
    background-position: center;
}

.veryCold {
    background-image: url('../assets/images/veryCold.jpg');
}

.cold {
    background-image: url('../assets/images/cold.jpg');
}

.neutral {
    background-image: url('../assets/images/neutral.jpg');
}

.hot {
    background-image: url('../assets/images/hot.jpg');
}

.veryHot {
    background-image: url('../assets/images/veryHot.jpg');
}
</style>
