import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';


it('ExpensesDashboardPage should render tcomponent with 404 error', () => {
    const wrapper = shallow(<NotFoundPage/>); 
    expect(wrapper).toMatchSnapshot()  
});