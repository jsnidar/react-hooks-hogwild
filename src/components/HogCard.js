import React, { useState } from 'react';
import HogDetails from './HogDetails';
import HideCardButton from './HideCardButton';

const HogCard = ({hog} ) => {
    const [showDetails, setShowDetails] = useState(false)
    const [hideHog, setHideHog] = useState(false)
    
    const handleHidePig = () => setHideHog(!hideHog)
    let display = hideHog ? 'none' : 'block';
    
    return (
        <div className="card" style={display={display}} onClick= {() => (setShowDetails(!showDetails))} >
            <img className='ui image' src={hog.image} alt="Picture of a pig."></img>
            <div>
                <div className='header'>{hog.name}</div>
            </div>
            
            <HogDetails display={showDetails ? 'block' : 'none'} hog={hog} />
            <HideCardButton handleHidePig={handleHidePig}/>
        </div>
    )
}

export default HogCard;