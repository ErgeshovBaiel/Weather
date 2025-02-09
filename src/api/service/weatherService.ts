import { API_KEY, BASE_URL } from "../../api/index";

class WeatherService {
    async getWeather(cityName: string) {
      const res = await fetch(`${BASE_URL}${cityName}&${API_KEY}`);
      const data = await res.json();
      console.log(data);
      return data;
    }
  }
  
  export const weatherService = new WeatherService();
  