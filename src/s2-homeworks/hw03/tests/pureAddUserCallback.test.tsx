import {pureAddUserCallback, UserType} from "../HW3";
import {Dispatch, SetStateAction} from "react";


let initialState: UserType[]
const setUsers: Dispatch<SetStateAction<UserType[]>> = (value) => {
    if (typeof value === 'function') {
        initialState = value(initialState)
    } else {
        initialState = value
    }
}

beforeEach(() => {
    initialState = []
})

test('name 1', () => {
    pureAddUserCallback('name', setUsers, initialState)
    expect(initialState.length).toBe(1)
    expect(initialState[0].name).toBe('name')
    expect(!!initialState[0]._id).toBe(true)
})
