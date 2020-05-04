import { db } from '../firebase/firebase';



// ADD_EXPENSE
export const addExpense = expense => {
    return {
      type: 'ADD_EXPENSE',
      expense
    }
  }; 
export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      
      const {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
      } = expenseData;
      const expense = { description, note, amount, createdAt };
        
      return db.collection('users').doc(uid).collection('expenses').add(expense)
      .then((docRef) => {
        dispatch(addExpense({
          id: docRef.id,
          ...expense
        }))
      })
    }
  }


  // REMOVE_EXPENSE
 export const removeExpense = ( id = '') => ({
    type: 'REMOVE_EXPENSE',
    id
  });
  export const startRemoveExpense = ({ id }) => {
    return (dispatch, getState) => {      
      const uid = getState().auth.uid
      return db.collection('users').doc(uid).collection('expenses').doc(id).delete()
      .then(() => {
          dispatch(removeExpense(id))
      });
    }
  }

  
  // EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
  });
export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db.collection('users').doc(uid).collection('expenses').doc(id).update(updates)
    .then(() => {
      dispatch(editExpense(id, updates))
    });
  }
};


export const setExpenses = expenses => {
  return {
    type: 'SET_EXPENSES',
    expenses
  }
};
export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db.collection('users').doc(uid).collection('expenses').get()
    .then(snpashot => {
      const expenses = [];
      snpashot.docs.forEach(doc => {
        expenses.push({
          id: doc.id,
          ...doc.data()
        })
      })

      dispatch(setExpenses(expenses));
      });
    }
};




