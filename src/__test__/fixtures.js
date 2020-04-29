import moment from 'moment'

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
        createdAt: 0
    },
    {
        id: '3',
        description: 'gum',
        amount: 500,
        note: '',
        createdAt: 0
    }
];

export const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

export const filtersByAmount = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
};

export const altFilters = {
    text: 'water',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment().add(3, 'days')
};


export default expenses;