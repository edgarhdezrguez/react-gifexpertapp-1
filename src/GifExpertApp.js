
import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({defaultCategories = []}) => {

// const categories = ['One punch', 'Boku no Hero Academy', 'Dragon ball'];
    // const [categories, setCategories] = useState(['Dragon ball']);
    const [categories, setCategories] = useState(defaultCategories);
    
    // const handleAdd = () => {
    //     const newSerie = document.querySelector("#serie2Add").value;
    //     // setCategories([...categories, newSerie]);
    //     setCategories(categs => [...categs, newSerie]);
    // };
    
    return (
        <>
            <h2>GifExpertApp</h2>
            {/* <input type="text" name="addSerie" id="serie2Add"/>
            <button onClick={handleAdd}> Add </button> */}
            <AddCategory setCategories={setCategories}/>

            <hr/>
            <ol>
                {categories.map((category) => (
                <GifGrid 
                    key={category} 
                    category={category}/>
                ))}
            </ol>
        </>
    );

};

export default GifExpertApp;