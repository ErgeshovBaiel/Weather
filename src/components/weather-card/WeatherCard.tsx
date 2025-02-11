import React from 'react'
import { Weather } from "../../types/index"

type WeatherCardProps = {
    weather: Weather | undefined 
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather } ) => { 
  
  const iconUrl = weather?.weather[0].icon 
    ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    : "";

  return (
    <div className="w-[360px] h-[311px] m-auto mt-[-74px] pl-[30px] bg-white shadow-[0px_5px_15px_rgba(70,69,69,0.25)] rounded-[10px]">
      <div>
        <div className="flex gap-2.5 pt-[30px]">
          <h3 className="w-[147px] h-[33px] font-[Rubik] font-medium text-[28px] text-black leading-[33.18px]">
            {weather?.name}
          </h3>
          <div className="w-[27px] h-[18px] rounded-[6px] bg-[#E5464F] flex items-center justify-center">
            <span className="text-white text-[12px] font-medium">{weather?.sys.country}</span>
          </div>
        </div>

        <h1 className="mt-[20px] text-[92px] leading-[92px] font-[Rubik] font-normal">
          {(weather?.main?.temp! - 273.15).toFixed()}°c
        </h1>

        <div className="flex justify-between items-center mt-3">
          
          <p className="text-[20px] leading-[23.7px] font-[Rubik] font-normal">
            {weather?.weather[0].description}
          </p>
          {iconUrl && <img  src={iconUrl} alt="weather icon" className="w-[150px] h-[150px] mt-[-130px]" />}
        </div>

        <p className="text-[20px] leading-[23.7px] mt-[7px] font-[Rubik] font-normal">
         Wind <span className="text-[14px] pl-[10px]">{weather?.wind.speed} км/ч</span>
        </p>

        <p className="text-[20px] leading-[23.7px] mt-[7px] font-[Rubik] font-normal">
        Humidity <span className="text-[14px] pl-[10px]">{weather?.main.humidity}%</span>
        </p>
      </div>
    </div>
  )
}

export default WeatherCard
