import React from 'react';
import {shallow} from 'enzyme';
import {
  BackIcon,
  ClockIcon,
  FavoriteIcon,
  HomeIcon,
  ListIcon,
  RepeatIcon,
  SearchIcon,
  TvIcon,
  UserIcon
} from './index';

describe('Icons', () => {
  it('render BackIcon', () => {
    const tree = shallow(<BackIcon/>);
    expect(tree).toMatchSnapshot();
  });

  it('render ClockIcon', () => {
    const tree = shallow(<ClockIcon/>);
    expect(tree).toMatchSnapshot();
  });

  it('render FavoriteIcon', () => {
    const tree = shallow(<FavoriteIcon/>);
    expect(tree).toMatchSnapshot();
  });

  it('render HomeIcon', () => {
    const tree = shallow(<HomeIcon/>);
    expect(tree).toMatchSnapshot();
  });

  it('render ListIcon', () => {
    const tree = shallow(<ListIcon/>);
    expect(tree).toMatchSnapshot();
  });

  it('render RepeatIcon', () => {
    const tree = shallow(<RepeatIcon/>);
    expect(tree).toMatchSnapshot();
  });

  it('render SearchIcon', () => {
    const tree = shallow(<SearchIcon/>);
    expect(tree).toMatchSnapshot();
  });

  it('render TvIcon', () => {
    const tree = shallow(<TvIcon/>);
    expect(tree).toMatchSnapshot();
  });

  it('render UserIcon', () => {
    const tree = shallow(<UserIcon/>);
    expect(tree).toMatchSnapshot();
  });
});