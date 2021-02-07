import React from 'react'
import { shallow, configure } from 'enzyme';
import '@testing-library/jest-dom'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import GifGridItem from '../../components/GifGridItem';


configure({ adapter: new Adapter() });
describe('GifGridItem tests', () => {

    const id = "GRSnxyhJnPsaQy9YLn";
    const title = "Dragon Ball GIF by TOEI Animation UK" ;
    const url = "https://media1.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=0a7c9746d10r4nkrodijl02nh1q6lbcx2gk4e6vl1h6dfyti&rid=giphy.gif";
    const wrapper = shallow(<GifGridItem id={id} title={title} url={url}/>);
    
    test('should be show the component correctly', () => {

        expect(wrapper).toMatchSnapshot()

    })
    
})
