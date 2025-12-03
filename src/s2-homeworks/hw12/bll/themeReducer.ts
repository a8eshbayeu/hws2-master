import { combineReducers, configureStore } from '@reduxjs/toolkit'

export type ThemeStateType = {
    themeId: number;
}

export type ThemeActionType = {
    type: 'SET_THEME_ID';
    id: number
}

const initState: ThemeStateType = {
    themeId: 1,
}

export const themeReducer = (state: ThemeStateType = initState, action: ThemeActionType): ThemeStateType => { // fix any
    switch (action.type) {
        // дописать
case 'SET_THEME_ID':
    return { ...state, themeId: action.id }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ThemeActionType => ({ type: 'SET_THEME_ID', id }) // fix any

const rootReducer = combineReducers({
    theme: themeReducer,
   })

export const store = configureStore({reducer: rootReducer})

export type AppStateType = ReturnType<typeof rootReducer>