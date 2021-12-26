import React, { useContext, useState, useEffect, useRef } from 'react';
import Context from '../context/index';
import {AiFillCaretLeft, AiFillCaretRight, AiTwotoneCalendar } from 'react-icons/ai';
import { addDays, format, subtractDays } from 'date-fns';

// internal import
import Topbar from './Topbar';

const Schedule = () => {
    const context = useContext(Context.Context);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedView, setSelectedView] = useState('month');
    const [selectedBooking, setSelectedBooking] = useState('');
    const search = useRef();
    const bookings = [];

    useEffect(() => {
        // bookings = context.actions.getBookings('Some Filter');
    }, [selectedDate])

    const changeDate = ( newDate ) => {
        setSelectedDate( newDate );
    };

    const changeView = ( newView ) => {
        setSelectedView( newView );
    };

    const searchBookings = () => {
        console.log(search);
    };

    return (
        <div className="content-container">
            <Topbar breadcrumb={"Schedule"}/>

            <div className="page-container">
                <div className="schedule-control">
                    <AiFillCaretLeft onClick={() => changeDate(selectedDate - 1)} />
                    {format(selectedDate, "EEEE, dd MM yyyy")}
                    <AiTwotoneCalendar />
                    <AiFillCaretRight onClick={() => changeDate(selectedDate + 1)} />
                    <div className="button-view-container">
                        <button className={`${selectedView === 'month' ? 'selected-button' : ''}`} onClick={() => changeView('month')}>Month</button>
                        <button className={`${selectedView === 'week' ? 'selected-button' : ''}`} onClick={() => changeView('week')}>Week</button>
                    </div>
                    <div className="search">
                        <input 
                            id="search"
                            name="search"
                            type="text"
                            value={search}
                            onChange={() => searchBookings(search)}

                            placeholder="Search..."/>
                    </div>
                </div>

                <div className="bookings-container">
                    <div className="bookings-view">
                        bookings view
                    </div>
                    <div className="bookings-detail">
                        bookings detail
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule;
