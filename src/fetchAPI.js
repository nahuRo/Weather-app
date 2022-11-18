import axios from "axios";

const API_KEY = "f6da0e754d501b81d015ef728e39cf2d";

export const getWeather = async (city) => {
	const { data } = await axios.get(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
	);
	return data;
};
