import expensesReducer from '../../reducers/expenses';

const expense = {
    description: 'inet',
    amount: 300,
    note: '',
    id: '1as',
    createdAt: 0
};
const expenses = [
    {
        description: 'inet',
        amount: 600,
        note: '',
        id: '1as',
        createdAt: 0
    },
    {
        description: 'water',
        amount: 100,
        note: '',
        id: '1ds',
        createdAt: 200
    },
    {
        description: 'gas',
        amount: 200,
        note: '',
        id: '1ss',
        createdAt: 1000
    },
];

test('expensesReucer should set default value for expenses', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([])
});

test('expensesReucer should add expense', () => {
    const state = expensesReducer(undefined, {type: 'ADD_EXPENSE', expense});
    expect(state).toEqual([
        {
            description: 'inet',
            amount: 300,
            note: '',
            id: '1as',
            createdAt: 0
        }
    ])
});

test('expensesReucer should remove expense', () => {
    const state = expensesReducer(expenses, {type: 'REMOVE_EXPENSE', id: '1as'});
    expect(state).toEqual([expenses[1], expenses[2]])
});

test('expensesReucer should edit expense', () => {
    const state = expensesReducer(expenses, {type: 'EDIT_EXPENSE', id: '1as'});
    expect(state[0]).toEqual(
        {
            description: 'inet',
            amount: 600,
            note: '',
            id: '1as',
            createdAt: 0
        },
    )
});

