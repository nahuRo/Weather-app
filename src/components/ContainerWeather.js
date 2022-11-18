import Card from "./Card";

const ContainerWeather = ({ weather, city }) => {
	return (
		<>
			{weather ? (
				<Card cityToFound={city} time={weather} png={weather.weather[0].icon} />
			) : (
				<div className="flex items-center justify-center h-full">
					<h1 className="text-5xl font-bold">Sin busquedas</h1>
				</div>
			)}
		</>
	);
};

export default ContainerWeather;
