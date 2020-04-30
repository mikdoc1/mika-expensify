const  getExpensesTotal = (expenses) => {
    if(expenses.length === 0) return 0;
    return expenses.reduce((sum, current) => {      
        return sum += current.amount
    }, 0);
};

export default getExpensesTotal




