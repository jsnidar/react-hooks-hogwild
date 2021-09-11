import React from 'react';

const FilterButton = ( {handleGreaseButton, greased}) => {
    
    return (
        <button onClick={handleGreaseButton}>
            Filter Greased Hogs: {greased ? 'Turn Off' : 'Turn On'}
        </button>

    )
}

export default FilterButton;