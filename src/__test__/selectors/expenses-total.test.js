import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures';

test('should return 0 if no expenses', () => {
    const res = getExpensesTotal([]);
    expect(res).toBe(0);
});

test('should correctly add up expenses', () => {
    const res = getExpensesTotal([expenses[0]]);
    expect(res).toBe(300);
});

test('should correctly add up expenses', () => {
    const res = getExpensesTotal(expenses);
    expect(res).toBe(1000);
});