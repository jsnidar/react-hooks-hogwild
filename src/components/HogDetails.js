import React from  'react';

const HogDetails = ({hog, display})=> {
   
    return (
        <div className='description' style={display={display}}>
            <p>{hog.name} {hog.greased ? "is" : "isn't"} greased and weighs {hog.weight} lbs.. {hog.name}'s specialty is {hog.specialty.toLowerCase()} and the highest medal {hog.name} has earned is {hog['highest medal achieved']}!</p>
    </div> 
    )
}

export default HogDetails;