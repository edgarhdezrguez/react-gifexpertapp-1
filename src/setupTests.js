// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));


/*
    1. npm install --save-dev enzyme
    2. npm install --save-dev --legacy-peer-deps @wojtekmaj/enzyme-adapter-react-17
    3. npm install --save-dev enzyme-to-json 
    4. maybe we need install react with npm i react

*/