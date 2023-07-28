import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext)
    const [ value, setValue] = useState(currency[1].value)
    const [ name, setName] = useState(currency[1].name)

    const handleItemClick = (event) => {
        setValue(event.target.getAttribute('data-value'));
        setName(event.target.getAttribute('data-name'));
      };

    return (
        <>
            <button class="btn btn-info dropdown-toggle" 
                    type="button" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false" 
                    value={value} 
                    name={name}>
                Currency ({value} {name})
            </button>
            <div class="dropdown-menu btn btn-info">
                {currency.map((item, index) => (
                    <div
                        key={index}
                        className="dropdown-item"
                        data-value={item.value}
                        data-name={item.name}
                        onClick={handleItemClick}
                        >
                        {item.value} {item.name}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Currency