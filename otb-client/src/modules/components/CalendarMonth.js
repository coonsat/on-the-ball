import React from 'react';
import { format, startOfWeek, startOfMonth, endOfMonth, endOfWeek, addDays, isSameMonth, isSameDay } from "date-fns";

const CalendarMonth = ({currentDate, setCurrentDate }) => {

    const days = () => {
        const dateFormat = "ddd";
        const days = [];
        let startDate = startOfWeek(currentDate);
        for (let i = 0; i < 7; i++) {
              days.push(
                 <div className="column col-center" key={i}>
                 {format(addDays(startDate, i), dateFormat)}
                 </div>
              );
           }
           return <div className="days row">{days}</div>;
        };
        const cells = () => {
        const monthStart = startOfMonth(currentDate);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);
        const dateFormat = "d";
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";
        while (day <= endDate) {
           for (let i = 0; i < 7; i++) {
           formattedDate = format(day, dateFormat);
           const cloneDay = day;
        days.push(
              <div 
               className={`column cell ${!isSameMonth(day, monthStart)
               ? "disabled" : isSameDay(day, currentDate) 
               ? "selected" : "" }`} 
               key={day} 
               onClick={() => setCurrentDate( cloneDay )}
               > 
               <span className="number">{formattedDate}</span>
               <span className="bg">{formattedDate}</span>
             </div>
             );
           day = addDays(day, 1);
          }
        rows.push(
              <div className="row" key={day}> {days} </div>
            );
           days = [];
         }
         return <div className="body">{rows}</div>;
        }

    return (
        <div className="calendar">
            <div>{days()}</div>
            <div>{cells()}</div>
        </div>
    );
};

export default CalendarMonth;
