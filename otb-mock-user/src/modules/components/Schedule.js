import React, { useContext, useEffect } from 'react';
import { Context } from '../context/Context';

const Schedule = ({ location }) => {
    const context = useContext(Context);
    const schedule = [];

    useEffect(() => {
        context.actions.getSchedule()
            .then(res => schedule.push(JSON.parse(res)))
            .catch(err => {
                console.log(err)
            });
    }, [location])

    return (
        <div>
            This is for the schedule
        </div>
    )
}

export default Schedule;
