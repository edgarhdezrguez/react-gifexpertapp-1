import React, {useState} from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {
    // const [categories, setCategories] = catgs;
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if (inputValue.trim().length > 0){
            setCategories(categories =>  [inputValue, ...categories]);
            setInputValue('');
        } else 
            alert("Value dont be empty");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue}
                onChange={handleInputChange}
                name="addSerie" 
                id="serie2Add"/>
            {/* <button onClick={handleAdd}> Add </button> */}
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
