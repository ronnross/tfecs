import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });
describe('<App />', () => {
  it('renders 1 <App /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders 1 <App /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.text()).toEqual('Hello React!');
  });
});
