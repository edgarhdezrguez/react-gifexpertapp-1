import React from 'react'
import { shallow, configure } from 'enzyme';
import '@testing-library/jest-dom'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import AddCategory from '../../components/AddCategory';

configure({ adapter: new Adapter() });
describe('Testing AddCategory Component', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>),
        input,
        form;

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
        input = wrapper.find('input');
        form = wrapper.find('form');
    });

    test('should be show correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should be change the textbox', () => {
        const value = 'Hi World';

        input.simulate('change', { target: { value } });

        //console.log(wrapper.find('p').text().trim());
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('should not be posted the information with submit', () => {
        
        form.simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();

    });
    

    test('should be call setCategories funct and clear the textbox value', () => {
       
        const value = 'It called';
        input = wrapper.find('input').simulate('change', { target: { value } });
        form = wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );
        expect(input.prop('value').trim()).toBe('');
    });
});
