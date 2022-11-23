import { useEffect, useState } from "react";
import { getWeather } from "./services/fetchAPI";
import Search from "./components/Search";
import ContainerWeather from "./components/ContainerWeather";

// import { ejemplo } from "./weather";

function App() {
	const [weather, setWeather] = useState(null);
	const [search, setSearch] = useState("");

	useEffect(() => {
		if (search !== "") {
			// setWeather(ejemplo);
			getWeather(search).then((resp) => {
				setWeather(resp);
			});
		}
	}, [search]);

	return (
		<div className="bg-cyan-500 h-screen flex flex-col justify-center items-center">
			<div className="bg-cyan-100 w-11/12 md:w-4/5 lg:w-3/5 h-3/4 rounded-2xl p-3">
				<div className="h-1/6 flex items-center justify-around">
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
