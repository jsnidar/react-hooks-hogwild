import React from 'react';

const SortDropDown = ({handleSort}) => {

    return (
        <div>
            Sort By:
            <select onChange={handleSort}>
                <option>All</option>
                <option>Name</option>
                <option>Weight</option>
            </select>
        </div>

    )
}

export default SortDropDown;