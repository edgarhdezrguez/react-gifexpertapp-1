import React, {useState} from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {
    // const [categories, setCategories] = catgs;
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        // console.log('handleInputChange call');
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        // console.log('handleSubmit called', inputValue);

        if (inputValue.trim().length > 0){
            setCategories(categories =>  [inputValue, ...categories]);
            setInputValue('');
            // console.log('in if');
        } else {
            //alert("Value dont be empty");
            console.log('in else');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>{ inputValue }</p>
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
