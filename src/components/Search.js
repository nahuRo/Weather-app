const Search = ({ setSearch }) => {
	const handleSearch = (e) => {
		e.preventDefault();

		setSearch(e.target.city.value);
	};
	return (
		<nav className=" p-4">
			<form onSubmit={handleSearch} className="flex flex-row justify-around w-full">
				<input name="city" className="rounded  p-1 w-8/12" placeholder="... Ciudad" />
				<button className="rounded bg-orange-600 py-2 px-4 hover:bg-slate-500">
					Buscar
				</button>
			</form>
		</nav>
	);
};

export default Search;
