import React from 'react';
import HogCard from './HogCard';

const HogCards = ( { hogs, sortCriteria } ) => {
    
    const sortHogs = () => {
        if (sortCriteria === 'Weight') {
            const sortedHogs = hogs.sort(function (a,b) {
                return a.weight - b.weight
            })
            return sortedHogs;
        }else if (sortCriteria === 'Name'){
            const sortedHogs = hogs.sort(function (a,b) {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if(nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            })
            return sortedHogs;
        }else{
            const sortedHogs = hogs
            return sortedHogs;
        }
    };

    const hoglist = sortHogs().map(hog => <HogCard key={hog.name} hog={hog} />)

    return (
        <div className="ui link cards">
            {hoglist}
        </div>
    )
}

export default HogCards;