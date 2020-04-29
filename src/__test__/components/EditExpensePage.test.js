import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures';

let onEditExpenseSpy, onDeleteExpenseSpy, historySpy, wrapper;
beforeEach(() => {
    onEditExpenseSpy = jest.fn();
    onDeleteExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage  onEditExpense={onEditExpenseSpy} 
                                        onDeleteExpense={onDeleteExpenseSpy}
                                        history={historySpy}
                                        expense={expenses[0]}/>);
});

it('EditExpensePage should render correctly', () => {                                       
    expect(wrapper).toMatchSnapshot();
});

it('EditExpensePage should edit expense in expenses array', () => {                                              
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(onEditExpenseSpy).toHaveBeenLastCalledWith(expenses[0], expenses[0].id);
});

it('EditExpensePage should delete expense in expenses array', () => {
    wrapper.find('button').simulate('click');
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(onDeleteExpenseSpy).toHaveBeenLastCalledWith(expenses[0].id);
});