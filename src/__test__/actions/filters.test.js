import moment from 'moment';
import * as actions from '../../actions/filters';

test('setTextFilter', () => {
    const action = actions.setTextFilter('water');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'water'
    })
});

test('sortByDate', () => {
    const action = actions.sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    })
});

test('sortByAmount', () => {
    const action = actions.sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    })
});

test('setStartDate', () => {
    const action = actions.setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('setEndDate', () => {
    const action = actions.setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});
