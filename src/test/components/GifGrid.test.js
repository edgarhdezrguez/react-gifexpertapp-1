import React from 'react';
import { shallow, configure } from 'enzyme';
import { GifGrid } from "../../components/GifGrid";
import '@testing-library/jest-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { useFetchGifs } from '../../hooks/useFetchGifs';
configure({ adapter: new Adapter() });
jest.mock('../../hooks/useFetchGifs');

describe('Tests in GifGrid Component.', () => {

    const value = 'Goku';
    

    test('should be show the component correctly', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={value} />);
        expect(wrapper).toMatchSnapshot();

    })
    
    test('should be show items when images load with useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost:8080/any/thing.jpg',
            title: 'Anything'
        },
        {
            id: 'ABCD',
            url: 'https://localhost:8080/any/thing.jpg',
            title: 'Anything 2'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={value} />);
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    });
    



})
