export default function(state={}, action) {
    switch(action.type) {
        case 'USER_LOGIN':
            return { 
                ...state, 
                login: action.payload 
            }
        case 'USER_AUTH':
            return { 
                ...state, 
                login: action.payload 
            }
        case 'USER_REGISTER':
            return {
                ...state,
                register : action.payload.success,
                message  : action.payload.message
            }
        default:
            return state;
    }
}