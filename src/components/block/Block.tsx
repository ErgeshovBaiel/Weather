import { useEffect, useState } from "react";
import { weatherService } from "../../api/service/weatherService";
import WeatherCard from "../../components/weather-card/WeatherCard";
import { Weather } from "../../types/index";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Search from "../search/Search";

const Block = () => {
  const [data, setData] = useState<Weather | undefined>();
  const [loading, setLoading] = useState(true);

  const getWeather = (cityName: string) => {
    setLoading(true);
    weatherService
      .getWeather(cityName)
      .then(setData)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getWeather("Bishkek");
  }, []);

  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="w-[980px] h-[687px] m-auto rounded-[10px]
      bg-white shadow-[0px_5px_15px_rgba(70,69,69,0.25)] mt-[100px] text">
      <Header />
      <Search onSearch={getWeather} />
      <WeatherCard weather={data} />
      <Footer />
    </div>
  );
};

export default Block;
