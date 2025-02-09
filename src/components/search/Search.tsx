import { useState } from "react";

const Search = ({ onSearch }: { onSearch: (cityName: string) => void }) => {
  const [cityName, setCityName] = useState("");

  const handleSearch = () => {
    onSearch(cityName); 
  };

  return (
    <div className="w-[615px] h-[54px] flex gap-2.5 m-auto mt-[70px] bottom-[160px] relative">
      <input
        className="w-[460px] h-[54px] rounded-[10px] bg-white outline-none text-black pl-[15px]
          placeholder:w-[250px] placeholder:h-[24px] placeholder:text-[20px] placeholder:leading-[23.7px]
          placeholder:font-[Rubik] placeholder:font-normal placeholder:text-black"
        type="text"
        placeholder="Enter the name of the city"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <button
        className="w-[145px] h-[54px] rounded-[10px] bg-[#ED3052] text-white cursor-pointer"
        onClick={handleSearch}
      >
        <span className="w-[93px] h-[24px] text-[20px] leading-[23.7px] font-medium font-[Rubik]">Show</span>
      </button>
    </div>
  );
};

export default Search;
