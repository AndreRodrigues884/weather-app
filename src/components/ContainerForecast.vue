<script>
import { useWeatherStore } from '@/stores/store';
import { onMounted, watch } from 'vue';

export default {
    setup() {
        const store = useWeatherStore();

        onMounted(() => {
            store.fetchForecastHourly();
            store.getLocationAndFetchWeather();
            watch(() => store.lat, () => {
                if (store.lat && store.lon) {
                    store.fetchForecastHourly();
                }
            });
        });

        return {
            store,
        };
    },
    computed: {
        getForecastTemp() {
            return this.store.getForecastTemp;
        },
        getForecastDescription() {
            return this.store.getForecastDescription;
        }
    }
};
</script>

<template>

<div class="flex w-full">
    <div class="flex flex-col p-16 w-full">
        <p class="flex justify-center p-16 uppercase font-bold text-xl font-montserrat">
            Weather for the next 24 Hours
        </p>
        <div class="flex flex-col items-center">
            <!-- Exibe "Carregando Temperatura..." se getForecastTemp estiver vazio -->
            <p v-if="!getForecastTemp.length" class="font-montserrat font-light text-xl uppercase">
                Carregando Temperatura...
            </p>
            <!-- Itera sobre getForecastTemp quando há dados -->
            <div v-else class="flex flex-col items-center">
                <div class="flex">
                    <!-- Itera sobre os índices dos dados -->
                    <div v-for="index in getForecastTemp.length" :key="index" class="flex flex-col items-center mx-2">
                        <p class="font-montserrat font-light text-xl uppercase">
                            {{ getForecastTemp[index - 1].toFixed(0) }}°C
                        </p>
                        <p v-if="getForecastDescription[index - 1]" class="font-montserrat font-light text-xl">
                            {{ getForecastDescription[index - 1] }}
                        </p>
                        <p v-if="!getForecastDescription[index - 1]" class="font-montserrat font-light text-xl">
                            Carregando descrição...
                        </p>
                    </div>
                </div>
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
</style>
