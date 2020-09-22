import {login, logout} from '../../actions/auth'

test('Should generate login action object',() => {
    const uid = '123acd'
    const action = login(uid)
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('Should ',() => {
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})