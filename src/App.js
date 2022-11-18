import { useEffect, useState } from "react";
import Search from "./components/Search";
import ContainerWeather from "./components/ContainerWeather";
import { getWeather } from "./fetchAPI";

function App() {
	const [weather, setWeather] = useState(null);
	const [search, setSearch] = useState("");

	useEffect(() => {
		if (search !== "") {
			getWeather(search).then((resp) => {
				setWeather(resp);
			});
		}
	}, [search]);

	return (
		<div className="bg-cyan-500 h-screen flex flex-col justify-center items-center">
			{/* md, actua desde pantalla full a 768px */}
			<div className="bg-cyan-100 md:w-3/6 md:h-3/6 w-11/12 h-5/6 rounded-2xl ">
				<div className="mt-8">
					<Search setSearch={setSearch} />
				</div>
				<div className="h-5/6">
					<ContainerWeather city={search} weather={weather} />
				</div>
			</div>
		</div>
	);
}

export default App;
