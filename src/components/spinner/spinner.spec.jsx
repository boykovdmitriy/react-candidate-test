import React from 'react';
import {Spinner} from './index';
import {shallow} from 'enzyme/build/index';

describe('Spinner', () => {
  it('render Spinner', () => {
    const tree = shallow(<Spinner/>);
    expect(tree).toMatchSnapshot();
  });
});
