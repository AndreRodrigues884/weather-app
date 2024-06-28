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
  weatherBackground.className = '';

  if (roundedTemperature < 0) {
    weatherBackground.classList.add('veryCold');
  } else if (roundedTemperature >= 0 && roundedTemperature < 10) {
    weatherBackground.classList.add('cold');
  } else if (roundedTemperature >= 10 && roundedTemperature < 20) {
    weatherBackground.classList.add('neutral');
  } else if (roundedTemperature >= 20 && roundedTemperature < 30) {
    weatherBackground.classList.add('hot');
  } else {
    weatherBackground.classList.add('veryHot');
  }
}
