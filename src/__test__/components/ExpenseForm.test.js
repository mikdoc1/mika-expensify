import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures';
import moment from 'moment';

it('ExpeseForm should render correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
});

it('ExpeseForm should render correctly with state', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>)
    expect(wrapper).toMatchSnapshot();
});

it('ExpeseForm should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

it('should set input value on description', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(0).simulate('change', {
        target: {value: 'New Description'} 
    });
    expect(wrapper.state('description')).toBe('New Description');
    expect(wrapper).toMatchSnapshot();
});

it('should set textarea value on note', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
    wrapper.find('textarea').simulate('change', {
        target: {value: 'New Note'} 
    });
    expect(wrapper.state('note')).toBe('New Note');
    expect(wrapper).toMatchSnapshot();
});

it('should set amount if valid input', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', {
        target: {value: '123.45'} 
    });
    expect(wrapper.state('amount')).toBe('123.45');
    expect(wrapper).toMatchSnapshot();
});

it('should not set amount if input value invalid', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', {
        target: {value: '123.456'} 
    });
    expect(wrapper.state('amount')).toBe('');
    expect(wrapper).toMatchSnapshot();
});

it('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: parseFloat(expenses[0].amount, 10) * 100,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    })
});

it('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').children().at(2).prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now)
});

it('should set calendar focus on change', () => {
    const focused = {focused: true};
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').children().at(2).prop('onFocusChange')(focused);
    expect(wrapper.state('isCalendarFocused')).toEqual(focused.focused)
});



