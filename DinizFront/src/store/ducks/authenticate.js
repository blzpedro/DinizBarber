import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    logar: ['data'],
});

const INITIAL_STATE = [{
    token: ''
}]

const logar = (state = INITIAL_STATE, action) => (
    {   
        ...state,
        token: action.token,
    }
)

export default createReducer(INITIAL_STATE, {
    [Types.LOGAR]: logar
})


  