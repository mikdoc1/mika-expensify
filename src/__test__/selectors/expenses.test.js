import selectExpenses from '../../selectors/expenses';
import moment from 'moment';


const expenses = [
    {
        id: '1',
        description: 'water',
        amount: 300,
        note: '',
        createdAt: 0
    },
    {
        id: '2',
        description: 'inet',
        amount: 200,
        note: '',
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        description: 'gum',
        amount: 500,
        note: '',
        createdAt: moment(0).add(4, 'days').valueOf()
    }
];



test('should filter by text', () => {
    const filter = {
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
        text: 'e'
    };
    const filteredExpenses = selectExpenses(expenses, filter);
    expect(filteredExpenses).toEqual([expenses[0], expenses[1]])
});

test('should filter by startDate', () => {
    const filter = {
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined,
        text: ''
    };
    const filteredExpenses = selectExpenses(expenses, filter);
    expect(filteredExpenses).toEqual([expenses[2], expenses[0]])
});

test('should filter by endDate', () => {
    const filter = {
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(3, 'days'),
        text: ''
    };
    const filteredExpenses = selectExpenses(expenses, filter);
    expect(filteredExpenses).toEqual([expenses[0], expenses[1]])
});

test('should filter by endDate', () => {
    const filter = {
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(3, 'days'),
        text: ''
    };
    const filteredExpenses = selectExpenses(expenses, filter);
    expect(filteredExpenses).toEqual([expenses[0], expenses[1]])
});

test('should filter by date', () => {
    const filter = {
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
        text: ''
    };
    const filteredExpenses = selectExpenses(expenses, filter);
    expect(filteredExpenses).toEqual([expenses[2], expenses[0], expenses[1]])
});

test('should filter by amount', () => {
    const filter = {
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
        text: ''
    };
    const filteredExpenses = selectExpenses(expenses, filter);
    expect(filteredExpenses).toEqual([expenses[2], expenses[0], expenses[1]])
});