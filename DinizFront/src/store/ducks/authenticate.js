import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    logar: ['data'],
});

const INITIAL_STATE = [{
    token: '',
    admin: Boolean
}]

const logar = (state = INITIAL_STATE, action) => (
    {   
        token: action.token,
        admin: action.admin,
    }
)

export default createReducer(INITIAL_STATE, {
    [Types.LOGAR]: logar
})


  