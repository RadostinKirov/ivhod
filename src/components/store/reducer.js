export default function reducer(state = {
    data: []
}, action) {
    if (action.type == 'validation error') {
        return {
            data: action.payload.data,
        }
    }
}