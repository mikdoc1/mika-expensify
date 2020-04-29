import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures';

let onAddExpenseSpy, historySpy, wrapper;
beforeEach(() => {
    onAddExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage onAddExpense={onAddExpenseSpy} history={historySpy}/>);
})

it('AddExpensePage should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

it('should handle submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(onAddExpenseSpy).toHaveBeenLastCalledWith(expenses[0]);
});