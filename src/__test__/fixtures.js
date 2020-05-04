import moment from 'moment'

const expenses = [
    {
        id: 'water',
        description: 'water',
        amount: 300,
        note: 'water bill',
        createdAt: 402000
    },
    {
        id: 'inet',
        description: 'inet',
        amount: 200,
        note: 'inet bill',
        createdAt: 3303000
    },
    {
        id: 'gum',
        description: 'gum',
        amount: 500,
        note: 'gum bill',
        createdAt: 2333000
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