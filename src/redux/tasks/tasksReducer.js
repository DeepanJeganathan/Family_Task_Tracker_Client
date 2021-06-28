import { FETCH_TASK_FAIL, FETCH_TASK_REQUEST, FETCH_TASK_SUCCESS } from "./taskTypes"

const initalState = {
    loading: false,
    data: [],
    error: ''
}

const tasksReducer = (state = initalState, action) => {

    switch (action.type) {
        case FETCH_TASK_REQUEST:
            return { ...state, loading: true }
        case FETCH_TASK_SUCCESS:
            console.log(action.payload)
            return { ...state, loading: false, data: action.payload }
        case FETCH_TASK_FAIL:
            console.log(action.payload)
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }

}

export default tasksReducer