import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getWeather = async (city) => {
	const { data } = await axios.get(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
	);
	return data;
};
