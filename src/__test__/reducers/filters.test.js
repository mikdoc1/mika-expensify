import filterReducer from '../../reducers/filters';
import moment from  'moment';

const initState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

test('should define a default filter values', () => {
    const state = filterReducer(undefined, {type: "@@INIT"});
    expect(state).toEqual({
        ...initState
    })
});

test('should set setTextFilter', () => {
    const state = filterReducer(undefined, {type: "SET_TEXT_FILTER", text: 'water'});
    expect(state.text).toBe('water')
});

test('should set setByAmount', () => {
    const state = filterReducer(undefined, {type: "SORT_BY_AMOUNT", sortBy: 'amount'});
    expect(state.sortBy).toBe('amount')
});

test('should set setByDate', () => {
    const state = filterReducer(undefined, {type: "SORT_BY_DATE", sortBy: 'date'});
    expect(state.sortBy).toBe('date')
});

test('should set setStartDate', () => {
    const initState = {
        startDate: moment(),
    }    
    const state = filterReducer(undefined, {type: "SET_START_DATE", startDate: initState.startDate});
    expect(state.startDate).toBe(initState.startDate)
});

test('should set setEndDate', () => {
    const initState = {
        endDate: moment()
    }    
    const state = filterReducer(undefined, {type: "SET_END_DATE", endDate: initState.endDate});
    expect(state.endDate).toEqual(initState.endDate)
});