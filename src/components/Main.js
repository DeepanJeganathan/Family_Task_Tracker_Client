import Items from './Items';
import InputForm from './InputForm'
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { fetch_tasks } from '../redux/tasks/tasksActions';

function Main() {

    const dispatch = useDispatch()
    useEffect(() => dispatch(fetch_tasks()), [dispatch])

    return (<>
        <h2 className=" main-title p-3 text-primary">Tasks</h2>

        <InputForm />
        <Items />
    </>)
}

export default Main;