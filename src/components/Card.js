import React from "react";
import StatisticsBar from "./StatisticsBar";

const Card = ({ time, cityToFound, png }) => {
	return (
		<section className="flex flex-col items-center justify-around h-full">
			<div>
				<h1 className="text-5xl text-center font-bold">{cityToFound}</h1>
				<h2 className="text-3xl pt-2 text-center">{time.weather[0].main}</h2>
			</div>
			<div className="flex items-center justify-around w-3/4 my-0 mx-auto">
				<img
					className="w-30"
					src={`http://openweathermap.org/img/wn/${png}@2x.png`}
					alt="weather"
				/>
				<h2 className="text-8xl text-center">
					{parseFloat((time.main.temp - 32) * (5 / 9)).toFixed(0)} °C
				</h2>
			</div>
			<div>
				<div className="flex bg-slate-500 my-0 mx-auto rounded-xl p-6 justify-around">
					<StatisticsBar name="Feels Like" number={time.main.feels_like} />
					<StatisticsBar name="Humidity" number={time.main.humidity} />
					<StatisticsBar name="Pressure" number={time.main.pressure} />
					<StatisticsBar name="Wind Speed" number={time.wind.speed} />
				</div>
			</div>
		</section>
	);
};

export default Card;
