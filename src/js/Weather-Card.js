export function changeBackgroundWeather() {
    
    const weatherBackground = document.getElementById('weatherBackground');
    
    if (!weatherBackground) {
      console.error('Elemento com ID "weatherBackground" não encontrado.');
      return;
    }
    
    const CurrentWeatherString = localStorage.getItem('CurrentWeather');
    
    if (!CurrentWeatherString) {
        console.error('Dados meteorológicos não encontrados na localStorage.');
        return;
      }

      const temperature = parseFloat(CurrentWeatherString);
      const roundedTemperature = Math.round(temperature * 10) / 10;
      
    if (roundedTemperature < 0) {
      weatherBackground.style.backgroundImage = 'url("../assets/images/veryCold.jpeg")';
    } else if (roundedTemperature >= 0 && roundedTemperature < 10) {
      weatherBackground.style.backgroundImage = 'url("../assets/images/cold.jpeg")';
    } else if (roundedTemperature >= 10 && roundedTemperature < 20) {
      weatherBackground.style.backgroundImage = 'url("../assets/images/neutral.jpeg")';
    } else if (roundedTemperature >= 20 && roundedTemperature < 30) {
      weatherBackground.style.backgroundImage = 'url("../assets/images/hot.jpeg")';
    } else {
      weatherBackground.style.backgroundImage = 'url("../assets/images/veryHot.jpeg")';
    }
  }
  