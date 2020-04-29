import * as actions from '../../actions/expenses';

test('removeExpense function should return object', () => {
    const action = actions.removeExpense({id: '123asd'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123asd'
    });
});

test('addExpense function should return object', () => {
    const action = actions.addExpense({ description: 'water',
                                        note: '',
                                        amount: 300,
                                        createdAt: 123456});      
                                        

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: 'water',
            note: '',
            amount: 300,
            createdAt: 123456
        }
    });
});

test('addExpense function with empty arg should return object', () => {
    const action = actions.addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});

test('removeExpense function should return object', () => {
    const action = actions.editExpense('123asd', {description: 'internet'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: expect.any(String),
        updates: {
            description: 'internet',
        }
    });
});