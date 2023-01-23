import React, { useState } from 'react';
import axios from 'axios';

const CreateAd = () => {
    const [formData, setFormData] = useState({
        image: '',
        name: '',
        details: '',
        pixelWidth: '',
        pixelHeight: '',
        disclaimer: '',
        termsAndConditions: '',
        cost: ''
    });
    const { image, name, details, pixelWidth, pixelHeight, disclaimer, termsAndConditions, cost } = formData;


    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="image">Image:</label>
                <input type="file" id="image" name="image" onChange={onChange} required />
            </div>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={name} onChange={onChange} required />
            </div>
            <div>
                <label htmlFor="details">Details:</label>
                <textarea id="details" name="details" value={details} onChange={onChange} required />
            </div>
            <div>
                <label htmlFor="pixelWidth">Width:</label>
                <input type="number" id="pixelWidth" name="pixelWidth" value={pixelWidth} onChange={onChange} required />
            </div>
            <div>
                <label htmlFor="pixelHeight">Height:</label>
                <input type="number" id="pixelHeight" name="pixelHeight" value={pixelHeight} onChange={onChange} required />
            </div>
            <div>
                <label htmlFor="disclaimer">Disclaimer:</label>
                <input type="text" id="disclaimer" name="disclaimer" value={disclaimer} onChange={onChange} required />
            </div>
            <div>
                <label htmlFor="termsAndConditions">Terms and Conditions:</label>
                <input type="checkbox" id="termsAndConditions" name="termsAndConditions" value={termsAndConditions} onChange={onChange} required />
            </div>
            <div>
                <label htmlFor="cost">Cost:</label>
                <input type="number" id="cost" name="cost" value={cost} onChange={onChange} required />
            </div>
            <div>
                <button type="submit">Create Advertisement</button>
            </div>
        </form>
    );
}

const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

const onSubmit = async e => {
    e.preventDefault();
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const res = await axios.post('/api/advertisements', formData, config);
        alert(`Advertisement created successfully with id: ${res.data._id}`);
    } catch (err) {
        console.error(err.response.data);
    }
};

export default CreateAd;