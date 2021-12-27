import React, { useContext, useState, useEffect, useRef } from 'react';
import Context from '../context/index';
import {AiFillCaretLeft, AiFillCaretRight, AiTwotoneCalendar } from 'react-icons/ai';
import { add, format, subtractDays } from 'date-fns';

// internal import
import Topbar from './Topbar';
import CalendarMonth from './CalendarMonth';

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
        console.log(search.current.value);
    };

    return (
        <div className="content-container">
            <Topbar breadcrumb={"Schedule"}/>

            <div className="page-container">
                <div className="schedule-control">
                    <AiFillCaretLeft onClick={() => changeDate( add(selectedDate, {days: -1}) )} />
                    {format(selectedDate, "EEEE, dd MMM yyyy")}
                    <AiTwotoneCalendar />
                    <AiFillCaretRight onClick={() => changeDate( add(selectedDate, {days: 1}) )} />
                    <div className="button-view-container">
                        <button className={`${selectedView === 'month' ? 'selected-button' : ''}`} onClick={() => changeView('month')}>Month</button>
                        <button className={`${selectedView === 'week' ? 'selected-button' : ''}`} onClick={() => changeView('week')}>Week</button>
                    </div>
                    <div className="search">
                        <input 
                            id="search"
                            name="search"
                            type="text"
                            ref={search}
                            onChange={() => searchBookings()}
                            placeholder="Search..."
                        />
                    </div>
                </div>

                <div className="bookings-container">
                    <div 
                        className={`bookings-view-${selectedBooking === '' ? 'open' : 'close'}`} 
                        onClick={() => setSelectedBooking('test')}
                    >
                        <div className={`bookings-month ${selectedView === 'month' ? '' : 'hide'}`}>
                            <CalendarMonth />
                        </div>
                        <div className={`booings-week ${selectedView === 'week' ? '' : 'hide'}`}>
                            week view
                        </div>
                    </div>
                    <div className={`bookings-detail-${selectedBooking === '' ? 'close' : 'open'}`}>
                        bookings detail
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule;
