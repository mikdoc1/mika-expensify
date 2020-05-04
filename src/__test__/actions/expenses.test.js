import * as actions from '../../actions/expenses';
import expenses from '../fixtures';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { db } from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const batch = db.batch()
 
const expensesData = {};
expenses.forEach(({ id , description, amount, note, createdAt }, index) => {
    expensesData[id] = { description, amount, note, createdAt}
    const docRef = db.collection("expenses").doc(id);
    batch.set(docRef, expensesData[id]); 
    if(expenses.length === index + 1) {
        batch.commit(() => done())
    }
}); 


test('removeExpense function should return object', () => {
    const action = actions.removeExpense({id: '123asd'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123asd'
    });
});

test('addExpense function should return object', () => {
    const action = actions.addExpense(expenses[0]);      
    const expense = expenses[0]
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense
    });
});

test('should add expesne to datasore and store', (done) => {   
    const store = createMockStore({});
    
    const expenseData = {
        description: 'internet',
        amount: 2000,
        createdAt: 1588411218234,
        note: 'inet bill'
    };

    store.dispatch(actions.startAddExpense(expenseData))
        .then(() => {
        const actions = store.getActions(); 

        expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseData
                }
            });

        return db.collection('expenses').doc(actions[0].expense.id).get()
        })
        .then(snpashot => {
            expect(snpashot.data()).toEqual({
                ...expenseData
            });
            done();
        });
});

test('should add expesne to datasore and store with empty data', (done) => {   
    const store = createMockStore({});

    const expenseDefaults = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };

    store.dispatch(actions.startAddExpense({}))
        .then(() => {
            const actions = store.getActions(); 
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseDefaults
                }
            });

        return db.collection('expenses').doc(actions[0].expense.id).get()
        })
        .then(snpashot => {
            expect(snpashot.data()).toEqual({
                ...expenseDefaults
            });
            done();
        }); 
});

// test('addExpense function with empty arg should return object', () => {
//     const action = actions.addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0,
//             id: expect.any(String)
//         }
//     });
// });

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