import { defineStore } from 'pinia';
import { getCurrentWeather, getForecastHourly } from './request';

export const useWeatherStore = defineStore('auth', {
    state: () => ({
        apiKey: 'a31925b0cfe93f3f2d36d6fffe222b57',
        lat: null,
        lon: null,
        weatherData: null,
        forecastHourly: null,
       
    }),
    getters: {
        getCurrentWeather: (state) => {
            if (state.weatherData && state.weatherData.main) {
                return state.weatherData.main.temp - 273.15;
            }
            return null;
        },
        getLocationName: (state) => {
            if (state.weatherData && state.weatherData.name) {
                return state.weatherData.name;
            }
            return null;
        },
        getWeatherDescription: (state) => {
            if (state.weatherData && state.weatherData.weather[0]) {
                return state.weatherData.weather[0].description;
            }
            return null;
        },
        getCountryName: (state) => {
            if (state.weatherData && state.weatherData.sys) {
                return state.weatherData.sys.country;
            }
        },
        getHumidity: (state) => {
            if (state.weatherData && state.weatherData.main) {
                return state.weatherData.main.humidity;
            }
        },
        getVisibility: (state) => {
            if (state.weatherData && state.weatherData.visibility) {
                return state.weatherData.visibility / 1000;
            }
        },
        getWindSpeed: (state) => {
            if (state.weatherData && state.weatherData.wind) {
                return state.weatherData.wind.speed * 3.6;
            }
        },
        getForecastTemp: (state) => {
            if (state.forecastHourly && state.forecastHourly.list) {
                // Obtenha as temperaturas dos primeiros 4 períodos
                return state.forecastHourly.list.slice(0, 8).map(item => item.main.temp - 273.15);
            }
            return [];
        },
        getForecastDescription: (state) => {
            if (state.forecastHourly && state.forecastHourly.list) {
                // Obtenha as temperaturas dos primeiros 4 períodos
                return state.forecastHourly.list.slice(0, 8).map(item => item.weather[0].description);
            }
            return [];
        }
        
    },
    actions: {
        async fetchCurrentWeather() {
            if (this.lat && this.lon) {
                try {
                    this.weatherData = await getCurrentWeather(this.lat, this.lon, this.apiKey);
                    console.log('Dados meteorológicos:', this.weatherData);
                } catch (error) {
                    console.error('Erro ao obter dados meteorológicos:', error);
                }
            }
        },
        setCoordinates(lat, lon) {
            this.lat = lat;
            this.lon = lon;
        },
        getLocationAndFetchWeather() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        this.setCoordinates(latitude, longitude);
                        this.fetchCurrentWeather();
                    },
                    (error) => {
                        console.error('Erro ao obter localização:', error);
                    }
                );
            } else {
                console.error('Geolocalização não é suportada por este navegador.');
            }
        },
        async fetchForecastHourly() {
            if (this.lat && this.lon) {
                try {
                    this.forecastHourly = await getForecastHourly(this.lat, this.lon, this.apiKey);
                    console.log('Dados forecast:', this.forecastHourly);
                } catch (error) {
                    console.error('Erro ao obter dados meteorológicos:', error);
                }
            }
        },
    }
},

);