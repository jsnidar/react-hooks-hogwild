import React, { useState } from 'react';

const AddHogForm = ({handleFormSubmit}) => {

const [isGreased, setIsGreased] = useState(true)

const onSubmit = (event) => {
    event.preventDefault();
    const newHogObj = {
        name: event.target.name.value,
        weight: event.target.weight.value,
        specialty: event.target.specialty.value,
        greased: isGreased,
        'highest medal achieved': event.target.medal.value,
        image: event.target.image.value
    }
    return handleFormSubmit(newHogObj);
}

    return (
        <form onSubmit={onSubmit} className='ui form' >
            <h4 className='ui dividing header'>Create New Hog</h4>
            <div className='field'>
                <label>Name: </label>
                <input type='text' name='name'></input> 
            </div>
            <div className='field'>
                <label>Weight: </label>
                <input type='text' name='weight'></input>
            </div>
            <div className='field'>
                <label>Specialty: </label>
                <input type='text' name='specialty'></input>
            </div>
            <div className='field'>
                <label>Image URL: </label>
                <input type='url' name='image'></input>
            </div>
            <div className='field'>
                <label>Highest Medal Achieved: </label>
                <input type='text' name='medal'></input>
            </div>
            <div className='field'>
                <label>Greased:</label>
                <select onChange={(event) => setIsGreased(event.target.value)}>
                    <option>true</option>
                    <option>false</option>
                </select> 
            </div>
            <button className='ui button' type='submit'>Add Hog</button>
        </form>
    )
}

export default AddHogForm;