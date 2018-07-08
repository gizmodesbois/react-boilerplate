import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './app';

configure({ adapter: new Adapter() });

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Should exist', () => {
    expect(wrapper).toBeTruthy();
  });
  
  it('Should have one heading', () => {
    expect(wrapper.find('#main-title').type()).toEqual('h1');
  });
});