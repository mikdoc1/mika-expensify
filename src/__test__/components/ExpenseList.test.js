import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures';


it('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>); 
    expect(wrapper).toMatchSnapshot()  
});

it('should render ExpenseList with empty expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>); 
    expect(wrapper).toMatchSnapshot()  
});

























