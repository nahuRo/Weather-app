import { UilSearch } from "@iconscout/react-unicons";

const Search = ({ setSearch }) => {
	const handleSearch = (e) => {
		e.preventDefault();

		setSearch(e.target.city.value);
	};
	return (
		<form
			onSubmit={handleSearch}
			className="flex flex-col sm:flex-row sm:justify-around justify-evenly w-full h-full sm:h-2/6"
		>
			<div className="flex items-center sm:w-3/5">
				<label htmlFor="search">
					<UilSearch className="cursor-pointer transition ease-out hover:scale-125 mr-2" />
				</label>
				<input
					id="search"
					name="city"
					className="rounded  p-1 w-full sm:w-8/12 focus:outline-none"
					placeholder=" Search..."
				/>
			</div>
			<button className="rounded bg-orange-600 py-2 px-4 hover:bg-orange-700 transition">
				Buscar
			</button>
		</form>
	);
};

export default Search;
