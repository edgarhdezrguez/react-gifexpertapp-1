import React from 'react';
import { shallow, configure } from 'enzyme';
import '@testing-library/jest-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import GifExpertApp from '../GifExpertApp';


configure({ adapter: new Adapter() });
describe('Testing GifExpertApp', () => {
    
    test('should be show correctly', () => {
        
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();

    });

    test('should be show a list of categories', () => {
        
        const categories = ['Dragon ball', 'Boku no Hero'];

        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
        
    })
    
    




});
