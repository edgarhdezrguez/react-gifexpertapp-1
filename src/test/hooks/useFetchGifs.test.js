import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks';


describe('Tests in useFetchGifs hook.', () => {
    
    const category = 'Goku';


    test('should be returned the initial state.', async() => {
        
        
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs(category) );
        console.log(result);
         const { loading, data } = result.current;
        // const { loading, data } = useFetchGifs(category);
        await waitForNextUpdate();
        console.log(data, loading);

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
    
    test('should be return an array of img and loading in false', async() => {
        
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs(category) );
        await waitForNextUpdate();
        const { loading, data } = result.current;

        console.log(data, loading);

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
    

});
