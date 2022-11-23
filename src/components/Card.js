import StatisticsBar from "./StatisticsBar";

import { UilArrowUp } from "@iconscout/react-unicons";
import { UilArrowDown } from "@iconscout/react-unicons";

const Card = ({ time, cityToFound, png }) => {
	const conversion = (number) => parseFloat((number - 32) * (5 / 9)).toFixed(0);

	return (
		<section className="flex flex-col items-center justify-around h-full">
			<div>
				<h1 className="text-3xl sm:text-6xl text-center font-bold first-letter:uppercase">
					{cityToFound}
				</h1>
				<h2 className="text-2xl sm:text-3xl pt-2 text-center">
					{time.weather[0].main}
				</h2>
			</div>
			<div className="flex flex-row items-center">
				<UilArrowDown size={35} />
				<span className="text-1xl sm:text-2xl">
					Min : {conversion(time.main.temp_min)} °C{" "}
				</span>
				<span className="ml-1 rotate-90 w-5 h-0.5 bg-black"> </span>
				<UilArrowUp size={35} />
				<span className="text-1xl sm:text-2xl">
					Max : {conversion(time.main.temp_max)} °C{" "}
				</span>
			</div>
			<div className="flex items-center justify-around w-3/4 my-0 mx-auto">
				<img
					className="w-30"
					src={`http://openweathermap.org/img/wn/${png}@2x.png`}
					alt="weather"
				/>
				<h2 className="text-4xl sm:text-7xl text-center">
					{conversion(time.main.temp)} °C
				</h2>
			</div>
			<div className="grid grid-rows-2 sm:grid-rows-1 grid-cols-2 sm:grid-cols-4">
				<StatisticsBar
					name="Feels Like"
					number={conversion(time.main.feels_like)}
					unit="°C"
				/>
				<StatisticsBar name="Humidity" number={time.main.humidity} unit="%" />
				<StatisticsBar name="Pressure" number={time.main.pressure} unit="hPa" />
				<StatisticsBar
					name="Wind Speed"
					number={(time.wind.speed * 1.609344).toFixed(2)}
					unit="km/h"
				/>
			</div>
		</section>
	);
};

export default Card;
