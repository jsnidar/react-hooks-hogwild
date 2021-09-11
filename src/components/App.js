import React, { useState } from "react";
import Nav from "./Nav";
import HogCards from "./HogCards";
import FilterButton from "./FilterButton";
import SortDropDown from "./SortDropdown";
import AddHogForm from "./AddHogForm";

import hogs from "../porkers_data";

function App() {
	const [ hogsArray, setHogsArray ] = useState(hogs)
	const [ filterGreased, setFilterGreased] =useState(false)
	const [ sortCriteria, setSortCriteria] = useState('All')

	// let allHogs = hogs
	let filteredHogs = !filterGreased ? hogsArray : hogsArray.filter(h => h.greased === true)

	const handleGreaseButton = () => {
		setFilterGreased(!filterGreased)
	}

	const handleFormSubmit = (newHogObj) => {
		console.log(newHogObj)

		return setHogsArray((pha) => [...pha, newHogObj])
	}

	const handleSort = (event) => setSortCriteria(event.target.value)

	console.log(hogsArray)

	return (
		<div className="App">
			<Nav />
			<FilterButton handleGreaseButton={handleGreaseButton} greased={filterGreased}/>
			<SortDropDown handleSort={handleSort} />
			<br></br>
			<br></br>
			<AddHogForm handleFormSubmit={handleFormSubmit}/>
			<br></br>
			<br></br>
			<HogCards sortCriteria={sortCriteria} hogs={filteredHogs} />
		</div>
	);
}

export default App;
