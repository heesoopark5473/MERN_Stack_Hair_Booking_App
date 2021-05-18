export default function(state={},action) {
    switch(action.type) {
        case 'GET_SALONS':
            return { ...state, list:action.payload }
        case 'GET_SALON':
            return { ...state, salon:action.payload }
        default:
            return state;
    }
}