export async function getCurrentWeather(lat, lon, apiKey) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error('Falha na requisição ao OpenWeatherMap. Detalhes:', data);
    }
  } catch (error) {
    throw new Error('Erro na requisição ao OpenWeatherMap:', error);
  }
}
