import { ExpensesSummary }  from '../../components/ExpensesSummary';
import React from 'react';
import { shallow } from 'enzyme';

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={200}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multy expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={5} expensesTotal={1200.34}/>);
    expect(wrapper).toMatchSnapshot();
});