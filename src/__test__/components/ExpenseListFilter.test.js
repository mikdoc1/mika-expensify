import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilter } from '../../components/ExpenseListFilter';
import { filters, altFilters, filtersByAmount } from '../fixtures';
import moment from 'moment';

let wrapper, onFilterByAmountSpy, onFilterByDateSpy, onFilterByTextSpy, onDatesStartChangeSpy, onDatesEndChangeSpy;

beforeEach(() => {
    onFilterByAmountSpy = jest.fn();
    onFilterByDateSpy = jest.fn();
    onFilterByTextSpy = jest.fn();
    onDatesStartChangeSpy = jest.fn();
    onDatesEndChangeSpy = jest.fn();
    wrapper = shallow(<ExpenseListFilter    onFilterByAmount={onFilterByAmountSpy}
                                            onFilterByDate={onFilterByDateSpy}
                                            onFilterByText={onFilterByTextSpy}
                                            onDatesStartChange={onDatesStartChangeSpy}
                                            onDatesEndChange={onDatesEndChangeSpy}
                                            filters={filters}/>);
});


it('ExpenseListFilter should render correctly', () => {                                   
    expect(wrapper).toMatchSnapshot();
});

it('ExpenseListFilter should render correctly wit altFilters ', () => { 
    wrapper.setProps({
        filters: altFilters
    })                                  
    expect(wrapper).toMatchSnapshot();
});

it('ExpenseListFilter should handle text change', () => { 
    wrapper.setProps({
        filters: altFilters
    })                                  
    wrapper.find('input').simulate('change', {
        target: { value: altFilters.text}
    });
    expect(onFilterByTextSpy).toHaveBeenLastCalledWith(altFilters.text);
});

it('ExpenseListFilter should sort by date', () => {                                
    wrapper.find('select').simulate('change', {
        target: { value: filters.sortBy}
    });
    expect(onFilterByDateSpy).toHaveBeenLastCalledWith();
});

it('ExpenseListFilter should handle date changes', () => {   
    const startDate = moment(0).add(4, 'days');
    const endDate = moment(0).add(8, 'days');

    wrapper.find('div').children().at(2).prop('onDatesChange')({startDate, endDate});
    expect(onDatesStartChangeSpy).toHaveBeenLastCalledWith(startDate);
    expect(onDatesEndChangeSpy).toHaveBeenLastCalledWith(endDate);
});

it('ExpenseListFilter should handle date focus changes', () => {   
    const calFocused = null

    wrapper.find('div').children().at(2).prop('onFocusChange')(calFocused);
    expect(wrapper.state('isCalendarFocused')).toBe(calFocused)
});