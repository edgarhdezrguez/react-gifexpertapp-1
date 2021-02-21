import React from 'react'
import { shallow, configure } from 'enzyme';
import '@testing-library/jest-dom'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import GifGridItem from '../../components/GifGridItem';


configure({ adapter: new Adapter() });
describe('GifGridItem tests', () => {

    const title = "Dragon Ball GIF by TOEI Animation UK" ;
    const url = "https://media1.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=0a7c9746d10r4nkrodijl02nh1q6lbcx2gk4e6vl1h6dfyti&rid=giphy.gif";
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);
    
    test('should be show the component correctly', () => {

        expect(wrapper).toMatchSnapshot()

    });

    test('should be have a parragraph with a title', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

    });

    test('should be an attr src equal to url and it should be an att alt equal to title', () => {
        
        const img = wrapper.find('img');

        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);
    });

    test('should be animate__fadeIn class in parent div', () => {
        
        const div = wrapper.find('div');
        const classFadeIn = 'animate__fadeIn';
        const divClassName = div.prop('className');

        expect(divClassName).toContain(classFadeIn);
        expect(true).toBe(divClassName.includes(classFadeIn));
    });
    
    
    
    
})
