let initialState = {
    data: 0
}
const dummyData = (state = initialState, action)=>{
    console.log(action)
    switch (action.type) {
        case "ADD": return Object.assign({}, state, {data: state.data+1})
        case "DELETE": return Object.assign({}, state, {data: state.data-1})
        default: return state
    }
}

export default dummyData;