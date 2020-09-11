import moment from 'moment'

export const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 25,
    createdAt: 0
},{
    id: '2',
    description: 'Rent',
    note: '',
    amount: 2500,
    createdAt: moment(0).subtract(4,'days').valueOf()
},{
    id: '3',
    description: 'Water Bill',
    note: '',
    amount: 120,
    createdAt: moment(0).add(4,'days').valueOf()
}]