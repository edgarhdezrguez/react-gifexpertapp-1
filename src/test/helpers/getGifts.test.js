import { getGifts } from "../../helpers/getGifts";


describe('Test with getGifs Fetch', () => {
    

    test('should be return 10 items', async() => {
          const categoryTest = 'Dragon ball Super';
        //   const imgsTest= [];
          const gifts = await getGifts(categoryTest);
        
        expect(gifts.length).toBe(10);
          console.log(gifts);
    });
    
    test('should be return 0 items', async() => {
        const categoryTest = '';
      //   const imgsTest= [];
        const gifts = await getGifts(categoryTest);
      
      expect(gifts.length).toBe(0);
        console.log(gifts);
  });

});
