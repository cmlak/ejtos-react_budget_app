import React from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const [currency, setCurrency] = useState('');
    
    

    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
                </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setCurrency(event.target.value)}>
                        <option defaultValue>Currency (£ Pound)</option>
                        <option value="Dollar" currency="dollar">$ Dollar</option>
                        <option value="Pound" currency="pound">£ Pound</option>
                        <option value="Euro" currency="euro">€ Euro</option>
                        <option value="Rupee" currency="ruppee">₹ Ruppee</option>
                   </select>
                   
                </div>
                </div>

        </div>
    );
};

export default Currency;
