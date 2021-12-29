import React, { useContext, useState, useEffect, useRef, Fragment } from 'react';
import Context from '../context/index';
import {AiFillCaretLeft, AiFillCaretRight, AiTwotoneCalendar } from 'react-icons/ai';
import { add, format } from 'date-fns';

// internal import
import Topbar from './Topbar';
import CalendarMonth from './CalendarMonth';
import Form from './Form';

const Schedule = () => {
    const context = useContext(Context.Context);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedView, setSelectedView] = useState('month');
    const [selectedBooking, setSelectedBooking] = useState('');
    const [newBooking, setNewBooking] = useState('');
    const search = useRef();
    const bookings = [];
    const errors = [];

    // Variables for new booking
    const booking = {};
    const customerName = useRef();
    const coachName = useRef();
    const startDateTime = useRef();
    const endDateTime = useRef();
    const sessionType = useRef();
    const repeat = useRef();

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

    const displayModal = () => {
        setNewBooking({
            customerName: "",
            date: new Date(),
            session: false
        });
    };

    const change = variable => {
        const name = variable.current.id;
        const value = variable.current.value;
        booking[name] = value;
    };

    const cancel = () => {
        setNewBooking('');
    };

    const submit = e => {
        e.preventDefault();
        context.actions.createBooking( booking );
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
                    <button onClick={() => displayModal()}>Add Booking</button>
                    <div className="modal-container">
                        <Form
                            header={"Add New Booking"}
                            display={newBooking !== '' ? true : false}
                            cancel={() => cancel()}
                            errors={errors}
                            submit={() => submit()}
                            submitButtonText="Add Booking"
                            elements={() => (
                                <Fragment>
                                    <label htmlFor="customerName">Customer Name</label>
                                    <input 
                                        id="customerName"
                                        name="customerName"
                                        type="text"
                                        ref={customerName}
                                        onChange={() => change(customerName)}
                                    />
                                    <label htmlFor="coachName">Coach Name</label>
                                    <input 
                                        id="coachName"
                                        name="coachName"
                                        type="text"
                                        ref={coachName}
                                        onChange={() => change(coachName)}
                                    />
                                    <label htmlFor="startDateTime">Start</label>
                                    <input 
                                        id="startDateTime"
                                        name="startDateTime"
                                        type="datetime-local"
                                        ref={startDateTime}
                                        onChange={() => change(startDateTime)}
                                    />
                                    <label htmlFor="endDateTime">End</label>
                                    <input 
                                        id="endDateTime"
                                        name="endDateTime"
                                        type="datetime-local"
                                        ref={endDateTime}
                                        onChange={() => change(endDateTime)}    
                                    />
                                    <label htmlFor="sessionType">Session Type</label>
                                    <select
                                        id="sessionType"
                                        name="sessionType"
                                        ref={sessionType}
                                        onChange={() => change(sessionType)}    
                                    >
                                        <option value="single">Single</option>
                                        <option value="group">Group</option>
                                    </select>
                                    <label htmlFor="repeat">Repeat</label>
                                    <input 
                                        id="repeat"
                                        name="repeat"
                                        type="radio"
                                        ref={repeat}
                                        onChange={() => change(repeat)}
                                    />
                                </Fragment>
                            )}
                        >
                        </Form>
                    </div>

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
                            <CalendarMonth 
                                currentDate={selectedDate}
                                setCurrentDate={setSelectedDate}
                            />
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
