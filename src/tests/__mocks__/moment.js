//import moment from 'moment' //This is wrong as this function will again call itself causing stacked trace error

const moment = jest.requireActual('moment')   //Check jest.io manual mocks document

export default (timestamp = 0) => {
    return moment(timestamp)
}