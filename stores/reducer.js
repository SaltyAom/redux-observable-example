const reducer = (state, action) => {
    switch(action.type){
        case "PING":
            return state.merge({
                isPinging: true
            })

        case "PONG":
            return state.merge({
                isPinging: false
            })

        case "UPDATE":
            return state.merge({
                counter: action.payload.counter
            })

        default:
            return state
    }
}

export default reducer