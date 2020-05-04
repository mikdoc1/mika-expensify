import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

it('renders correctly', () => {
  const tree = shallow(<Header logoutStart = {() => {}}/>)  
  expect(tree).toMatchSnapshot();
  
});

it('should call logoutStart on button click', () => {
  const onLogoutSpy = jest.fn();
  const tree = shallow(<Header onLogout = {onLogoutSpy}/>)  
  tree.find('button').simulate('click', {
    preventDefault: () => {}
  });
  expect(onLogoutSpy).toHaveBeenLastCalledWith();
  expect(tree).toMatchSnapshot(); 
});



