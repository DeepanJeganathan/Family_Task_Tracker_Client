import { FETCH_TASK_FAIL, FETCH_TASK_REQUEST, FETCH_TASK_SUCCESS } from "./taskTypes";
import axios from 'axios'

// http://localhost:54957/api/person
const baseUrl = "http://localhost:54957/api/person";

export const fetch_task_request = () => {

    return {
        type: FETCH_TASK_REQUEST
    }
}
export const fetch_task_fail = (errorMsg) => {

    return {
        type: FETCH_TASK_FAIL,
        payload: errorMsg
    }
}

export const fetch_task_success = (data) => {

    return {
        type: FETCH_TASK_SUCCESS,
        payload: data
    }
}

export const fetch_tasks = () => {

    return (dispatch) => {
        console.log("request made")
        dispatch(fetch_task_request())
        axios.get(baseUrl).then(res => dispatch(fetch_task_success(res.data))).catch(err => dispatch(fetch_task_fail(err.msg)));
    }
}