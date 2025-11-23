export type LoadingStateType = {
    isLoading: boolean;
}

const initState: LoadingStateType = {
    isLoading: false,
}

export const LOADING = 'LOADING'

export const loadingReducer = (state = initState, action: LoadingActionType): LoadingStateType => { // fix any
    switch (action.type) {
        case LOADING: // пишет студент  // need to fix
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}

type LoadingActionType = {
    type: typeof LOADING
    payload: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: LOADING,
    payload: isLoading,
})
