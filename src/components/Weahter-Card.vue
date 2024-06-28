<script>
import { useWeatherStore } from '@/stores/store';
import { changeBackgroundWeather } from '../js/Weather-Card';
import { onMounted, watch } from 'vue';

export default {
    setup() {
        const store = useWeatherStore();
        store.fetchCurrentWeather();

        onMounted(() => {
            store.getLocationAndFetchWeather();
        });

        // Watch em store.getWeatherData para armazenar na localStorage
        watch(() => store.getCurrentWeather, (newVal) => {
            localStorage.setItem('CurrentWeather', JSON.stringify(newVal));
            changeBackgroundWeather();
        });

        return {
            store,
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
        }
    },



};
</script>

<template>
    <div id="weatherBackground">
        <p v-if="getLocationName">Localidade: {{ getLocationName }}</p>
        <p v-else>Carregando Localidade...</p>
        <p v-if="getCurrentWeather">Temperatura Atual: {{ getCurrentWeather.toFixed(2) }} °C</p>
        <p v-else>Carregando dados meteorológicos...</p>
        <p v-if="getWeatherDescription">Descrição: {{ getWeatherDescription }}</p>
        <p v-else>Carregando Descrição...</p>
    </div>
</template>

<style>

</style>
